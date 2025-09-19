// searchbox
document.addEventListener("DOMContentLoaded", function () {
  function checkAllResourcesLoaded() {
    const resources = performance.getEntriesByType("resource");
    const requiredFiles = ["/css/customized.ui.min.css"];
    const loadedFiles = resources
      .filter((res) => requiredFiles.includes(res.name) && res.responseEnd > 0)
      .map((res) => res.name);

    return requiredFiles.every((file) => loadedFiles.includes(file));
  }

  function fetchEngine() {
    try {
      var xhrobj = new XMLHttpRequest();
      xhrobj.open("GET", "search-engine.bc");
      xhrobj.send();

      xhrobj.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          var container = document.getElementById("search-box");
          container.innerHTML = xhrobj.responseText;

          var scripts = container.getElementsByTagName("script");
          for (var i = 0; i < scripts.length; i++) {
            var scriptTag = document.createElement("script");
            if (scripts[i].src) {
              scriptTag.src = scripts[i].src;
              scriptTag.async = false;
            } else {
              scriptTag.text = scripts[i].textContent;
            }
            document.head
              .appendChild(scriptTag)
              .parentNode.removeChild(scriptTag);
          }
        }
      };
    } catch (error) {
      console.error("مشکلی رخ داده است لطفا صبور باشید.", error);
    }
  }
  fetchEngine();
  // function waitForFiles() {
  //   if (checkAllResourcesLoaded()) {
  //     fetchEngine();
  //   } else {
  //     setTimeout(waitForFiles, 500);
  //   }
  // }

  // waitForFiles();
});

// searchbox

// header

function openHamburgerMenu() {
  // document.querySelector('#navitems').classList.toggle('max-lg\:hidden');
  document.getElementById("navitems").classList.add("max-lg:translate-x-0");
  document
    .getElementById("navitems")
    .classList.remove("max-lg:translate-x-full");
}
function openDropDownFooter(element) {
  if (window.innerWidth < 1280) {
    element.classList.toggle("rotate-after");
    var parent = element.closest(".parent-footer-dropdown");
    console.log(parent.querySelector(".hidden-box"));
    parent.querySelector(".hidden-box").classList.toggle("max-xl:hidden");
  }
}

function toggleModal() {
  document.getElementById("modal").classList.toggle("hidden");
}

function CloseHamburgerMenu() {
  document.getElementById("navitems").classList.remove("max-lg:translate-x-0");
  document.getElementById("navitems").classList.add("max-lg:translate-x-full");
}

function OpenHamburgerMenu() {
  document.getElementById("header-items").classList.add("max-lg:translate-x-0");
  document
    .getElementById("header-items")
    .classList.remove("max-lg:translate-x-full");
}

document.addEventListener("DOMContentLoaded", function (event) {
  if (innerWidth < 1024) {
    document
      .querySelectorAll(".image-category-magamenu , .sub-item-megamenu")
      .forEach((element) => {
        element.remove();
      });
  } else {
    document.querySelectorAll(".sub-item-hamburgermenu").forEach((element) => {
      element.remove();
    });
  }
});
document.querySelectorAll(".has-megamenu").forEach((element) => {
  element.addEventListener("click", function () {
    element
      .closest("li")
      .querySelector(".megamenu-container")
      .classList.toggle("hidden");
    console.log("test");
  });
});
document.querySelectorAll(".has-submenu").forEach((element) => {
  element.addEventListener("click", function () {
    element
      .closest("li")
      .querySelector(".sub-item-hamburgermenu")
      .classList.toggle("hidden");
    console.log("test2");
  });
});

if (document.querySelector(".transparent-header")) {
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar-desktop");
    if (window.scrollY > 10) {
      navbar.classList.remove("bg-transparent");
      navbar.classList.add(
        "bg-gradient-to-b",
        "from-[#081230]",
        "to-[#020a21]/85"
      );
    } else {
      navbar.classList.add("bg-transparent");
      navbar.classList.remove(
        "bg-gradient-to-b",
        "from-[#081230]",
        "to-[#020a21]/85"
      );
    }
  });
}
// header

if (document.querySelector(".swiper-airline")) {
  var swiperbanner = new Swiper(".swiper-airline", {
    slidesPerView: "6",

    centeredSlides: false,
    loop: true,
    autoplay: true,

    // navigation: {
    //   nextEl: ".swiper-next-banner",
    //   prevEl: ".swiper-prev-banner",
    // },
  });
}
if (document.querySelector(".destination-swiper")) {
  var swiperbanner = new Swiper(".destination-swiper", {
    slidesPerView: "4", // تعیین slidesPerView به 'auto'
    centeredSlides: false, // مرکزیت اسلایدها
    loop: true, // اسلایدها به صورت حلقه می‌چرخند
    autoplay: {
      delay: 2500, // تنظیم تایم برای خودکار پخش کردن
    },
    pagination: {
      el: ".swiper-pagination", // افزودن صفحه‌گذاری
      clickable: true, // قابل کلیک بودن صفحه‌گذاری
    },
  });
}
if (document.querySelector(".visa-swiper")) {
  var swiperbanner = new Swiper(".visa-swiper", {
    slidesPerView: "5", // تعیین slidesPerView به 'auto'
    centeredSlides: false, // مرکزیت اسلایدها
    loop: true, // اسلایدها به صورت حلقه می‌چرخند
    autoplay: {
      delay: 2500, // تنظیم تایم برای خودکار پخش کردن
    },
    pagination: {
      el: ".swiper-pagination", // افزودن صفحه‌گذاری
      clickable: true, // قابل کلیک بودن صفحه‌گذاری
    },
  });
}
