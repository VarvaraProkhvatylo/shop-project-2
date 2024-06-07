// add to cart

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

// like

let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);

likeBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    console.log("clicked");
  })
);

// let style;
// function getStyleSheet(style) {
//   for (const sheet of document.styleSheets) {
//     if (sheet.title === style) {
//       return sheet;
//     }
//   }
// }

// let backgroundImage = style.icons.like {background-image};

// function changeBtn() {
//   if (likeBtns === "clicked") {
//     likeBtns.style.backgroundImage = "url(images/like_hover.png";
//   } else {
//     likeBtns.style.backgroundImage = "url(images/like_default.png)";
//   }
// }

function changeBtn() {
  if (likeBtns === likeBtns.forEach) {
    likeBtns.setAttribute("class", "like-clicked");
  } else {
    likeBtns.setAttribute("class", "like");
  }
}

likeBtns.forEach((btn) => btn.addEventListener("click", changeBtn));
