var mySwiper = new Swiper(".swiper-container", {
    //初始化Swiper
    autoplay: {
      //自动切换
      interval: 8000,
      delay: 8000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    noSwiping: true,
    effect: "coverflow",
    loop: true, //循环
    pagination: {
      //分页器
      el: ".swiper-pagination",
      clickable: true,
      paginationClickable: true,
      // type:  custom,
    },
    autoplayDisableOnInteraction: false,
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    // 这个为true时，↓才有用
    lazyLoadingInPrevNextAmount: 4,
  });