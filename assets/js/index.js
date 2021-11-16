import Validator from "./Validator.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelector.bind(document);
const modalSignin = $(".modal-signin");
const modalSignup = $(".modal-signup");
const modalSigninContainer = $(".modal-signin-container");
const modalSignupContainer = $(".modal-signup-container");
const modalCloseSignin = $(".close-signin");
const modalCloseSignup = $(".close-signup");
const menunav = $(".nav");
const signup = $("#btn-signup");
const signin = $("#btn-signin");
const iconmenus = $(".s-icon-menu");
const menuhide = $(".menu-hide");
const menuhidecontainer = $(".menu-hide-container");
const lycf = $(".img-lycf");

function showModal(modal) {
  modal.classList.add("open");
}

function hideModal(modal) {
  modal.classList.remove("open");
}
// Xử lý login
signin.onclick = function () {
  showModal(modalSignin);
};
modalSignin.onclick = function () {
  hideModal(modalSignin);
};
modalSigninContainer.onclick = function (e) {
  e.stopPropagation();
};
modalCloseSignin.onclick = function () {
  hideModal(modalSignin);
};
// Xử lý signup
signup.onclick = function () {
  showModal(modalSignup);
};
modalSignup.onclick = function () {
  hideModal(modalSignup);
};
modalSignupContainer.onclick = function (e) {
  e.stopPropagation();
};
modalCloseSignup.onclick = function () {
  hideModal(modalSignup);
};
//
// iconmenus.onclick = function () {
//   menuhide.classList.add("open");
// };
// menuhide.onclick = function () {
//   menuhide.classList.remove("open");
// };

// function changeImg() {
//     var index = 1
//     var imgs = [
//         "/assets/imgs/ly1.png",
//         "/assets/imgs/ly2.png",
//         ""
//     ]
//     lycf.src = imgs[index]
//     index++
//     if (index > 1) {
//         index = 0

//     }
// }
// lycf.onclick = function() {
//     changeImg()
// }
// Validate

Validator({
  form: "#form-signin",
  formGroup: ".form-group",
  errorSelector: ".form-message",
  rules: [
    Validator.isRequired("#fullname"),
    Validator.isRequired("#email", "* Please enter a email"),
    Validator.isEmail("#email", " * Invalid email"),
    Validator.isRequired("#password", "* Please enter a password"),
    // Validator.minLenght("#password", 2),
    Validator.isRequired(
      "#password_confirmation",
      "Vui lòng xác nhận mật khẩu"
    ),
    Validator.isConfirmed(
      "#password_confirmation",
      function () {
        return document.querySelector("#form-1 #password").value;
      },
      "Mật khẩu nhập lại không chính xác"
    ),
  ],
  onSubmit: function (data) {
    console.log(data);
  },
});
//
// get productItem dom
const productList = $(".product-list");
// var html = productItems.map((item) => {
//   return ` <div class="col l-2-4 m-4 c-12">
//   <div class="product-item">
//     <a class="product-item__link">
//       <div
//         class="product-item__img"
//         style="background-image: url(./assets/imgs/MayPhacf.png)"
//       ></div>
//       <div class="product-item__content">
//         <p class="product-item__name">
//           Máy pha cà phê Espresso - Hàng Chính Hãng
//         </p>
//         <div class="product-item__price">
//           <span class="product-item__price-old">1.200.000</span>
//           <span class="product-item__price-current">888.888</span>
//         </div>
//         <div class="product-item__action">
//           <span class="product-item__like">
//             <i
//               class="product-item__like-icon-empty far fa-heart"
//             ></i>
//             <i
//               class="product-item__like-icon-fill fas fa-heart"
//             ></i>
//           </span>
//           <div class="product-item__rating">
//             <i class="product-item__star--gold fas fa-star"></i>
//             <i class="product-item__star--gold fas fa-star"></i>
//             <i class="product-item__star--gold fas fa-star"></i>
//             <i class="product-item__star--gold fas fa-star"></i>
//             <i class="fas fa-star"></i>
//           </div>
//         </div>
//         <div class="product-item__origin">
//           <span class="product-item__brand">SamSung</span>
//           <i class="fas fa-plus-circle"></i>
//         </div>

//         <div class="product-item__sale-off">
//           <span class="product-item__sale-off-percent">10%</span>
//           <span class="product-item__sale-off-label">GIẢM</span>
//         </div>
//       </div>
//     </a>
//   </div>
// </div>
// </div>`;
// });

// const API = "http://localhost:3000/MayPhaCaPhe";
// function getProduct(callback) {
//   fetch(API)
//     .then((response) => response.json())
//     .then(callback);
// }
// getProduct(renderProduct);

// // Render Product
// function renderProduct(products) {
//   const productList = $(".home-product-list");
//   var productRender = products.map((productItems) => {
//     return `<div class="col l-2-4 m-4 c-12 color home-product-item ">
//       <a class="home-product-item__link">
//         <div
//           class="home-product-item__img"
//           style="background-image: url(./assets/imgs/MayPhacf.png)"
//         ></div>
//         <div class="home-product-item__content">
//           <p class="home-product-item__name">
//             ${productItems.name}
//           </p>
//           <div class="home-product-item__price">
//             <span class="home-product-item__price-old">1.200.000</span>
//             <span class="home-product-item__price-current"
//               >888.888</span
//             >
//           </div>
//           <div class="home-product-item__action">
//             <span class="home-product-item__like">
//               <i
//                 class="home-product-item__like-icon-empty far fa-heart"
//               ></i>
//               <i
//                 class="home-product-item__like-icon-fill fas fa-heart"
//               ></i>
//             </span>
//             <div class="home-product-item__rating">
//               <i class="home-product-item__star--gold fas fa-star"></i>
//               <i class="home-product-item__star--gold fas fa-star"></i>
//               <i class="home-product-item__star--gold fas fa-star"></i>
//               <i class="home-product-item__star--gold fas fa-star"></i>
//               <i class="fas fa-star"></i>
//             </div>
//           </div>
//           <div class="home-product-item__origin">
//             <span class="home-product-item__brand">SamSung</span>
//             <span class="home-product-item__origin-name">Hàn Quóc</span>
//           </div>

//           <div class="home-product-item__sale-off">
//             <span class="home-product-item__sale-off-percent">10%</span>
//             <span class="home-product-item__sale-off-label">GIẢM</span>
//           </div>
//         </div>
//       </a>
//     </div>`;
//   });
//   var productRenders = productRender.join("");
//   productList.innerHTML = productRenders;
// }
