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

document.addEventListener("DOMContentLoaded", function (event) {
  if (innerWidth < 1024) {
    document
      .querySelectorAll(".image-category-magamenu , .sub-item-megamenu")
      .forEach((element) => {
        element.remove();
      });
  } else {
    // document.querySelectorAll(".sub-item-hamburgermenu").forEach(element => {
    //     element.remove();
    // })

    // id desktop view
    document.querySelectorAll(".megamenu-container").forEach((ele) => {
      console.log("megaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa menu");
      console.log(ele);
      const elem = ele.querySelector(".magamenu-category");
      const catid = ele
        .querySelector(".magamenu-category")
        .getAttribute("data-catid");
      const typecat = ele
        .querySelector(".magamenu-category")
        .getAttribute("data-typecat");
      LoadCatHeader(catid, typecat, elem);
    });
  }
});
async function LoadCatHeader(catid, typecat, element) {
  let catname = element.querySelector(".has-submenu > span").innerText;
  try {
    const params = { catid: catid, typecat: typecat, catname: catname };
    const queryString = new URLSearchParams(params).toString();
    const fullUrl = `${"/load-items.bc"}?${queryString}`;
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error(
        "متاسفانه مشکلی به وجود آمده است لطفا بعدا مجددا تلاش فرمایید."
      );
    }

    const content = await response.text();

    if (window.innerWidth >= 1024) {
      element
        .closest(".megamenu-container")
        .querySelector(".load-category-items").innerHTML = content;
    } else if (window.innerWidth < 1024) {
      const subItem = element.querySelector(".sub-item-hamburgermenu");
      const isHidden = subItem.classList.contains("hidden");
      document.querySelectorAll(".sub-item-hamburgermenu").forEach((ele) => {
        ele.classList.add("hidden");
      });
      if (isHidden) {
        subItem.classList.remove("hidden");
        subItem.innerHTML = content;
      } else {
        subItem.classList.add("hidden");
      }
    }

    var scripts = container.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      var scriptTag = document.createElement("script");
      if (scripts[i].src) {
        scriptTag.src = scripts[i].src;
        scriptTag.async = false;
      } else {
        scriptTag.text = scripts[i].textContent;
      }
      document.head.appendChild(scriptTag).parentNode.removeChild(scriptTag);
    }
  } catch (error) {}
}
function OpenSubMenu() {
  this.querySelector("ul").classList.toggle("hidden");
}
document.addEventListener("DOMContentLoaded", function () {
  let submenuparents = document.querySelectorAll(".has-sub-menu");
  if (window.innerWidth < 1024) {
    submenuparents.forEach((e) => {
      e.addEventListener("click", OpenSubMenu, false);
    });
  }
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

// category load
// Function to handle the category loading logic
function initCategoryLoader(containerSelector) {
  const containers = document.querySelectorAll(containerSelector);

  containers.forEach((container) => {
    const items = container.querySelectorAll(".category-item-load");
    const contentBox = container.querySelector(".load-content-box");

    if (!items.length || !contentBox) return;

    // Function to load content
    function loadContent(id, type) {
      // Show loader if exists
      const loader = contentBox.querySelector(".loader");
      if (loader) loader.style.display = "block";

      // Fetch data
      fetch(`load-items.bc?catid=${id}&typecat=${type}`)
        .then((response) => response.text())
        .then((html) => {
          contentBox.innerHTML = html;

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

          setSwiperSlides(type);
        })
        .catch((error) => {
          console.error("Error loading content:", error);
          contentBox.innerHTML = "<p>Error loading content.</p>";
        });
    }

    // Add click event to each item
    items.forEach((item) => {
      item.addEventListener("click", function () {
        // Remove active from all siblings
        items.forEach((sib) => sib.classList.remove("active"));
        // Add active to this one
        this.classList.add("active");
        // Get id and type
        const id = this.dataset.id;
        const type = this.dataset.type;
        // Load content
        loadContent(id, type);
      });
    });

    // Initial load with first item
    if (items.length > 0) {
      const firstItem = items[0];
      firstItem.classList.add("active");
      const firstId = firstItem.dataset.id;
      const firstType = firstItem.dataset.type;
      loadContent(firstId, firstType);
    }
  });
}
function loadCategories() {
  const elements = document.querySelectorAll(".magamenu-category");
  elements.forEach((element) => {
    const catid = element.getAttribute("data-catid");
    const typecat = element.getAttribute("data-typecat");

    element.addEventListener("click", function () {
      LoadCatHeader(catid, typecat, this);
    });
  });
}
document.addEventListener("DOMContentLoaded", function () {
  // Initialize for all containers with the class
  initCategoryLoader(".load-content-box-container");
  loadCategories(); // این را اضافه کنید تا کلیک‌ها وصل شوند
});
// category load

// faq
const SINGLE_OPEN = true;
// Initialize FAQ items
function initializeFAQItems(faqContainer) {
  if (!faqContainer) return;

  const items = faqContainer.querySelectorAll("li");
  items.forEach((li) => {
    const header = li.querySelector("h2");
    const content = header ? header.nextElementSibling : null;

    if (!header || !content) return;

    // Set accessibility attributes
    setupAccessibility(header, content);

    // Remove existing keydown event listener to prevent duplicates
    header.removeEventListener("keydown", handleKeydown);

    // Add event listeners
    header.addEventListener("click", () => toggleItem(li, faqContainer));
    header.addEventListener("keydown", handleKeydown);
  });
}
// Setup accessibility attributes
function setupAccessibility(header, content) {
  header.setAttribute("role", "button");
  header.setAttribute("tabindex", "0");
  header.setAttribute("aria-expanded", !content.classList.contains("hidden"));
  content.setAttribute("aria-hidden", content.classList.contains("hidden"));
}
// Handle keydown events (Enter/Space)
function handleKeydown(e) {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    const li = e.target.closest("li");
    const faqContainer = li.closest(".load-answer");
    toggleItem(li, faqContainer);
  }
}
// Toggle FAQ item
function toggleItem(targetLi, faqContainer) {
  const header = targetLi.querySelector("h2");
  const content = header ? header.nextElementSibling : null;
  if (!header || !content) return;

  const willOpen = content.classList.contains("hidden");

  if (SINGLE_OPEN && willOpen) {
    closeAllItems(faqContainer, targetLi);
  }

  content.classList.toggle("hidden");
  targetLi.classList.toggle("is-open", willOpen);
  header.setAttribute("aria-expanded", String(willOpen));
  content.setAttribute("aria-hidden", String(!willOpen));
}
// Close all FAQ items except the target
function closeAllItems(faqContainer, targetLi) {
  faqContainer.querySelectorAll("li").forEach((li) => {
    if (li === targetLi) return;
    const h = li.querySelector("h2");
    const c = h ? h.nextElementSibling : null;
    if (c && !c.classList.contains("hidden")) {
      c.classList.add("hidden");
      li.classList.remove("is-open");
      h.setAttribute("aria-expanded", "false");
      c.setAttribute("aria-hidden", "true");
    }
  });
}
// Observe DOM changes
function observeDOM() {
  const targetNode = document.querySelector(".load-answer");
  if (!targetNode) return;

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        initializeFAQItems(targetNode);
      }
    });
  });

  observer.observe(targetNode, {
    childList: true,
    subtree: true,
  });
}
// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  const faqContainer = document.querySelector(".load-answer");
  initializeFAQItems(faqContainer);
  observeDOM();
});
// faq

