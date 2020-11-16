<template>
  <div>
    <div class="home-slider">
      <client-only>
        <vueper-slides lazy lazy-load-on-drag autoplay fixedHeight="400px">
          <vueper-slide v-for="slide in mainImages" :key="slide.id" :title="slide.title" :content="slide.content" :image="$url() + slide.image.url" :duration="duration">
            <template v-slot:loader>
              <i class="icon icon-loader spinning"></i>
              <span>Loading...</span>
            </template>
          </vueper-slide>
        </vueper-slides>
      </client-only>
    </div>

    <div class="bg_gray">
      <div class="container pb-4">
        <div class="main_title center">
          <span><em></em></span>
          <h2>Popular Categories</h2>
          <p>Cum doctus civibus efficiantur in imperdiet deterruisset</p>
        </div>
        <div class="row small-gutters categories_grid">
          <Popular v-for="(category, index) in categories" :key="index" :category="category" class="my-1" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="main_title mt-4">
        <span><em></em></span>
        <h2>Our Signature dishes</h2>
        <p>
          Top selling and highest rating achieved dishes. Can't wait? Try now.
        </p>
      </div>

      <carousel :autoplay="true" :nav="true" :autoHeight="true" :dots="false" :margin="10">
        <div class="item" v-for="(item, index) in featured" :key="index">
          <facebook-loader v-if="myloading" :speed="2"></facebook-loader>
          <div class="strip" v-else>
            <figure>
              <!-- <span class="ribbon off">-10%</span> -->
              <img :src="`${$axios.defaults.baseURL}${item.image.url}`" :data-src="`${$axios.defaults.baseURL}${item.category.image.url}`" alt="" />
              <nuxt-link :to="`/dishes/${item.id}`" class="strip_info">
                <small>{{ item.type }}</small>
                <div class="item_title">
                  <h3>{{ item.price }}</h3>
                  <small><i class="fa fa-heart"></i></small>
                </div>
              </nuxt-link>
            </figure>
            <ul>
              <li>
                <span class="loc_open">{{ item.name }}</span>
              </li>
              <li>
                <div class="score">
                  <span>Superb<em>350 Reviews</em></span
                  ><strong>9.5</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import Popular from "@/components/Popular";
import { mapState } from "vuex";
import { FacebookLoader } from "vue-content-loader";
export default {
  layout: "home",
  components: {
    Popular,
    FacebookLoader,
  },
  data() {
    return {
      myloading: true,
      duration: 3000,
    };
  },
  async fetch({ store }) {
    await store.dispatch("setCategories");
    await store.dispatch("setFeatured");
    await store.dispatch("setMainImages");
  },
  computed: {
    ...mapState(["categories"]),
    ...mapState(["featured"]),
    ...mapState(["mainImages"]),
  },
  mounted() {
    this.myloading = false;
  },
  updated() {
    this.myloading = false;
  },
};
</script>
<style scoped>
.container-fluid {
  padding: 0;
}
.container-fluid img {
  width: 100%;
  min-height: 50vh !important;
  object-fit: cover;
}
.vueperslide {
  color: white !important;
  font-weight: 700;
}
</style>
