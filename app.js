// add to cart

// let productsCountEl = document.getElementById("products-count");
let addToCartBtns = document.querySelectorAll(".add-to-cart");

// console.log(productsCountEl);
// console.log(addToCartBtns);

// addToCartBtns.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     console.log("clicked");
//   })
// );
// let counter = 0;

// addToCartBtns.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     counter++;
//     productsCountEl.innerHTML = counter;
//   })
// );

//// тестове на занятті
addToCartBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    // let currentCount = +productsCountEl.textContent;
    // productsCountEl.textContent = currentCount + 1;
    // ще варіант
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  })
);

// like toggle

// let likeBtns = document.querySelectorAll(".like");
// console.log(likeBtns);

// likeBtns.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     console.log("clicked");
//   })
// );

// let isToggled = false;

// likeBtns.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     isToggled = !isToggled;
//     this.classList.toggle("active");
//   })
// );

/// like на занятті тест
let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);

// for (let i = 0; i < likeBtns.length; i++) {
//   likeBtns[i].addEventListener("click", function () {
//     console.log("liked");
//   });
// }

//// замість циклу for
// likeBtns.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     if (btn.classList.contains("liked")) {
//       btn.classList.remove("liked");
//     } else {
//       btn.classList.add("liked");
//     }
//   })
// );

///те саме через toggle
likeBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    btn.classList.toggle("liked");
  })
);
