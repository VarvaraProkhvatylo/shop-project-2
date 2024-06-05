let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".add-to-cart");

console.log(productsCountEl);
console.log(addToCartBtns);

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    console.log("clicked");
  })
);
let counter = 0;

addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    counter++;
    productsCountEl.innerHTML = counter;
  })
);
