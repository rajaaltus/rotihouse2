<template>
  <div class="row col-md-8">
    <div class="col-md-6 small-gutters categories_grid" v-for="(category,index) in categories" :key="index">
   <nuxt-link :to="`/categories/${category.id}`">
      <img
        :src="`${$axios.defaults.baseURL}${category.image.url}`"
        alt=""
        class="img-fluid lazy"
      />
      <div class="wrapper">
        <h2>{{ category.name }}</h2>
        <p>{{ category.dishes.length }} Dishes</p>
      </div>
    </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Popular from "@/components/Popular"
export default {
  components: {
    Popular
  },
  async fetch({ store }) {
    await store.dispatch("setCategories");
  },
  computed: {
    ...mapState(["categories"]),
  },
};
</script>

<style scoped>
.img-fluid {
  object-fit: cover;
  width: 120%;
  height: 320px;
}
</style>
