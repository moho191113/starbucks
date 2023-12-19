const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener("click", function() {
  searchInputEl.focus();
})

searchInputEl.addEventListener("focus", function() {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "통합검색");
})

searchInputEl.addEventListener("blur", function() {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
})

const badgeEl = document.querySelector("header" .badges);

window.addEventListener("scroll", _.throttle(function () {
  console.log("scroll");
  if (window.scrollY > 500) {
    // gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity : 0,
      dispaly : "none"
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity : 1,
      dispaly : "block"
    });
  }
}, 300));


const fadeEls = document.querySelectorAll(".visual .fade-in")
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay : (index + 1) * .7,
    opacity : 1,
  })
});


// new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {
  direction : "vertical",
  autoplay : true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  // direction : "horizontal",
  slidesPerView : 3,
  spaceBetween : 10,
  centeredSlides : true,
  // autoplay : true,
  loop: true,
  autoplay: {
    delay:5000
  },
  pagination : {
    el: ".promotion .swiper-pagination",
    clickable: true
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  }
});

const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion")
let isHidePromotion = false;
promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion= !isHidePromotion
  if (isHidePromotion) {
    // 숨김처리!
    promotionEl.classList.add("hide");
  } else {
    // 보임 처리
    promotionEl.classList.remove("hide");
  }
});

function floatingObject(selector) {
  gsap.to(selector, 1, {
    y : 20,
    repeat : -1, 
    yoyo : true,
    ease : power1.easeInOut,
    delay : 3
  });
}

floatingObject(".floating")