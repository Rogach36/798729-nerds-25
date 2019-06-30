var link = document.querySelector(".button-connect");
var popup = document.querySelector(".popup");
var close = document.querySelector(".modal-close");
var form = popup.querySelector(".popup-form");
var username = popup.querySelector(".field-name");
var usermail = popup.querySelector(".field-mail");
var message = popup.querySelector(".field-message");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("popup-show");
  if (storage) {
    username.value = storage;
    usermail.focus();
  } else {
    username.focus();
  }
  });

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("popup-show");
  popup.classList.remove("modal-error");
});


form.addEventListener("submit", function(evt) {
  if (!username.value || !usermail.value || !message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
} else {
  if (isStorageSupport) {
    localStorage.setItem("username", "username.value");
  }
  }
});

form.addEventListener("submit", function(evt) {
 if (!username.value) {
 evt.preventDefault();
 username.classList.add("invalid");
 } else {
   username.classList.remove("invalid");
 }
 });

 form.addEventListener("submit", function(evt) {
  if (!usermail.value) {
  evt.preventDefault();
  usermail.classList.add("invalid");
  } else {
    usermail.classList.remove("invalid");
  }
  });

  form.addEventListener("submit", function(evt) {
   if (!message.value) {
   evt.preventDefault();
   message.classList.add("invalid");
   } else {
     message.classList.remove("invalid");
   }
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

//  form.addEventListener("submit", function(evt) {
// if (!username.value || !usermail.value || !message.value) {
//  evt.preventDefault();
//  username.classList.add("invalid");
// usermail.classList.add("invalid");
// message.classList.add("invalid");
// } else {
//   popup.classList.remove("modal-error");
//   username.classList.remove("invalid");
//  usermail.classList.remove("invalid");
//  message.classList.remove("invalid");
// }
// });
//
//

//
// form.addEventListener("submit", function(evt) {
// if (!username.value || !usermail.value || !message.value) {
// evt.preventDefault();
// username.classList.add("invalid");
// usermail.classList.add("invalid");
// message.classList.add("invalid");
// } else {
//  popup.classList.remove("modal-error");
//  username.classList.remove("invalid");
// usermail.classList.remove("invalid");
// message.classList.remove("invalid");
// }
// });
