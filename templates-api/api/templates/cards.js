const get_cards = (value, params) => {
  title = params["title"]
  // cardBody = "chal nikal"
  // cardBtn = "click me"
  cardImg = "https://via.placeholder.com/200x100"
  return `
   <div class="card" style="width: 18rem;">
      <div class="card-body">
        <img class="card-img-top" src="${cardImg}" alt="Card image cap">
        <h3 class="card-title">${title}</h3>
        <p class="card-text">${value}</p>
      </div>
    </div>
      `;
};

module.exports = {
  get_cards,
};

//   <img class="card-img-top" src="${cardImg}" alt="Card image cap">
// <a href="#" class="btn btn-primary">${cardBtn}</a>
// <p class="card-text">${cardBody}</p>