<template>
  <div class="col-lg-9">
    <div class="row">
      <div class="col-lg-8 col-md-10 mb-4">
        <a href="#"><img class="card-img" :src="`${$axios.defaults.baseURL}${dish.image.url}`" alt="" /></a>
        <div class="card-body">
          <h4 class="card-title">
            <a href="#">{{ dish.name }}</a>
          </h4>
          <h5>LAK {{ dish.price }}</h5>
          <p class="card-text">{{ dish.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  head() {
    return {
      title: this.dish.name,
    };
  },
  data() {
    dish: [];
  },
  async asyncData({ $axios, params }) {
    let dish = await $axios.$get(`/dishes/${params.id}`);
    return { dish: dish };
  },
};
</script>
