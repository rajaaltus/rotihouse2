<template>
  <div class="col-lg-9">
    <div class="row">
      <div class="col-lg-4 col-md-6 mb-4" v-for="(dish, index) in category.dishes" :key="index">
        <facebook-loader v-if="myloading" :speed="2"></facebook-loader>
        <div class="strip" v-else>
          <figure>
            <!-- <span class="ribbon off">-10%</span> -->
            <img :src="dish.image ? `${$axios.defaults.baseURL}${dish.image.url}` : '/placeholder.png'" class="img-fluid lazy" alt="" />
            <nuxt-link :to="`/dishes/${dish.id}`" class="strip_info">
              <small>{{ dish.type }}</small>
              <div class="item_title">
                <h3>{{ dish.name }}</h3>
                <small><i class="fa fa-heart"></i></small>
              </div>
            </nuxt-link>
          </figure>
          <ul>
            <li>
              <span>{{ dish.price }} LAK</span>
            </li>
            <li>
              <div class="score">
                <span>Superb<em>350 Reviews</em></span
                ><strong>8.9</strong>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { FacebookLoader } from "vue-content-loader";
export default {
  head() {
    return {
      title: this.category.name,
    };
  },
  components: {
    FacebookLoader,
  },
  data() {
    return {
      myloading: true,
    };
  },
  async fetch({ store, params }) {
    this.myloading = true;
    await store.dispatch("selectedCategory", { id: params.id });
  },
  computed: {
    ...mapState(["category"]),
  },
  // category() {
  //   return this.category.find((t) => t.id == this.$route.params.id);
  // },
  mounted() {
    this.myloading = false;
  },
  updated() {
    this.myloading = false;
  },
};
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 30vh;
  object-fit: cover;
}

.card-text {
  overflow: hidden;
  height: 5vh;
  font-size: 0.8rem;
}
</style>
