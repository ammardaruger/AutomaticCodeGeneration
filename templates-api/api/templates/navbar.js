const {
  generate_uuid
} = require("../algos/uuid_generator");

const navbar_generator = (values) => {

  let tmp = "";

  values.forEach(value => {
    tmp = tmp + `<a href="#">${value}</a>`
  });

  return tmp
};

const get_navbar = (all_values, params) => {


  let navbarBGColor = params.bgcolor || "#333"
  let navLinkFontColor = params.color || "#f2f2f2"
  let navLinkFontOnHoverBGColor = "#ddd"
  let navLinkFontOnHoverFontColor = "black"
  c = "white"

  // navbarBGColor = params.bgcolor;
  // navLinkFontColor = params.color;
  navLinkFontOnHoverBGColor = "#ddd"
  navLinkFontOnHoverFontColor = "black"


  c = "white"

  let vals = navbar_generator(all_values);

  const uuid = generate_uuid();

  return `

    <div id = ${uuid}>
    <style>
                    
    .topnav {
    background-color: ${navbarBGColor};
    overflow: hidden;
    }

    /* Style the links inside the navigation bar */
    .topnav a {
    float: left;
    color: ${navLinkFontColor};
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    }

    /* Change the color of links on hover */
    .topnav a:hover {
    background-color: ${navLinkFontOnHoverBGColor};
    color: ${navLinkFontOnHoverFontColor};
    }
</style> 


<div class="topnav">
${vals}
</div>

</div>
    `
};

const get_paragraph = (data, params) => {
  const uuid = generate_uuid();
  let color = params["color"] || "black"
  let bgcolor = params["bgcolor"] || "white"
  return `
  <style>
    .para${uuid}{
      color: ${color};
      background-color: ${bgcolor};
    }               
    
  </style>
    <p class="para${uuid}"> ${data} </p>
  `
};



module.exports = {
  get_navbar,
  get_paragraph
};