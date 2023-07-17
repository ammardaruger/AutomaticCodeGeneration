const {
  generate_uuid
} = require("../algos/uuid_generator");
const { param } = require("../users/users.router");

const accordian_generator = (values) => {

  let tmp = "";

  values.forEach(value => {

      accHead = "hah"
      accBody = "lol"

      tmp = tmp + `<Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>${accHead}</Accordion.Header>
        <Accordion.Body>
          ${accBody}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>`
  });

  return tmp
};

const get_accordian = (all_values, params) => {

  let vals = accordian_generator(all_values);

  const uuid = generate_uuid();

  return `
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                ${params["title"]}
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                ${params["value"]}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
};




module.exports = {
  get_accordian
};
