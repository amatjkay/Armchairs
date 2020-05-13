const modal = document.querySelector(".modals__layout");
const modalThanks = document.querySelector(".modals__layout-thanks");
const modalsCallback = document.querySelector(".modals__layout-callback");
const modalClose = document.querySelector("#close");
const modalClose2 = document.querySelector("#close2");
const orderCall = document.querySelector(".header-box__callback");
const headerText = document.querySelector(".header-box");
const modalBtn = document.querySelector("#modalBtn");
const orderBtn = document.querySelector("#orderBtn");
const orderBtn2 = document.querySelector("#orderBtn2");
const orderBtn3 = document.querySelector("#orderBtn3");
const orderBtn4 = document.querySelector("#orderBtn4");

function toggleModal() {
  modal.classList.toggle("modals__layout_active");
}

function showThanks() {
  if (modalThanks) {
    modalsCallback.style.display = "none";
    modalThanks.classList.add("modals__layout-thanks_active");
  }
}

function toggleModalClose() {
  if (modalThanks) {
    modalThanks.classList.remove("modals__layout-thanks_active");
    if (modalThanks) {
      toggleModal();
      if (modal) {
        modalsCallback.style.display = "initial";
      }
    }
  } else {
    toggleModal();
  }
}

orderCall.addEventListener("click", toggleModal);
orderBtn.addEventListener("click", toggleModal);
orderBtn2.addEventListener("click", toggleModal);
orderBtn3.addEventListener("click", toggleModal);
orderBtn4.addEventListener("click", toggleModal);
modalBtn.addEventListener("click", showThanks);
modalClose.addEventListener("click", toggleModalClose);
modalClose2.addEventListener("click", toggleModalClose);
