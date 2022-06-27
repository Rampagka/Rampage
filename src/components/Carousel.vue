<template>
  <div>
    <VueSlickCarousel class="carousel" v-bind="settings">
      <div class="slide"
        v-for="slide of slides"
        :key="slide"
      >
        <img :src="require('@/assets/' + slide)" alt="" class="slide__img">
      </div>
      <template #prevArrow="arrowOption">
        <div class="custom-arrow prev-arrow">
          {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
        </div>
      </template>
      <template #nextArrow="arrowOption">
        <div class="custom-arrow next-arrow">
          {{ arrowOption.currentSlide }}/{{ arrowOption.slideCount }}
        </div>
      </template>

      <template #customPaging="">
        <div class="custom-dot">
          {{ }}
        </div>
      </template>
    </VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'MyComponent',
    data(){
      return {
        slides: ['banner.webp', 'banner-1.webp', 'banner-2.webp', 'banner-3.webp'],
        settings: {
          accessibility: true,
          arrows: true,
          draggable: false,
          dots: true,
          speed: 500,
          autoplay: true,
          autoplaySpeed: 5000,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '300px',
          infinite: true,
          pauseOnHover: true,
          variableWidth: true,
          focusOnSelect: true,
          // waitForAnimate: false,
          // adaptiveHeight: true,
        }
      }
    },
    components: { VueSlickCarousel },
  }
</script>


<style>
  .carousel {
    width: 100vw;
    top: 130px;
    left: 0;
    right: 0;
    height: 500px;
    /* overflow: hidden; */
  }

  .slide {
    max-width: 1250px;
    height: 500px;
    margin: 0 12px;
    cursor: pointer;
  }

  .slide__img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    /* opacity: 0.4; */
  }

  .slick-slide {
    transition: .2s;
    opacity: 0.4;
  }

  .slick-center {
    opacity: 1;
  }

  .custom-arrow {
    transition: .2s;
    position: absolute;
    z-index: 10;
    width: 44px;
    height: 44px;
    opacity: 0.25;
  }

  .custom-arrow:hover {
    opacity: 0.4;
  }

  .prev-arrow {
    background: url('~@/assets/prev-arrow.png') no-repeat;
    background-position: center;
    left: 40px;
  }

  .next-arrow {
    background: url('~@/assets/arrow.png') no-repeat;
    background-position: center;
    right: 40px
  }

  .slick-prev:before,
  .slick-next:before {
    content: '';
  }

  .custom-dot {
    width: 50px;
    height: 4px;
    background-color: #fff;
    margin-right: 10px;
  }

  .slick-dots {
    bottom: 6px;
  }

  .slick-active .custom-dot{
    background-color: orange;
  }

  .slick-dots li{
    width: 50px;
    height: 10px;
    margin-right: 10px;
  }
</style>
