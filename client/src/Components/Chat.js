import React, { Component } from "react";
import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import ToggleButton from 'react-toggle-button'
// import axios from "axios";

// import Main from "./Main";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      createModify: false
    };
  }

  componentDidMount() {
    addResponseMessage("Welcome to this awesome chat!");
  }

  render() {
    const handleNewUserMessage = (newMessage) => {
      const data = {
        payload: newMessage,
        modify: this.state.createModify
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
            if (typeof data === 'object' && data !== null) {
              let code = data.code
              let modify = data.modified
              this.props.add_code(code, modify);
            } else {
              this.props.add_code(data, this.state.createModify);
            }

            addResponseMessage("Requested Granted");
          }
        })
        .catch((err) => console.log("err", err));

      // console.log(`New message incoming! ${newMessage}`);
      //   // Now send the message throught the backend API
    };
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Automatice Code Generator"
          subtitle=""
          senderPlaceHolder="Type to Create UI"

        />
        <div className="float-button" style={{ "display": "flex" }}>
          <span>{this.state.createModify ? "Modify" : "Create"}&nbsp;&nbsp;</span>
          <span>
            <ToggleButton
              inactiveLabel={""}
              activeLabel={""}
              value={this.state.createModify}
              onToggle={(value) => {
                this.setState({
                  createModify: !value,
                })
              }} />
          </span>
          &nbsp;&nbsp;
          {/* <span>Modify</span> */}
        </div>
      </div >
    );
  }
}

export default Chat;
