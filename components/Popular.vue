<template>
  <div class="col-sm-12 col-md-6">
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
</template>

<script>
export default {
  props: {
    category: Object,
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
