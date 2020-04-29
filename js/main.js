const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector("#close");

cartButton.addEventListener('click', toggleModal);
modalClose.addEventListener('click', toggleModal);

function toggleModal() {
   modal.classList.toggle("modal--active");
}

