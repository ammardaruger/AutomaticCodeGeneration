const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
var cors = require("cors");

const users = require("./api/users/users.router");

const app = express();

app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

const { get_navbar, get_paragraph } = require("./api/templates/navbar.js");

const { get_list } = require("./api/templates/list");

const { get_image } = require("./api/templates/image");

const { get_table } = require("./api/templates/table");

const { get_cards } = require("./api/templates/cards");

const { get_heading } = require("./api/templates/heading");

const { get_accordian } = require("./api/templates/accordian");

const { get_form } = require("./api/templates/form");

<<<<<<< HEAD
mongoose
  .connect(
    "mongodb+srv://fyp:G834ZnAGJPp1lAj5@cluster0.jzajd.mongodb.net/fyp2021?retryWrites=true&w=majority"
  )
=======
const {
  get_slider
} = require("./api/templates/slider");

const {
  get_button
} = require("./api/templates/button");


mongoose.connect("mongodb+srv://fyp:G834ZnAGJPp1lAj5@cluster0.jzajd.mongodb.net/fyp2021?retryWrites=true&w=majority")
>>>>>>> 9e32db494ffaeccc9253c84881f08e5c8a8ad801
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

const Code = require("./models/Code");

let current_context = "";

app.post("/", async (req, res) => {
  let { value, element_type, modified, params } = req.body;

  params = JSON.parse(params);
  console.log("params", params);

  let all_values = [];

  if (!modified || !modified.includes("True")) {
    current_context = {
      element_type: element_type,
      value: value,
    };
  }

  console.log("current_context is:", current_context);

  if (modified && modified.includes("True")) {
    console.log("req.body", req.body);
    element_type = current_context["element_type"];
    // value = params["value"]
  }

  modified &&
    modified.includes("True") &&
    console.log("element_type", element_type);
  all_values = value.split(",");


  
  if (element_type === "navbar") {
    res.send(get_navbar(all_values, params));
  } else if (element_type === "paragraph") {
    res.send(get_paragraph(value, params));
  } else if (element_type === "list") {
    res.send(get_list(all_values, params));
  } else if (element_type === "image") {
    res.send(get_image(value, params));
  } else if (element_type === "table") {
    res.send(get_table(all_values, params));
  } else if (element_type === "cards") {
    res.send(get_cards(value, params));
  } else if (element_type === "heading") {
    modified && modified.includes("True") && console.log("modifying now");

    // console.log("all_values, params", all_values, params)
    let code = get_heading(all_values, params);

    // let newCode = new Code({
    //   code
    // });

    // try {
    //   const code = await newCode.save();

    // } catch (e) {
    //   console.log(e);
    // }
    res.send(code);
  } else if (req.body.element_type === "accordian") {
    res.send(get_accordian(all_values, params));
  } else if (req.body.element_type === "form") {
    res.send(get_form(all_values, params));
<<<<<<< HEAD
=======

  } else if (req.body.element_type === "slider") {
    res.send(get_slider());

  }else if (req.body.element_type === "button") {
    res.send(get_button(all_values, params));

>>>>>>> 9e32db494ffaeccc9253c84881f08e5c8a8ad801
  }
});

app.use("/api/users", users);

app.listen(5555, () => {
  console.log("running on 5555");
});
