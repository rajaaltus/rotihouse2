//create store
export const state = () => ({
  categories: [],
  category: [],
  featured: [],
  mainImages: []
});

//getters
export const getters = {
  categories(state) {
      return state.categories;
  },
  category(state) {
      return state.category;
  },
  featured(state) {
      return state.featured;
  },
  mainImages(state) {
      return state.mainImages;
  }
};

//mutations
export const mutations = {
  SET_CATEGORIES(state, categories) {
      state.categories = categories;
  },
  SET_SELECTED_CATEGORY(state, category) {
      state.category = category; 
  },
  SET_FEATURED(state, featured) {
      state.featured = featured;
  },
  SET_MAIN_IMAGES(state, mainImages) {
      state.mainImages = mainImages;
  }
};

//actions
export const actions = {
  async setCategories({commit}, categories) {
      categories = await this.$axios.$get('categories');
      commit("SET_CATEGORIES", categories);
  },
  async selectedCategory({commit}, {id}) {
      let category = await this.$axios.$get(`/categories/${id}`);
      commit("SET_SELECTED_CATEGORY", category);
  },
  async setFeatured({commit}, featured) {
      featured = await this.$axios.$get('/dishes/?featured=true');
          commit("SET_FEATURED", featured);
  },
  async setMainImages({commit}, mainImages) {
      mainImages = await this.$axios.$get('/sliders');
          commit("SET_MAIN_IMAGES", mainImages);
  }
  
};