// swiper
if (document.querySelector(".swiper-airline")) {
  var swiper = new Swiper(".swiper-airline", {
    slidesPerView: "6",

    centeredSlides: false,
    loop: true,
    autoplay: true,
  });
}

function setSwiperSlides(type) {
  if (swiper && typeof swiper.destroy === "function") {
    swiper.destroy(true, true);
  }

  console.log(type);

  if (type === "specialtour") {
    if (document.querySelector(".specialtour-swiper")) {
      var swiper = new Swiper(".specialtour-swiper", {
        slidesPerView: "4",
        centeredSlides: false,
        loop: true,
        autoplay: {
          delay: 2500,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }
  if (type === "offeredtour") {
    if (document.querySelector(".offeredtour-swiper")) {
      var swiper = new Swiper(".offeredtour-swiper", {
        slidesPerView: "4",
        centeredSlides: false,
        loop: true,
        autoplay: {
          delay: 2500,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    }
  }
  if (type === "visareq") {
    if (document.querySelector(".visa-swiper")) {
      var swiper = new Swiper(".visa-swiper", {
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
  }
}

// swiper

// js form support

// support form
function uploadDocument(args) {
  const captcha = document
    .getElementById("supportform")
    .querySelector("#captchaContainer input[name='captcha']").value;
  const captchaid = document
    .getElementById("supportform")
    .querySelector("#captchaContainer input[name='captchaid']").value;
  const stringJson = JSON.stringify(args.source?.rows[0]);
  $bc.setSource("cms.upload", {
    value: stringJson,
    captcha: captcha,
    captchaid: captchaid,
    run: true,
  });
}
function refreshCaptcha(e) {
  $bc.setSource("captcha.refresh", true);
}
function captchaRendered() {
  document.querySelector(".contactUsInput").placeholder = "کد امنیتی";
}
async function OnProcessedEditObject(args) {
  var response = args.response;
  var json = await response.json();
  var errorid = json.errorid;
  if (errorid == "6") {
    document
      .getElementById("supportform")
      .querySelector(".message-api").innerHTML = "درخواست شما با موفقیت ثبت شد";

    document
      .getElementById("supportform")
      .querySelector(".f-l-name")
      .querySelector("input").value = "";
    document
      .getElementById("supportform")
      .querySelector(".phone-num")
      .querySelector("input").value = "";

    refreshCaptcha();
  } else {
    refreshCaptcha();
    document
      .getElementById("supportform")
      .querySelector(".f-l-name")
      .querySelector("input").value = "";
    document
      .getElementById("supportform")
      .querySelector(".phone-num")
      .querySelector("input").value = "";

    setTimeout(() => {
      document
        .getElementById("supportform")
        .querySelector(".message-api").innerHTML =
        "خطایی رخ داده, لطفا مجدد اقدام کنید";
    }, 2000);
  }
}
async function RenderForm() {
  document
    .getElementById("supportform")
    .querySelector(".f-l-name")
    .querySelector("input").placeholder = "نام و نام خانوادگی";
  document
    .getElementById("supportform")
    .querySelector(".phone-num")
    .querySelector("input").placeholder = "شماره تماس";
}

// Counselingform
function uploadDocumentCounselingform(args) {
  const captcha = document
    .getElementById("Counselingform")
    .querySelector("#captchaContainer input[name='captcha']").value;
  const captchaid = document
    .getElementById("Counselingform")
    .querySelector("#captchaContainer input[name='captchaid']").value;
  const stringJson = JSON.stringify(args.source?.rows[0]);
  $bc.setSource("cms.uploadCounselingform", {
    value: stringJson,
    captcha: captcha,
    captchaid: captchaid,
    run: true,
  });
}
function refreshCaptchaCounselingform(e) {
  $bc.setSource("captchaCounselingform.refresh", true);
}
function captchaRenderedCounselingform() {
  document.querySelector(".contactUsInput").placeholder = "کد امنیتی";
}
async function OnProcessedEditObjectCounselingform(args) {
  var response = args.response;
  var json = await response.json();
  var errorid = json.errorid;
  if (errorid == "6") {
    document
      .getElementById("Counselingform")
      .querySelector(".message-api").innerHTML = "درخواست شما با موفقیت ثبت شد";

    document
      .getElementById("Counselingform")
      .querySelector(".f-l-name")
      .querySelector("input").value = "";
    document
      .getElementById("Counselingform")
      .querySelector(".phone-num")
      .querySelector("input").value = "";

    refreshCaptchaCounselingform();
  } else {
    refreshCaptchaCounselingform();
    document
      .getElementById("Counselingform")
      .querySelector(".f-l-name")
      .querySelector("input").value = "";
    document
      .getElementById("Counselingform")
      .querySelector(".phone-num")
      .querySelector("input").value = "";

    setTimeout(() => {
      document
        .getElementById("Counselingform")
        .querySelector(".message-api").innerHTML =
        "خطایی رخ داده, لطفا مجدد اقدام کنید";
    }, 2000);
  }
}
async function RenderFormCounselingform() {
  document
    .getElementById("Counselingform")
    .querySelector(".f-l-name")
    .querySelector("input").placeholder = "نام و نام خانوادگی";
  document
    .getElementById("Counselingform")
    .querySelector(".phone-num")
    .querySelector("input").placeholder = "شماره تماس";
}
// js form support


// article search
var input = document.getElementById('input');
var isItemSelected = false; // برای بررسی اینکه آیا چیزی انتخاب شده است یا خیر

if (input) {
    input.onkeyup = function () {
        if (this.value.length !== 0) {
            document.querySelector('ul.searchlistcategory').classList.remove('hidden'); // لیست را نمایش دهید
            var filter = input.value.toUpperCase();
            var lis = document.querySelectorAll('li');
            isItemSelected = false; // ریست کردن وقتی که کاربر چیزی در ورودی می‌نویسد

            for (var i = 0; i < lis.length; i++) {
                var name = lis[i].innerHTML;
                if (name.toUpperCase().indexOf(filter) == 0) {
                    lis[i].style.display = 'list-item';
                } else {
                    lis[i].style.display = 'none';
                }
            }
        } else {
            var lis = document.querySelectorAll('li');
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.display = 'list-item';
            }
            document.querySelector('ul.searchlistcategory').classList.remove('hidden');
        }
    };

    document.getElementById('search-content-article').addEventListener('submit', function (e) {
        if (!isItemSelected) {
            e.preventDefault();
            document.getElementById('catidsearched').value = 0; // اگر هیچ چیزی انتخاب نشده باشد catid را 0 قرار دهید
            var lis = document.querySelectorAll('li');
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.display = 'list-item';
            }
            document.querySelector('ul.searchlistcategory').classList.remove('hidden');
        }
    });
}

function contentSearched(datatitle, datacatid) {
    input.value = datatitle;
    document.getElementById('catidsearched').value = datacatid;
    document.querySelector('ul.searchlistcategory').classList.add('hidden');
    isItemSelected = true; // وقتی آیتمی انتخاب می‌شود، این متغیر true شود
}

// article search