const {
    generate_uuid
  } = require("../algos/uuid_generator");
  

const list_generator = (values) => {

    let tmp = "";

    values.forEach(value => {
        tmp = tmp + `<li>${value}</a>`
    });

    return tmp
};

const get_list = (all_values) => {

    let vals = list_generator(all_values);
    let ListItemsBGColor = "white"

    const uuid = generate_uuid();


    return `

    <div id = ${uuid}>

    <style>

        ul li {
            background: ${ListItemsBGColor};
            margin: 5px;
        }
    </style>

    <div class="a">
        <ul>
            ${vals}
        </ul>
    </div>
    </div>
      `
};



module.exports = {
    get_list
};