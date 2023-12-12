// JavaScript Document
console.log("hi");





/******************/
/* HAMBURGER MENU */
/******************/

var Menu = document.querySelector("header button");

Menu.onclick = openMenu;

function openMenu() {
  var nav = document.querySelector("header nav");
  nav.classList.add("toonMenu");
}

var Sluit = document.querySelector("nav button");

Sluit.onclick = sluitMenu;

function sluitMenu() {
  var menu = document.querySelector("nav");
  menu.classList.remove("toonMenu");
}
