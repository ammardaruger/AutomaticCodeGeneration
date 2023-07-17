const image_generator = (values) => {

    let tmp = "";

    values.forEach(value => {
        tmp = tmp + `<li>${value}</a>`
    });

    return tmp
};

const get_image = (val) => {

    // let vals = list_generator(all_values);

    return `<img src="${val}" alt="alternatetext">`
};



module.exports = {
    get_image
};