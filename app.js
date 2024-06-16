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

/// change product quantity old

// const decrementBtns = document.querySelectorAll(".decrement-button")[0];
// const incrementBtns = document.querySelectorAll(".increment-button")[0];
// const inputFields = document.querySelectorAll(".product-quantity input")[0];

// console.log(decrementBtns);
// console.log(incrementBtns);
// console.log(inputFields);

// let currentValue = +inputFields.value;
// toggleDisableState(currentValue);

// function toggleDisableState(count) {
//   decrementBtns.disabled = count <= 1;
//   incrementBtns.disabled = count >= 5;
// }

// incrementBtns.addEventListener("click", function () {
//   let currentValue = +inputFields.value;
//   let newValue = currentValue + 1;
//   inputFields.value = newValue;

//   // if (newValue <= 1) {
//   //   decrementBtns.disabled = true;
//   // } else {
//   //   decrementBtns.disabled = false;
//   // }

//   /// те саме, що і вище
//   toggleDisableState(newValue);
// });

// decrementBtns.addEventListener("click", function () {
//   let currentValue = +inputFields.value;
//   let newValue = currentValue - 1;
//   inputFields.value = newValue;

// if (newValue <= 1) {
//   decrementBtns.disabled = true;
// } else {
//   decrementBtns.disabled = false;
// }

/// те саме, що і вище
//   toggleDisableState(newValue);
// });

/// add slick
$(".slider-wrapper").slick({
  adaptiveHeight: true,
  dots: true,
});

/// More Details homework open/close modal
let moreDetailsBtns = document.querySelectorAll(".details-btn");
console.log(moreDetailsBtns);

let moreDetailsModal = document.querySelector(".modal");
console.log(moreDetailsModal);

// moreDetailsBtns.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     if ($(moreDetailsModal).css("display", "none")) {
//       $(moreDetailsModal).css("display", "block");
//     } else {
//       $(moreDetailsModal).css("display", "none");
//     }
//   })
// );

//// lesson, same as HW
// moreDetailsBtns.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     moreDetailsModal.classList.add("show");
//   })
// );

function openModal() {
  moreDetailsModal.classList.add("show");
}
moreDetailsBtns.forEach((btn) => btn.addEventListener("click", openModal));

/////

let closeModalBtn = document.querySelector(".btn-close");
console.log(closeModalBtn);

// closeModalBtn.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     if ($(moreDetailsModal).css("display", "block")) {
//       $(moreDetailsModal).css("display", "none");
//     }
//   })
// );

/// lesson, same as HW
// closeModalBtn.addEventListener("click", function () {
//   moreDetailsModal.classList.remove("show");
// });

function closeModal() {
  moreDetailsModal.classList.remove("show");
}
closeModalBtn.addEventListener("click", closeModal);

moreDetailsModal.addEventListener("click", function (e) {
  console.log(e);
  console.log(e.target);
  if (moreDetailsModal === e.target) {
    closeModal();
  }
  if (e.target === document.querySelector(".form-wrapper h3")) {
    document.querySelector(".form-wrapper h3").style.color = "red";
  }
});

/// Counter OOP - new counter

const decrementBtns = document.querySelectorAll(".decrement-button");
const incrementBtns = document.querySelectorAll(".increment-button");
const inputFields = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleDisableState = function () {
    const count = this.domRefs.inputField.value;
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };

  this.toggleDisableState();
  console.log("це this" + this);

  this.decrement = function () {
    let currentValue = +this.domRefs.inputField.value;
    let newValue = currentValue - 1;
    this.domRefs.inputField.value = newValue;

    this.toggleDisableState();
  };

  this.increment = function () {
    let currentValue = +this.domRefs.inputField.value;
    let newValue = currentValue + 1;
    this.domRefs.inputField.value = newValue;

    this.toggleDisableState();
  };

  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
}

let counter1 = new Counter(incrementBtns[0], decrementBtns[0], inputFields[0]);

console.log(counter1);

// //// Об'єктно-орієнтовно програмування (OOP) example

// // let audi = {
// //   model: "A4",
// //   color: "black",
// //   year: "2020",
// // };

// // let lexus = {
// //   model: "ES350",
// //   color: "silver",
// //   year: "2015",
// // };

// // let bmw = {
// //   model: "320",
// //   color: "white",
// //   year: "2019",
// // };

// function Car(name, model, color, year) {
//   this.name = name;
//   this.model = model;
//   this.color = color;
//   this.year = year;

//   this.getCarName = function () {
//     return this.name + "" + this.model;
//   };
// }

// let audi = new Car("Audi", "A4", "black", "2020");
// let lexus = new Car("Lexus", "ES350", "silver", "2015");
// let bmw = new Car("BMW", "320", "white", "2019");
// // console.log(audi);
// console.log(audi.getCarName());
// // console.log(lexus);
// console.log(lexus.getCarName());
// // console.log(bmw);
// console.log(bmw.getCarName());

// // new Calculator(a, b); praxis

// function Calculator(a, b) {
//   this.a = a;
//   this.b = b;

//   this.sum = function () {
//     return this.a + this.b;
//   };

//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calc1 = new Calculator(2, 10);

// console.log(calc1.sum());
// console.log(calc1.mul());
