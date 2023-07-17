import React, { useState } from "react";
import { addResponseMessage } from "react-chat-widget";
import "react-voice-recorder/dist/index.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Recording = ({ add_code }) => {
  const [open, setOpen] = useState(false);
  // state = {
  //   lgShow: false,
  //   audioDetails: {
  //     url: null,
  //     blob: null,
  //     chunks: null,
  //     duration: {
  //       h: null,
  //       m: null,
  //       s: null,
  //     },
  //   },
  // };

  // handleAudioStop(data) {
  //   this.setState({ audioDetails: data });
  // }
  // handleAudioUpload(file) {
  //   const formData = new FormData();
  //   formData.append("hamza", file);

  //   axios
  //     .post("/voice", formData)
  //     .then((res) => console.log(res.data))
  //     .catch((err) => console.log(err));
  // }
  // handleReset() {
  //   const reset = {
  //     url: null,
  //     blob: null,
  //     chunks: null,
  //     duration: {
  //       h: null,
  //       m: null,
  //       s: null,
  //     },
  //   };
  //   this.setState({ audioDetails: reset });
  // }

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  const handleNewUserMessage = (newMessage) => {
    const data = {
      payload: newMessage,
      modify: false,
    };

    fetch("/nlp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API response", data);
        if (data.code.includes("Sorry, I am not that smart😊")) {
          addResponseMessage("I did not understand that");
        } else {
          if (typeof data === "object" && data !== null) {
            let code = data.code;
            let modify = data.modified;
            add_code(code, modify);
          } else {
            add_code(data, this.state.createModify);
          }

          addResponseMessage("Requested Granted");
          resetTranscript();
          setOpen(false);
        }
      })
      .catch((err) => console.log("err", err));
  };

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });

  return (
    <>
      <Button className="record-btn" onClick={() => setOpen(true)}>
        <i class="fas fa-microphone-alt"></i>
      </Button>
      <Modal
        size="lg"
        show={open}
        onHide={() => setOpen(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Microphone: {listening ? "on" : "off"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          {/* <button
            className="btn btn-primary"
            onClick={SpeechRecognition.startListening({ continuous: true })}
          >
            Start
          </button>
          <button
            className="btn btn-primary"
            onClick={SpeechRecognition.stopListening}
          >
            Stop
          </button>
          <button className="btn btn-primary" onClick={resetTranscript}>
            Reset
          </button> 
          */}
          <button
            className="btn btn-primary"
            onTouchStart={startListening}
            onMouseDown={startListening}
            onTouchEnd={SpeechRecognition.stopListening}
            onMouseUp={SpeechRecognition.stopListening}
          >
            Hold to talk
          </button>
          <button className="btn btn-danger" onClick={resetTranscript}>
            Reset
          </button>
          <h2>The text you speak appears here: </h2>
          <p>{transcript}</p>
          {transcript ? (
            <button
              onClick={() => handleNewUserMessage(transcript)}
              style={{ margin: "10px" }}
              className="btn btn-primary"
            >
              Submit
            </button>
          ) : null}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Recording;
