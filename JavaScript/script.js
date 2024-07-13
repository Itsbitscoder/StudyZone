// change navbar scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

// show/Hide faq answer
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //chang icon
    const icon = faq.querySelector(".faq_icon i");
    if (icon.className === "ri-add-line") {
      icon.className = "ri-subtract-fill";
    } else {
      icon.className = "ri-add-line";
    }
  });
});

// show/hide nav menu

const menu = document.querySelector(".nav_menu");
const opneBtn = document.querySelector(".Open_Menu");
const closeBtn = document.querySelector(".Close_Menu");

opneBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  opneBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  opneBtn.style.display = "inline-block";
});
