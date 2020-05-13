const modal = document.querySelector(".modal");
const modalClose = document.querySelector("#close");
const orderCall = document.querySelector(".header-box__callback");
const headerText = document.querySelector(".header-box");
// const phone = document.querySelector("#phone");

orderCall.addEventListener("click", toggleModal);
modalClose.addEventListener("click", toggleModalClose);

function toggleModal() {
  modal.classList.toggle("modal_active");
  headerText.style.display = "none";
}
function toggleModalClose() {
  modal.classList.toggle("modal_active");
  headerText.style.display = "inline-flex";
}

// function phoneMask() {
//   phone.mask("+7 (999) 999-99-99");
// }
