""" 
look for value parameter and extract the value of it

value => right side words of value parameter
"""

keywords = ["value", "color", "bgcolor", "size", "title"]


def parameter_extraction(text):
    splitted_string = text.split()

    params = {}

    for i in range(0, len(splitted_string)):
        tmp = []
        if splitted_string[i] in keywords:
            keyword = splitted_string[i]

            flag = True
            for j in range(i+1, len(splitted_string)):
                if splitted_string[j] not in keywords:

                    if (flag):
                        tmp.append(splitted_string[j])
                else:
                    flag = False

            a = ' '.join(tmp)
            params[keyword] = a

    return params

    # for i in range(0,len(splitted_string)):
    #     if splitted_string[i] == "value":
    #         actual_val = splitted_string[i+1:]
    #         a= ' '.join(actual_val)
    #         return a
