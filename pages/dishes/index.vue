<template>
  <div class="col-lg-9">
    <div
      id="carouselExampleControls"
      class="carousel slide my-4"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div
          class="carousel-item"
          v-for="(image, index) in mainImages.images"
          :key="index"
          :class="{ active: index == 0 }"
        >
          <img
            :src="`${$axios.defaults.baseURL}${image.url}`"
            class="d-block w-100"
            alt="https://via.placeholder.com/900x350"
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainImages: [],
    };
  },
  async asyncData({ $axios }) {
    let mainImages = await $axios.$get("/sliders/2");
    return { mainImages: mainImages };
  },
};
</script>
