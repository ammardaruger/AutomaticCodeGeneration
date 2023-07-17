const {
  generate_uuid
} = require("../algos/uuid_generator");

const form_generator = (values) => {

  let tmp = "";

  values.forEach(value => {

    tmp = tmp + `

      <div class="col-12">
              <label for="inputEmail4" class="form-label">${value}</label>
              <input type="email" class="form-control" id="inputEmail4" />
      </div>`
  });

  return tmp
};

const get_form = (all_values, params) => {

  let vals = form_generator(all_values);

  const uuid = generate_uuid();

  return `
  <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h3> ${params["title"] || "Form"} </h3>

          <form class="row g-3">

          ${vals}
            <div class="col-12">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    `;
};

// form types ---> text, email, password
//add ids of all components

module.exports = {
  get_form
};
