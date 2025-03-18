'use strict';

const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");


sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });


const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");


const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }
}

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}


const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");


for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailPattern.test(email);
}


// function openForm() {
//   const fullName = document.getElementById("fullName").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;
//   if (!isValidEmail(email)) {
//     alert("Please enter a valid email address (e.g., example@example.com).");
//     return;
//   }
//   console.log(fullName, email, message);
//   const formURL =  `https://docs.google.com/forms/d/e/1FAIpQLSfvQcjwnO86WrxOX13KhgWEATOshF88nnf2fLa14TEGuAI6wg/viewform?entry.696400525=${encodeURIComponent(fullName)}&entry.718251860=${encodeURIComponent(email)}&entry.868635668=${encodeURIComponent(message)}`;
//   window.open(formURL, "_blank");
// }

 function openForm() {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (!isValidEmail(email)) {
   alert("Please enter a valid email address (e.g., example@example.com).");
    return;
 }

const formURL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfvQcjwnO86WrxOX13KhgWEATOshF88nnf2fLa14TEGuAI6wg/formResponse";

  const formData = new FormData();
  formData.append("entry.696400525", fullName); 
  formData.append("entry.718251860", email);     
  formData.append("entry.868635668", message);   
  fetch(formURL, {
    method: "POST",
    body: formData,
    mode: "no-cors" 
  })
    .then(() => alert("Thankyou for the message"))
    .catch((error) => alert("Submission failed!"));

  document.getElementById("fullName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
}




