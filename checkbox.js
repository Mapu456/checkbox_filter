// not exactly vanilla as there is one lodash function
var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
console.log(allCheckboxes);
var allProducts = Array.from(document.querySelectorAll('.products'));
console.log("this is the array", allProducts);
const checked = {
  "categories":[],
  "tags":[],
  "availability":[]
};
items = $(allProducts);
console.log("this is the initial items", items);
numItems = items.length;
console.log("this is the initial lenght", numItems);
perPage = 3;
console.log("this is the initial lenght", numItems);
productsFiltered = [];

items.slice(perPage).hide();
console.log("hizo slice");



Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener("change", toggleCheckbox); // el type del evento es cambiado a de "checkbox"->"change" (cambio de estado el checkbox)
  console.log("entro a function foreac. call", el);
});

function toggleCheckbox(e) {
  productsFiltered = [...allProducts].filter(p => p?.className.includes(e.target.value));
  if (productsFiltered) {
    items = $(productsFiltered);
    console.log("entro a aqui", items);
    numItems = items.length;
    items.slice(perPage).hide();
  }
  console.log(numItems);

  console.log("entro a function getchecked", e.target.name);
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll("input[name=" + name + "]:checked")).map(function (el) {
    console.log("retorno el.value", el.value);
    return el.value;
  });
}

function setVisibility() {
  console.log("entro a setvisibility")
  allProducts.map(function (el) {
    var categories = checked.categories.length ? _.intersection(Array.from(el.classList), checked.categories).length : true;
    var tags = checked.tags.length ? _.intersection(Array.from(el.classList), checked.tags).length : true;
    var availability = checked.availability.length ? _.intersection(Array.from(el.classList), checked.availability).length : true;
    if (categories && tags && availability) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }

    console.log("va a entrar a paginate 1")
    paginate(1);
  });
}

$("#pagination-container").pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "Next",
  nextText: "Previous>",
  onPageClick: pageNumber => paginate(pageNumber),
});

const paginate = pageNumber => {
  //console.log("entro a la funcion pagination", pageNumber);
  var showFrom = perPage * (pageNumber - 1);
  //console.log("showFrom", showFrom);
  var showTo = showFrom + perPage;
  console.log("showTo", showTo);
  items.hide().slice(showFrom, showTo).show();
}
