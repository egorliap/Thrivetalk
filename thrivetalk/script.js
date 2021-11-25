const menuBtn = document.querySelector(".dropbtn");
const shiftMain = document.querySelector(".idea-content");
const smoothItems = document.querySelectorAll(".item");
let menuOpen = false;
function smoothAp() {
  smoothItems.forEach((item) => {
    item.classList.add("appeared");
  });
}
function smoothDisap() {
  smoothItems.forEach((item) => {
    item.classList.remove("appeared");
  });
}


function myFunction() {
  if (menuOpen == false) {
    document.getElementById("myDropdown").classList.toggle("show");
    menuBtn.classList.add("open");
    shiftMain.classList.add("move");
    menuOpen = true;

    setTimeout(smoothAp, 1);
  } else {
    document.getElementById("myDropdown").classList.toggle("show");
    menuBtn.classList.remove("open");
    shiftMain.classList.remove("move");
    menuOpen = false;
    setTimeout(smoothDisap, 1);
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (
    !event.target.matches(".dropbtn-burger") &&
    !event.target.matches(".dropbtn")
  ) {
    var dropdowns = document.getElementsByClassName("dropdown-nav");
    var i;

    menuBtn.classList.remove("open");
    shiftMain.classList.remove("move");
    menuOpen = false;
    setTimeout(smoothDisap, 1);
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

$(function(){
  $('.help-block-item').height($('.help-block-item').width());

  $(window).resize(function(){
    $('.help-block-item').height($('.help-block-item').width());
  });
});
$(function(){
  $('.help-block-item-2').height($('.help-block-item-2').width());

  $(window).resize(function(){
    $('.help-block-item-2').height($('.help-block-item-2').width());
  });
});