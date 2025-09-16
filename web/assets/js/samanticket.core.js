
// header
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar-desktop");
  if (window.scrollY > 10) {
    navbar.classList.remove("bg-transparent");
    navbar.classList.add("bg-gradient-to-b","from-[#081230]","to-[#020a21]/85");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-gradient-to-b","from-[#081230]","to-[#020a21]/85");
  }
});
// header

if (document.querySelector(".swiper-airline")) {
  var swiperbanner = new Swiper(".swiper-airline", {
    slidesPerView: '6',

    centeredSlides: false,
    loop: true ,
    autoplay: true,

    // navigation: {
    //   nextEl: ".swiper-next-banner",
    //   prevEl: ".swiper-prev-banner",
    // },
  });
}
if (document.querySelector(".destination-swiper")) {
  var swiperbanner = new Swiper(".destination-swiper", {
    slidesPerView: "4",   // تعیین slidesPerView به 'auto'
    centeredSlides: false,     // مرکزیت اسلایدها
    loop: true,               // اسلایدها به صورت حلقه می‌چرخند
    autoplay: {
      delay: 2500,            // تنظیم تایم برای خودکار پخش کردن
    },
    pagination: {
      el: ".swiper-pagination",  // افزودن صفحه‌گذاری
      clickable: true,           // قابل کلیک بودن صفحه‌گذاری
    },
  });
}
if (document.querySelector(".visa-swiper")) {
  var swiperbanner = new Swiper(".visa-swiper", {
    slidesPerView: "5",   // تعیین slidesPerView به 'auto'
    centeredSlides: false,     // مرکزیت اسلایدها
    loop: true,               // اسلایدها به صورت حلقه می‌چرخند
    autoplay: {
      delay: 2500,            // تنظیم تایم برای خودکار پخش کردن
    },
    pagination: {
      el: ".swiper-pagination",  // افزودن صفحه‌گذاری
      clickable: true,           // قابل کلیک بودن صفحه‌گذاری
    },
  });
}