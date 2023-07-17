from dominate.tags import *
import json
import requests
# import json

current_context = ""


def code_generator(params, modify):
    global current_context

    jsonified_params = json.dumps(params["params"])

    try:
        box = div(id="box")
        with box:
            boxheader = div(id="boxheader")

        with boxheader:

            if current_context and modify:
                print("altering")
                # data = {"current_context": current_context, "modified_context": params, "modified": modify}
                code = requests.post(
                    "http://127.0.0.1:5555", data={"value": params["value"], "modified": modify, "params": jsonified_params})
                return code.text

            elif params["type"] == "navbar":
                current_context = {"element_type": "navbar",
                                   "value": params["value"]}

                code = requests.post(
                    "http://127.0.0.1:5555", data={"element_type": "navbar", "value": params["value"], "params": jsonified_params})
                return code.text

            elif params["type"] == "paragraph":
                current_context = {
                    "element_type": "paragraph", "value": params["value"]}

                code = requests.post(
                    "http://127.0.0.1:5555", data={"element_type": "paragraph", "value": params["value"], "params": jsonified_params})
                return code.text

            elif params["type"] == "list":
                current_context = {"element_type": "list",
                                   "value": params["value"]}

                code = requests.post(
                    "http://127.0.0.1:5555", data={"element_type": "list", "value": params["value"], "params": jsonified_params})
                return code.text

            elif params["type"] == "image":
                current_context = {"element_type": "image",
                                   "value": params["value"]}

                code = requests.post(
                    "http://127.0.0.1:5555", data={"element_type": "image", "value": params["value"], "params": jsonified_params})
                return code.text

            elif params["type"] == "table":
                current_context = {"element_type": "table",
                                   "value": params["value"]}

                code = requests.post(
                    "http://127.0.0.1:5555", data={"element_type": "table", "value": params["value"], "params": jsonified_params})
                return code.text
            elif params["type"] == "cards":
                current_context = {"element_type": "cards",
                                   "value": params["value"]}

                code = requests.post(
                    "http://127.0.0.1:5555", data={"element_type": "cards", "value": params["value"], "params": jsonified_params})
                return code.text

            elif params["type"] == "h1":
                current_context = {
                    "element_type": "heading", "value": params["value"]}

                code = requests.post("http://127.0.0.1:5555", data={
                                     "element_type": "heading", "value": params["value"], "params": jsonified_params})
                return code.text

            elif params["type"] == "accordian":
                current_context = {
                    "element_type": "accordian", "value": params["value"]}

                code = requests.post(
                    "http://127.0.0.1:5555", data={"element_type": "accordian", "value": params["value"], "params": jsonified_params})
                return code.text

            elif params["type"] == "form":
                current_context = {"element_type": "form",
                                   "value": params["value"]}

                code = requests.post(
                    "http://127.0.0.1:5555", data={"element_type": "form", "value": params["value"], "params": jsonified_params})
                return code.text

            elif params["type"] == "slider":
                current_context = {"element_type": "slider", "params": jsonified_params}

                code = requests.post(
                    "http://127.0.0.1:5555", data={"element_type": "slider","value": params["value"], "params": jsonified_params})
          
                return code.text
            
            elif params["type"] == "button":
                current_context = {"element_type": "button", "params": jsonified_params}

                code = requests.post(
                    "http://127.0.0.1:5555", data={"element_type": "button","value": params["value"], "params": jsonified_params})
                return code.text

# button

        return box
    except:
        return "Sorry, I am not that smart😊"
