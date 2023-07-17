const {
    generate_uuid
} = require("../algos/uuid_generator");

const _generator = (values) => {

    let tmp = "";

    values.forEach(value => {
        tmp = tmp + `<a href="#">${value}</a>`
    });

    return tmp
};

const get_navbar = (all_values) => {

    let vals = navbar_generator(all_values);

    const uuid = generate_uuid();

    return `
  
    <div id = ${uuid}>
      
    <style>
        
    </style> 
  
  
    <div>
        ${vals}
    
    </div>
  
  </div>
      `
};




module.exports = {
    get_navbar
};