const scrollTop = document.getElementById("scroll-top-button");
const scrollThreshold = 300; // Khoảng cách cuộn trang trước khi hiển thị nút

window.addEventListener("scroll", function () {
  if (window.scrollY > scrollThreshold) {
    scrollTop.style.display = "block";
  } else {
    scrollTop.style.display = "none";
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function toggleMenu() {
  const menu = document.getElementById("links");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
}
