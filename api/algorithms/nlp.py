# importing nltk and it's modules

from nltk import data

from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer


from algorithms.text_processing import parameter_extraction
from algorithms.code_generator import code_generator


# initializing PorterStemmer
ps = PorterStemmer()

def nlp_processing(data, modify):
    
    # data => A sentence entered by user

    # converting data in lowercase
    data = data.lower()
    
    """
    passing data to parameter_extraction which will extract the following parameters

    value => (heading, button)
    """
    params = parameter_extraction(data)
    # print("params: ",params)

    # tokenizing sentence(data) in words
    tokenized_words = word_tokenize(data)

    # removing stop words
    stopwords_in_english = set(stopwords.words("english"))

    filtered_words = []

    for w in tokenized_words:
        if w not in stopwords_in_english:
            filtered_words.append(w)

    print("text after removing stopwords: ", filtered_words, "\n")

    # stemming
    stemmed_words = []
    for w in filtered_words:
        stemmed_words.append(ps.stem(w))

    print("text after stemming the words: ", stemmed_words, "\n")

    # colors = get_colors()
    colors = {
        "red": "#FF0000",
        "blue": "#0000FF",
        "yellow": "#FFFF00",
        "green": "#00FF00",
        "black": "#000000",
        "white": "#FFFFFF",
        "orang": "#FF6600",
        "purpl": "#6600FF"
    }

    element_type = {
        "head": "h1",
        "button": "button",
        "paragraph": "p",
        "navbar": "navbar",
        "paragraph": "paragraph",
        "list": "list",
        "imag": "image",
        "tabl": "table",
        "card": "cards",
        "accordian": "accordian",
        "form": "form",
        "slider": "slider"
    }

    position = {
        'center': 'center',
        'right': 'flex-end'
    }

    parameters = {
        "direction": "row",
        "position": "left",
        "children": [],
        "value": params["value"],
        "props": '',
        "params": params
    }

    color = ""

    def setColor(param_type, w=None):
        if(param_type == "button"):
            parameters["props"] = f'background-color: {color or colors[w]};'
        else:
            parameters["props"] = f'color: {color or colors[w]};'

    for w in stemmed_words:
        if w in colors:
            if(parameters.get("type")):
                setColor(parameters.get("type"), w)
            else:
                color = w
        elif w in element_type:
            if(color):
                setColor(element_type[w])
            parameters["type"] = element_type[w]
        elif w in position:
            parameters["position"] = position[w]


    print("parameters generated by NLP: ", parameters, "\n")

    code = code_generator(parameters, modify)

    print("generated code is: ", code)

    return str(code)


# heading and color of heading
# button and background color of button
# position of the element
