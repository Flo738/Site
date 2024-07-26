
const bars = document.getElementById('bars');
const menu = document.getElementById('menu');
const menuItem = document.querySelectorAll('#menu a');
const close = document.getElementById('close');


bars.addEventListener('click', () => {
  menu.classList.toggle('show');
});

menuItem.forEach(Item => {
  Item.addEventListener('click', () => {
    menu.classList.remove('show');
  })
  close.addEventListener('click',() => {
    menu.classList.remove('show');
  })
})




//carousel 
let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop:true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2.5,
      slideShadows: true,
    },
    autoplay: {
      delay:3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      1000: {
          slidesPerView: 3,
          spaceBetween: 10,
      },
      
       },
  });