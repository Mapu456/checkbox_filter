var result;
function againAproof(value) {
  console.log(
    "este es el hasta aca*********************************************** ",
    value
  );
  if (value) {
    result = allProducts.filter((element) =>
      element?.className.includes(value)
    );
    var items = $(result);
    console.log("items", items);
    var numItems = items.length;
    console.log("numItems", numItems);
    var perPage = 4;

    items.slice(perPage).hide();

    $("#pagination-container").pagination({
      items: numItems,
      itemsOnPage: perPage,
      prevText: "Next",
      nextText: "Previous>",
      onPageClick: function (pageNumber) {
        console.log("entro a la funcion pagination", pageNumber);
        var showFrom = perPage * (pageNumber - 1);
        console.log("showFrom", showFrom);
        var showTo = showFrom + perPage;
        console.log("showTo", showTo);
        items.hide().slice(showFrom, showTo).show();
      },
    });
  }
}
var items = $(allProducts);
console.log("items", items);
var numItems = items.length;
console.log("numItems", numItems);
var perPage = 4;

items.slice(perPage).hide();

$("#pagination-container").pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: "Next",
  nextText: "Previous>",
  onPageClick: function (pageNumber) {
    console.log("entro a la funcion pagination", pageNumber);
    var showFrom = perPage * (pageNumber - 1);
    console.log("showFrom", showFrom);
    var showTo = showFrom + perPage;
    console.log("showTo", showTo);
    items.hide().slice(showFrom, showTo).show();
  },
});
