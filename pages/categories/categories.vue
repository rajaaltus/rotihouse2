<template>
  <div class="container py-8">
    <div class="row">
      <aside class="col-lg-3" id="sidebar_fixed">
        <div class="clearfix">
          <div class="sort_select">
            <select name="sort" id="sort">
              <option value="popularity" selected="selected"
                >Sort by Popularity</option
              >
              <option value="rating">Sort by Average rating</option>
              <option value="date">Sort by newness</option>
              <option value="price">Sort by Price: low to high</option>
              <option value="price-desc">Sort by Price: high to low</option>
            </select>
          </div>
          <a href="#0" class="open_filters btn_filters"
            ><i class="fa fa-filter"></i><span>Filters</span></a
          >
        </div>
        <div class="filter_col">
          <div class="inner_bt">
            <a href="#" class="open_filters"><i class="icon_close"></i></a>
          </div>
          <div class="filter_type">
            <h4>
              <a href="#filter_1" data-toggle="collapse" class="opened"
                >Categories</a
              >
            </h4>
            <div class="collapse show" id="filter_1">
              <ul v-for="(category, index) in categories" :key="index">
                <nuxt-link :to="`/categories/${category.id}`"
                  ><li>
                    <label class="container_check"
                      ><i class="fa fa-eye mr-2"></i>{{ category.name }}
                      <small>{{ category.dishes.length }}</small>
                    </label>
                  </li>
                </nuxt-link>
              </ul>
            </div>
            <!-- /filter_type -->
          </div>
          <!-- /filter_type -->
          <div class="filter_type">
            <h4>
              <a href="#filter_2" data-toggle="collapse" class="closed"
                >Rating</a
              >
            </h4>
            <div class="collapse" id="filter_2">
              <ul>
                <li>
                  <label class="container_check"
                    >Superb 9+ <small>06</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container_check"
                    >Very Good 8+ <small>12</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container_check"
                    >Good 7+ <small>17</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container_check"
                    >Pleasant 6+ <small>43</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <!-- /filter_type -->
          <div class="filter_type">
            <h4>
              <a href="#filter_3" data-toggle="collapse" class="closed"
                >Distance</a
              >
            </h4>
            <div class="collapse" id="filter_3">
              <div class="distance">
                Radius around selected destination <span></span> km
              </div>
              <div class="add_bottom_15">
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="10"
                  value="30"
                  data-orientation="horizontal"
                />
              </div>
            </div>
          </div>
          <!-- /filter_type -->
          <div class="filter_type">
            <h4>
              <a href="#filter_4" data-toggle="collapse" class="closed"
                >Price</a
              >
            </h4>
            <div class="collapse" id="filter_4">
              <ul>
                <li>
                  <label class="container_check"
                    >$0 — $50<small>11</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container_check"
                    >$50 — $100<small>08</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container_check"
                    >$100 — $150<small>05</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
                <li>
                  <label class="container_check"
                    >$150 — $200<small>18</small>
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div class="buttons">
            <a href="#0" class="btn_1 full-width">Filter</a>
          </div>
        </div>
      </aside>

      <nuxt-child />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  async fetch({ store }) {
    await store.dispatch("setCategories");
  },
  computed: {
    ...mapState(["categories"]),
  },
};
</script>
