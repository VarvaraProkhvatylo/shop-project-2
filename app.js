// add to cart

let productsCountEl = document.getElementById("products-count");
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

/// change product quantity

const decrementBtns = document.querySelectorAll(".decrement-button")[0];
const incrementBtns = document.querySelectorAll(".increment-button")[0];
const inputFields = document.querySelectorAll(".product-quantity input")[0];

console.log(decrementBtns);
console.log(incrementBtns);
console.log(inputFields);

let currentValue = +inputFields.value;
toggleDisableState(currentValue);

function toggleDisableState(count) {
  decrementBtns.disabled = count <= 1;
  incrementBtns.disabled = count >= 5;
}

incrementBtns.addEventListener("click", function () {
  let currentValue = +inputFields.value;
  let newValue = currentValue + 1;
  inputFields.value = newValue;

  // if (newValue <= 1) {
  //   decrementBtns.disabled = true;
  // } else {
  //   decrementBtns.disabled = false;
  // }

  /// те саме, що і вище
  toggleDisableState(newValue);
});

decrementBtns.addEventListener("click", function () {
  let currentValue = +inputFields.value;
  let newValue = currentValue - 1;
  inputFields.value = newValue;

  // if (newValue <= 1) {
  //   decrementBtns.disabled = true;
  // } else {
  //   decrementBtns.disabled = false;
  // }

  /// те саме, що і вище
  toggleDisableState(newValue);
});

/// add slick
$(".slider-wrapper").slick({
  adaptiveHeight: true,
  dots: true,
});

/// More Details
let moreDetailsBtns = document.querySelectorAll(".details-btn");
console.log(moreDetailsBtns);

let moreDetailsModal = document.querySelector(".modal");
console.log(moreDetailsModal);

moreDetailsBtns.forEach((btn) =>
  btn.addEventListener("click", function () {
    if ($(moreDetailsModal).css("display", "none")) {
      $(moreDetailsModal).css("display", "block");
    } else {
      $(moreDetailsModal).css("display", "none");
    }
  })
);

let closeModalBtn = document.querySelectorAll(".btn-close");
console.log(closeModalBtn);

closeModalBtn.forEach((btn) =>
  btn.addEventListener("click", function () {
    if ($(moreDetailsModal).css("display", "block")) {
      $(moreDetailsModal).css("display", "none");
    }
  })
);
