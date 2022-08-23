/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
/* Validate if constant exists */
if (navToggle) {
  // detect click if click --> add className which will show the menu
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  // if click on x to hide menu it will remove the show menu class from navMenu
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  // when we click on each nav__link , we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
// add for every navLink an event listener, and if click is detected, it will call linkAction callback and remove show-menu
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
// get the big wrapper (front/ backend/ design )
const skillsContent = document.getElementsByClassName("skills__content"),
  skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  // optional if close everything except one or open everything

  // get ClassName of the event that triggered this function
  let itemClass = this.parentNode.className;
  //   once this function is triggered it will close every Skill block
  for (i = 0; i < skillsContent.length; i++) {
    // update class
    skillsContent[i].className = "skills__content skills__close";
  }
  // it will open the block that triggered this
  if (itemClass === "skills__content skills__close") {
    // change class of element that triggered the function
    this.parentNode.className = "skills__content skills__open";
  } else {
    this.parentNode.className = "skills__content skills__close";
  }
}

// skillHeader is a wrapper with icon, scill title, skill subtitle
skillsHeader.forEach((skillHeader) => {
  skillHeader.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS : Education, Work ====================*/
const tabs = document.querySelectorAll("[data-target"),
  tabContents = document.querySelectorAll("[data-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // The dataset JavaScript is a document-oriented module (DOM) property to access the data attribute and set it on the JavaScript element

    // dataset = data-[...] custom html property by target, we can access it [education/ work]
    const target = document.querySelector(tab.dataset.target);

    // remove all qualification__active from tab contents
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    // target either education or work else if remove = only qualification[data-content] = display: none;
    target.classList.add("qualification__active");

    // remove all qualification__active from tabs
    tabs.forEach((tab2) => {
      // display block
      tab2.classList.remove("qualification__active");
    });
    // add
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
// https://swiperjs.com/swiper-api

// access modalViews on index x (= key )
// <!-- # a wrapper of a service -->
const modalViews = document.querySelectorAll(".services__modal"),
  // view more span
  modalBtns = document.querySelectorAll(".services__button"),
  // modal close where cross in the modal/ each Service contains one
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

// modalBtns = a span with i tag, index
// i = key
modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    // key = index = number of the modelBtn
    modal(i);
  });
});

// if click on x at modal screen --> remove all active-modals form modalViews
modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
// <!-- Initialize Swiper -->
// swiper container
var swiperPortfolio = new Swiper(".portfolio__container", {
  // for the effects
  cssMode: true,
  // swiper will loop ?
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    // if you on pagination div
    clickable: true,
  },
  // mousewheel: true,
  // keyboard: true,
});

/*==================== TESTIMONIAL ====================*/
// <!-- Initialize Swiper -->
// swiper container
var swiperTestimonial = new Swiper(".testimonial__container", {
  // for the effects
  loop: true,
  // cssMode: true,
  // swiper will loop ?
  // loop: true,
  // so you can swipe by grapping
  grapCursor: true,
  // the space between the individual sliders
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    // if you on pagination div
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      // maximum > slidesPerView
      slidesPerView: 2,
    },
  },
  // mousewheel: true,
  // keyboard: true,
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
/**
 * Calculating how tall and wide a section like #about is
 * to determine when to highlight the nav link based
 * on the scrolling behaviour of the user
 */
// get all sections saved in array
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      // add active link
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  // get header
  // header includes navigaiton
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  // get scrollup button
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class

  // viewport height goes from top(0) to bottom(max viewport height)
  // basically when eh scrolls down
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");

// starter values
// body.dark-theme from css
const darkTheme = "dark-theme";

// icon name
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
// localStorage is a property that allows JavaScript sites and apps to
// save key-value pairs in a web browser with no expiration date. This means the data stored in the browser will persist even after the browser window is closed.

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the
// dark-theme class
// The contains() method is used to determines whether the collection
// contains a given item or not

// 2 functions with return value

// if document.body classList contains dark-theme, return dark or light
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

// if theme button classList contains uil-sun
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-sun" : "uil-moon";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  // save the value inside dark

  // if validation is validated -> we
  // add to body --> dark-theme or remove it
  document.body.classList[selectedTheme === "light" ? "remove" : "add"](
    darkTheme
  );
  // KEY IS THAT WE HAVE TWO CLASSES PARALLEL FOR THE themeButton.
  themeButton.classList[selectedIcon === "uil-moon" ? "remove" : "add"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  // The toggle() method of the DOMTokenList interface removes an existing token
  // from the list and returns false. If the token doesn't exist
  //  it's added and the function returns true.

  // remove if existent else add
  document.body.classList.toggle(darkTheme);

  // remove sun = moon
  // add sun = sun
  themeButton.classList.toggle(iconTheme);

  // We save the theme and the current icon that the user chose
  // save into local storage with key

  // current = when page is new loaded
  // from dark-theme -> light
  // from sun -> moon
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
