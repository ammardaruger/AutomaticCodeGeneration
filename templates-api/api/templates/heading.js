const {
    generate_uuid
} = require("../algos/uuid_generator");



const heading_generator = (values, uuid) => {

    let tmp = "";

    values.forEach(value => {
        tmp = tmp + `<h1 class="heading${uuid}">${value}</h1>`
    });

    return tmp
};

const get_heading = (values, params) => {
    const uuid = generate_uuid();
    let vals = heading_generator(values, uuid);
    let color = params["color"] || "black"
    let bgcolor = params["bgcolor"] || "white"
    let size = "50px"
    if (params["size"]) {
        size = params["size"] === "large" ? "60px" : params["size"] === "medium" ? "50px" : "40px"
    }
    return `
  
    <div id = ${uuid}>
      
    <style>
        .heading${uuid} {
            color: ${color};
            background-color: ${bgcolor};
            font-size: ${size}
        }
    </style> 
  
  
    <div>
        ${vals}
    
    </div>
  
  </div>
      `
};




module.exports = {
    get_heading
};