  items = $(allProducts);
  //console.log("items", items);
  numItems = items.length;
  //console.log("numItems", numItems);
  perPage = 3;

  items.slice(perPage).hide();

  $("#pagination-container").pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "Next",
    nextText: "Previous>",
    onPageClick: function (pageNumber) {
      //console.log("entro a la funcion pagination", pageNumber);
      var showFrom = perPage * (pageNumber - 1);
      //console.log("showFrom", showFrom);
      var showTo = showFrom + perPage;
      console.log("showTo", showTo);
      items.hide().slice(showFrom, showTo).show();
    },
  });
{{/*function againAproof(value) {
  var result;
  console.log("+++++++++++++++++++++++++++", value)
  if (value === 'undefined') {
    result = allProducts;
  } else {
    result = allProducts.filter((element) =>
      element?.className.includes(value));
  }
  items = $(result);
  console.log("items***********", items);
  numItems = items.length;
  console.log("numItems**********", numItems);
  perPage = 4;

  items.slice(perPage).hide();
  console.log("luego del item slice");
  $("#pagination-container").pagination({
    items: numItems,
    itemsOnPage: 4,
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
*/}}