const swiper = new Swiper('.swiper', {
  // Optional parameters
  autoplay: {     //자동슬라이드 (false-비활성화)
    delay: 2500, // 시간 설정
    disableOnInteraction: true, // false-스와이프 후 자동 재생
  },
  pagination: {
    el: ".swiper-pagination",
  },
  loopAdditionalSlides : 1,
  watchOverflow : true,
  speed : 2500
});