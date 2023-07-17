# importing libraries
from flask import Flask, request, jsonify
from flask import jsonify

import requests

# importing modules
from algorithms.nlp import nlp_processing

from voice_rec.vr import vrr

# initializing flask instance
app = Flask(__name__)

# home endpoint
@app.route("/")
def index():
    return "<h1> FYP by 103,105,126,302 </h1>"

# NLP endpoint for text input
# Request Type: POST
# DESCRIPTION:
# It takes natural language and return code
@app.route("/nlp", methods=["POST"])
def nlp():

    modified = False

    if request.method == "POST":
        # debugging
        # print("request form", request.json)

        # getting data (user input) from form using key of payload
        data = request.json["payload"]

        modify = request.json["modify"]
        # passing data (user input) in nlp_processing algorithm that will process data and return code
        code = nlp_processing(data, modify)
        
        # returning code returned after NLP
        return jsonify(code = code, modified=modify)
        


# NLP endpoint for voice input
# Request Type: POST
# DESCRIPTION:
# It takes natural language input in voice and return speech to text result

@app.route("/voice", methods=["POST"])
def upload_file():
    print("request.files", request.files)
    uploaded_file = request.files['hamza']    
    
    if uploaded_file.filename != '':
        uploaded_file.save(f'./audios/{uploaded_file.filename}.wav')

    print(uploaded_file)
    # return "file uploaded!" 

    stt = vrr()
    return stt

@app.route("/register", methods=["POST"])
def register():
    email = request.json['email']    
    password = request.json['password']    

    print(email,password)

    res =requests.post("http://127.0.0.1:5555/api/users/register", data={"email": email, "password": password})
    data = res.content
    data = data.decode("utf-8")

    return data

@app.route("/login", methods=["POST"])
def login():
    email = request.json['email']    
    password = request.json['password']    

    print(email,password)

    res =requests.post("http://127.0.0.1:5555/api/users/login", data={"email": email, "password": password})
    data = res.content
    data = data.decode("utf-8")

    return data

if __name__ == "__main__":
    app.run(debug=True)
