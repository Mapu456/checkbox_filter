//evento = cajita seleccionada
// not exactly vanilla as there is one lodash function
const allCheckboxes = document.querySelectorAll("input[type=checkbox]");
//console.log(allCheckboxes); // lista todas las cajitas o checkboxes listadas sin titulo
const allProducts = Array.from(document.querySelectorAll(".products"));
//console.log("************************", allProducts); // lista la clase de los productos
const checked = {
  "categories":[],
  "tags":[],
  "availability":[]
};



Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener("change", toggleCheckbox); // el type del evento es cambiado a de "checkbox"->"change" (cambio de estado el checkbox)
}); 

function toggleCheckbox(e) {
  const productsFiltered = [...allProducts].filter(p => p?.className.includes(e.target.value));

 getChecked(e.target.name);
 // se pasa el titulo de la cajita seleccionada y retorna el nombre del evento (frozen, drinks..)
  setVisibility(productsFiltered);
}

function getChecked(name) {
  checked[name] = Array.from(
    document.querySelectorAll("input[name=" + name + "]:checked")
  ).map(function (el) {
    return el.value;
  });
}


function setVisibility(filteredProducts) {

  filteredProducts.map(el => {
    //console.log("checked antes", checked);
    var categories = checked.categories.length? _.intersection(Array.from(el.classList), checked.categories).length : true;
    var tags = checked.tags.length? _.intersection(Array.from(el.classList), checked.tags).length : true;
    var availability = checked.availability.length ? _.intersection(Array.from(el.classList), checked.availability).length : true;
    if (categories && tags && availability) {
     // el.style.display = "block";
     el.style.display = "none";
      console.log("el event", el);
    } else {

    }
    return el;
  });
}
