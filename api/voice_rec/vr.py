import speech_recognition as sr

# from os import path
# from pydub import AudioSegment




# def convert():
#     # files                                                                         
#     src = "/home/ukasha/Desktop/fyp/api/audios/blob.mp3"
#     dst = "/home/ukasha/Desktop/fyp/api/audios/blob.wav"

#     # convert wav to mp3                                                            
#     sound = AudioSegment.from_mp3(src)
#     sound.export(dst, format="wav")

def vrr():
    # sound = "/Users/ammar/Desktop/FYP/blob.wav"
    # convert()
    sound = "/home/ukasha/Desktop/fyp/api/audios/blob.wav"

    r = sr.Recognizer()

    with sr.AudioFile(sound) as source:
        r.adjust_for_ambient_noise(source)

        print("Converting audio file to text.. ")

        audio = r.listen(source)

        try: 
            stt = r.recognize_google(audio)
            print("Converted audio is : \n" + stt)
            
            
            return stt
        except Exception as e:
            print(e)