const sidebarSwitchButton = document.querySelector(".sidebar__switch-button");
const navLinksUpper = document.querySelectorAll(".nav__link-upper");
const navLinksLower = document.querySelectorAll(".nav__link-lower");
const navLinks = document.querySelectorAll(".nav__link");
const profile = document.querySelector(".sidebar__profile-info");
const decors = document.querySelector(".sidebar__decor-items");
const logo = document.querySelector(".sidebar__logo");
const sidebar = document.querySelector(".sidebar");

///////////////////////links-state/////////////////////////////////

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => {
      l.classList.remove("nav__link--active");
    });
    link.classList.add("nav__link--active");
  });
});

///////////////////////sidebar-switch/////////////////////////////

sidebarSwitchButton.addEventListener("click", (e) => {
  sidebarSwitchButton.classList.toggle("sidebar__switch-button--active");
  if (sidebar.classList.contains("header__sidebar--close")) {
    sidebar.classList.remove("header__sidebar--close");
    sidebar.classList.add("header__sidebar--open");
  } else {
    sidebar.classList.remove("header__sidebar--open");
    sidebar.classList.add("header__sidebar--close");
  }
});

////////////////////////start-animate////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    decors.classList.add("sidebar__decor-start");
  }, 500);
  setTimeout(() => {
    logo.classList.add("sidebar__animate-start");
  }, 800);
  navLinksUpper.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add("sidebar__animate-start");
    }, index * 200 + 1000);
  });
  navLinksLower.forEach((link, index) => {
    setTimeout(() => {
      link.classList.add("sidebar__animate-start");
    }, index * -200 + 2200);
  });
  setTimeout(() => {
    profile.classList.add("sidebar__animate-start");
  }, 1500);
  setTimeout(() => {
    sidebarSwitchButton.classList.add("sidebar__switch-button-start");
  }, 2500);
});
