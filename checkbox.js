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
numItems = items.length;
perPage = 3;
productsFiltered = [];

items.slice(perPage).hide();


Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener("change", toggleCheckbox); // el type del evento es cambiado a de "checkbox"->"change" (cambio de estado el checkbox)
}); 

function toggleCheckbox(e) {
  productsFiltered = [...allProducts].filter(p => p?.className.includes(e.target.value));
  items = $(productsFiltered);
  numItems = items.length;
  console.log(numItems);

 getChecked(e.target.name);
 // se pasa el titulo de la cajita seleccionada y retorna el nombre del evento (frozen, drinks..)
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(
    document.querySelectorAll("input[name=" + name + "]:checked")
  ).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allProducts.map(function (el) {
    var categories = checked.categories.length ? _.intersection(Array.from(el.classList), checked.categories).length : true;
    var tags = checked.tags.length ? _.intersection(Array.from(el.classList), checked.tags).length : true;
    var availability = checked.availability.length ? _.intersection(Array.from(el.classList), checked.availability).length : true;
    if (categories && tags && availability) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
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
