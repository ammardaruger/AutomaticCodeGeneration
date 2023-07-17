const table_generator = (values) => {

    let tmp = "";

    values.forEach(value => {
        tmp = tmp + `<td>${value}</td>`
    });

    return tmp
};

const get_table = (all_values) => {

    let vals = table_generator(all_values);

    return `
    <style>

        
    </style>
    <table style="width:100%"
    <tr>
      ${vals}
    </tr>
  </table>
    `
};



module.exports = {
    get_table
};