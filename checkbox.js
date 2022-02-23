//evento = cajita seleccionada
// not exactly vanilla as there is one lodash function
var allCheckboxes = document.querySelectorAll("input[type=checkbox]");
console.log(allCheckboxes); // lista todas las cajitas o checkboxes listadas sin titulo
var allProducts = Array.from(document.querySelectorAll(".products"));
console.log("************************", allProducts); // lista la clase de los productos
var checked = {};

//getChecked() is used to check whether a user has checked a checkbox or
//radio button by using the element ID
//proof
getChecked("categories");
getChecked("tags");
getChecked("availability");

//El array no se usa en absoluto pero da acceso al uso del prototipo foreach
// y call es un prototipo que llama a otras funciones
Array.prototype.forEach.call(allCheckboxes, function (el) {
  console.log("this is a proof", el);
  el.addEventListener("change", toggleCheckbox); // el type del evento es cambiado a de "checkbox"->"change" (cambio de estado el checkbox)
}); //y vaya a la funcion toggleCheckbox

function toggleCheckbox(e) {
  console.log("this is a proof e ", e); //"e" es la clase de cada checkbox seleccionado
  console.log("this is a proof e ************", e.target.name); //esta seleccionando los titulos de cada cajita seleccionada
  getChecked(e.target.name); // se pasa el titulo de la cajita seleccionada y retorna el nombre del evento (frozen, drinks..)
  setVisibility();
}

function getChecked(name) {
  //al titulo se le asigna el nombre del evento que fue checkeado
  checked[name] = Array.from(
    document.querySelectorAll("input[name=" + name + "]:checked")
  ).map(function (el) {
    console.log("este es el array checked hasta aca+++++ ", checked);
    console.log("este es el hasta aca+++++ ", el.value);
    againAproof(el.value);
    return el.value; //retorna el nombre del evento
  });
}



function setVisibility() {
  allProducts.map(function (el) {
    console.log("checked antes", checked);
    var categories = checked.categories.length? _.intersection(Array.from(el.classList), checked.categories).length : true;
    var tags = checked.tags.length? _.intersection(Array.from(el.classList), checked.tags).length : true;
    var availability = checked.availability.length ? _.intersection(Array.from(el.classList), checked.availability).length : true;
    console.log("categories", categories);
    if (categories && tags && availability) {
      el.style.display = "block";
      console.log("el event", el);
    } else {
      el.style.display = "none";
    }
  });
}
