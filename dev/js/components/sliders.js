
// Главный баннер
if ($('.c-main-banner__slider').length) {
  const mainBannerSlider = new Swiper(".c-main-banner__slider", {
    autoplay: true,
    speed: 500,
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".c-main-banner__slider .swiper-button-next",
      prevEl: ".c-main-banner__slider .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    }
  });
}
// Главный баннер
if ($('.c-products-banner__slider').length) {
  const productsBannerSlider = new Swiper(".c-products-banner__slider", {
    autoplay: true,
    speed: 500,
    loop: true,
    navigation: {
      nextEl: ".c-products-banner__slider, .swiper-button-next",
      prevEl: ".c-products-banner__slider, .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    }
  });
}
if ($('.c-products-banner__slider').length) {
  const productsBannerSlider = new Swiper(".c-products-banner__slider", {
    autoplay: true,
    speed: 500,
    loop: true,
    navigation: {
      nextEl: ".c-products-banner__slider, .swiper-button-next",
      prevEl: ".c-products-banner__slider, .swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    }
  });
}


//Список товаров
if ($('.c-main-list-content').length) {

  let swiperMainListContentInstances = [];
  let swiperMainListContentPaginationInstances = [];
  let screenWidth = null
  let fired = false
  $(window).on('resize load', function () {
    
    if (($(window).innerWidth() > 1279) && !fired) {
      fired = true
      // Список товаров инициализация
      $(".c-main-list-content__slider.classic").each(function (index, element) {
        const $this = $(this);
        $this.addClass("instance-" + index);
        $this.find(".swiper-button-prev").addClass("prev-" + index);
        $this.find(".swiper-button-next").addClass("next-" + index);
        swiperMainListContentInstances[index] = new Swiper(".instance-" + index, {
          slidesPerView: 4,
          spaceBetween: 0,
          observer: true,
          observeParents: true,
          navigation: {
            nextEl: ".swiper-button-next.next-" + index,
            prevEl: ".swiper-button-prev.prev-" + index,
          },
        });
      });
      // Список товаров + пагинация инициализация
      $(".c-main-list-content__slider.has-left-nav").each(function (index, element) {
        const $this = $(this);
        $this.addClass("instance-" + index + 'hln');
        $this.parent('.col-xl-16').parent('.row').parent('.container').parent('.c-main-list-content.info-slider-btns').find(".swiper-button-prev").addClass("prev-" + index + 'hln');
        $this.parent('.col-xl-16').parent('.row').parent('.container').parent('.c-main-list-content.info-slider-btns').find(".swiper-button-next").addClass("next-" + index + 'hln');
        $this.parent('.col-xl-16').parent('.row').parent('.container').parent('.c-main-list-content.info-slider-btns').find(".swiper-pagination").addClass("pagi-" + index + 'hln');
        swiperMainListContentPaginationInstances[index] = new Swiper(".instance-" + index + 'hln', {
          slidesPerView: 4,
          spaceBetween: 10,
          observer: true,
          observeParents: true,
          navigation: {
            nextEl: ".swiper-button-next.next-" + index + 'hln',
            prevEl: ".swiper-button-prev.prev-" + index + 'hln',
          },
          pagination: {
            el: ".c-main-list-content__info-slider-btns .swiper-pagination.pagi-" + index + 'hln',
            type: "fraction",
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1600: {
              slidesPerView: 4,
            },
          },
        });
      });
    }
    else if(($(window).innerWidth() <= 1279) && fired) {
      fired = false
      // Список товаров дестрой
      $(swiperMainListContentInstances).each(function (index, element) {
        const $this = $(this);
        this.destroy();
        swiperMainListContentInstances = [];
        $this.find('.swiper-wrapper').removeAttr('style');
        $this.find('.swiper-slide').removeAttr('style');
      })
      // Список товаров + пагинация дестрой
      $(swiperMainListContentPaginationInstances).each(function (index, element) {
        const $this = $(this);
        this.destroy();
        swiperMainListContentPaginationInstances = [];
        $this.find('.swiper-wrapper').removeAttr('style');
        $this.find('.swiper-slide').removeAttr('style');
      })
    }
  });
}
//Product Slider

if ($('.c-product__slider').length) {
  var swiper = new Swiper(".productSliderThumb", {
    spaceBetween: 10,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".productSliderMain", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".c-product__next",
      prevEl: ".c-product__prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
}
if ($('.c-modal-basket__slider').length) {
  var swiper5 = new Swiper(".basketSliderThumb", {
    spaceBetween: 25,
    slidesPerView: 3,
   loop: false,
    freeMode: true,
          breakpoints: {
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          },
   
        navigation: {
      nextEl: ".c-modal-basket__next",
      prevEl: ".c-modal-basket__prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

}