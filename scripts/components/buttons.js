"use strict";

// Open mobile menu btn
const open_menu_btns = document.querySelectorAll(".open_menu_btn");
const close_menu_btns = document.querySelectorAll(".close_menu_btn");
const hidden_menu = document.querySelectorAll(".main-nav");

open_menu_btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    hidden_menu.forEach(function (menu) {
      menu.classList.add("active");
    });
  });
});

close_menu_btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    hidden_menu.forEach(function (menu) {
      menu.classList.remove("active");
    });
  });
});
