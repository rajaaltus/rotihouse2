<template>
  <div>
    <footer>
      <div class="container py-4">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <h3 data-target="#collapse_1">Quick Links</h3>
            <div class="collapse dont-collapse-sm links" id="collapse_1">
              <ul>
                <li><nuxt-link to="/about">About us</nuxt-link></li>
                <li><nuxt-link to="/help">Add your restaurant</nuxt-link></li>
                <li><nuxt-link to="/help">Help</nuxt-link></li>
                <li><nuxt-link to="/account">My account</nuxt-link></li>
                <li><nuxt-link to="/blog">Blog</nuxt-link></li>
                <li><nuxt-link to="/contacts">Contacts</nuxt-link></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h3 data-target="#collapse_2">Categories</h3>
            <div class="collapse dont-collapse-sm links" id="collapse_2">
              <ul>
                <li>
                  <nuxt-link to="/listing-grid-1-full"
                    >Top Categories</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/listing-grid-2-full">Best Rated</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/listing-grid-1-full">Best Price</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/listing-grid">Latest Submissions</nuxt-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h3 data-target="#collapse_3">Contacts</h3>
            <div class="collapse dont-collapse-sm contacts" id="collapse_3">
              <ul>
                <li>
                  <i class="fa fa-map"></i>23/5 Khun bu lom Road, Sihom<br />Vientiane
                  - Lao PDR
                </li>
                <li><i class="fa fa-phone"></i>+856 20 580 26838</li>
                <li>
                  <i class="fa fa-envelope"></i
                  ><a href="#0">info@rotihouselao.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h3 data-target="#collapse_4">Keep in touch</h3>
            <div class="collapse dont-collapse-sm" id="collapse_4">
              <div id="newsletter">
                <div id="message-newsletter"></div>
                <form
                  method="post"
                  action="assets/newsletter.php"
                  name="newsletter_form"
                  id="newsletter_form"
                >
                  <div class="form-group">
                    <input
                      type="email"
                      name="email_newsletter"
                      id="email_newsletter"
                      class="form-control"
                      placeholder="Your email"
                    />
                    <button type="submit" id="submit-newsletter">
                      <i class="fa fa-paper-plane"></i>
                    </button>
                  </div>
                </form>
              </div>
              <div class="follow_us">
                <h5>Follow Us</h5>
                <ul>
                  <li>
                    <a
                      href="https://facebook.com/rotihouselao"
                      target="_blank"
                      class="text-light"
                      ><i class="fa fa-facebook-f"></i
                    ></a>
                  </li>
                  <li>
                    <a class="text-light"><i class="fa fa-instagram"></i></a>
                  </li>
                  <li>
                    <a class="text-light"><i class="fa fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- /row-->
        <hr />
        <div class="row add_bottom_25 py-4">
          <div class="col-lg-6">
            <ul class="footer-selector clearfix">
              <li>
                <div class="styled-select">
                  <select>
                    <option value="English" selected>English</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Russian">Russian</option>
                  </select>
                </div>
              </li>
              <li>
                <div class="styled-select">
                  <select>
                    <option value="US Dollars" selected>US Dollars</option>
                    <option value="Euro">Euro</option>
                  </select>
                </div>
              </li>
              <li>
                <img
                  src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
                  data-src="img/cards_all.svg"
                  alt=""
                  width="198"
                  height="30"
                  class="lazy"
                />
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul class="additional_links">
              <li><a href="#0">Terms and conditions</a></li>
              <li><a href="#0">Privacy</a></li>
              <li><span>© 2019 RotiHouse</span></li>
            </ul>
          </div>
          <button
            type="button"
            class="btn btn-danger scroll-to"
            v-scroll-to="'body'"
          >
            <i class="fa fa-angle-up"></i>
          </button>
        </div>
      </div>
    </footer>
    <div class="layer"></div>
    <!-- Opacity Mask Menu Mobile -->
  </div>
</template>

<style scoped>
.scroll-to {
  position: absolute;
  right: 40px;
  z-index: 999;
}
</style>
