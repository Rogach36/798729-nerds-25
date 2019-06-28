var link = document.querySelector(".button-connect");
var popup = document.querySelector(".popup");
var close = document.querySelector(".modal-close");
var form = popup.querySelector(".popup-form");
var username = popup.querySelector(".name");
var usermail = popup.querySelector(".mail");
var message = popup.querySelector(".letter");


link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  username.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("modal-error");
});


form.addEventListener("submit", function(evt) {
  if (!username.value || !usermail.value || !message.value)
    evt.preventDefault();
  popup.classList.add("modal-error");
  popup.offsetWidth = popup.offsetWidth;
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
      popup.classList.remove("modal-error");
    }
  }
});