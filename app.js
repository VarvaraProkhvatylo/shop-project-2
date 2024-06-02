let productsCountEl = document.getElementById("products-count");

let addToCartBtns = document.querySelectorAll(".add-to-cart");
console.log(productsCountEl);
console.log(addToCartBtns);

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    console.log("clicked");
  })
);
