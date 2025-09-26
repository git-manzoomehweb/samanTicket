// hamburger menu
document.addEventListener("DOMContentLoaded", function () {
  const headerMenu = document.querySelector(".header-menu");
  const headerMenuClose = document.querySelector(".header-menu-close");
  const bars3 = document.querySelector(".bars3");
  if (!headerMenu || !headerMenuClose || !bars3) return;

  const isDesktop = () => window.matchMedia("(min-width: 1024px)").matches;

  const openMenu = () => {
    if (isDesktop()) {
      headerMenu.style.visibility = "visible";
      headerMenu.style.opacity = "1";
      headerMenu.style.transform = ""; // desktop: بدون ترنسفورم
    } else {
      headerMenu.style.transform = "translateX(0)";
      headerMenu.style.visibility = "visible";
      headerMenu.style.opacity = "1";
    }
    document.body.classList.add("overflow-hidden");
  };

  const closeMenu = () => {
    if (isDesktop()) {
      headerMenu.style.visibility = "hidden";
      headerMenu.style.opacity = "0";
    } else {
      headerMenu.style.transform = "translateX(100%)"; // به‌جای 1024px
    }
    document.body.classList.remove("overflow-hidden");
  };

  // فقط روی آیکن منو باز کن؛ مشکل قبلی که روی هر کلیکی overflow می‌خورد از این بود که listener روی document بود
  bars3.addEventListener("click", openMenu);
  headerMenuClose.addEventListener("click", closeMenu);

  // ESC برای بستن
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // اگر سایز شد دسکتاپ، منو رو به حالت بسته/شفاف برگردون و overflow رو بردار
  window.addEventListener("resize", () => {
    if (isDesktop()) {
      headerMenu.style.transform = "";
      headerMenu.style.visibility = "hidden";
      headerMenu.style.opacity = "0";
      document.body.classList.remove("overflow-hidden");
    } else {
      // در موبایل حالت اولیه: خارج از صفحه
      headerMenu.style.transform = "translateX(100%)";
      headerMenu.style.visibility = "visible"; // برای انیمیشن ورود لازم می‌شه
      headerMenu.style.opacity = "1";
    }
  });

  // Dropdown ها
  const toggles = document.querySelectorAll(".toggle-dropdown");
  toggles.forEach((toggle) => {
    const submenu = toggle.nextElementSibling;
    const icon = toggle.querySelector(".dropdown-icon");
    if (!submenu) return;

    // حالت اولیه بسته
    submenu.style.maxHeight = null;
    submenu.style.opacity = "0";
    submenu.style.overflow = "hidden";
    submenu.style.transition = "max-height 200ms ease, opacity 200ms ease";

    toggle.addEventListener("click", function (e) {
      e.stopPropagation(); // حتماً از حباب جلوگیری کن که روی والدها چیزی اجرا نشه
      const isOpen = submenu.style.maxHeight;
      if (isOpen) {
        submenu.style.maxHeight = null;
        submenu.style.opacity = "0";
      } else {
        submenu.style.maxHeight = submenu.scrollHeight + "px";
        submenu.style.opacity = "1";
      }
      if (icon) icon.classList.toggle("rotate-180");
    });
  });
});
// hamburger menu