var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

const menu = document.querySelector(".navbar-panel")
const menuBtn = document.querySelector(".menu-button");
menuBtn.addEventListener("click", ()=>{
  alert("Вы кликнули по кнопке меню")
  menu.classList.toggle('is-open');
})