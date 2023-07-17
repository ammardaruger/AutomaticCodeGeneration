const {
    generate_uuid
} = require("../algos/uuid_generator");


const get_button = (all_values, params) => {
    let color = params["color"] || "white"
    let backgroundColor = params["bgcolor"] || "#007bff"
    console.log("params", params["color"], params["bgcolor"])
    return `
    <style> 
        
        
    </style>
    <button type="button" style="color: ${color}; background-color: ${backgroundColor}; border: none" class="btn btn-primary">${all_values[0]}</button>
    
    
    `
};

module.exports = {
    get_button
};