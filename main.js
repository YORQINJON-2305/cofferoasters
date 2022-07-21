var elOpenModal = document.querySelector(".modal-open-btn");
var elModal = document.querySelector(".modal");
var elCloseModal = document.querySelector(".js-close-btn");

elOpenModal.addEventListener("click", function(){
    elModal.classList.add("open-modal")
})

elCloseModal.addEventListener("click", function(){
    elModal.classList.remove("open-modal")
})

// elModal.addEventListener("click", function(){
//     elModal.classList.remove("open-modal")
// })