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

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
};

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y : 20,
    repeat : -1, 
    yoyo : true,
    ease : power1.easeInOut,
    delay : random(0, delay)
  });
};
floatingObject(".floating1", 1, 15)
floatingObject(".floating2", .5, 15);;
floatingObject(".floating3", 1.5, 15);

const spyEls = document.querySelectorAll("section .scroll-spy")
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      // 보여짐 여부를 감시할 요소를 지정
      triggerElement : spyEl,
      triggerHook : .8
    })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});