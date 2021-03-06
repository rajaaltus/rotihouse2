const apiURL = "https://api2.rotihouselao.com";
export default {
  target: "static",
  env: {
    apiUrl: apiURL,
  },
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "Roti House | Indian Restaurant - %s",
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: process.env.npm_package_description || "" }],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/logo.svg" },
      { rel: "stylesheet", type: "javascript/text", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" },
      { rel: "stylesheet", type: "text/css", href: "/home.css" },
      { rel: "stylesheet", type: "text/css", href: "/style.css" },
      { rel: "stylesheet", type: "text/css", href: "/listing.css" },
      { rel: "stylesheet", type: "javascript/text", href: "/bootstrap_customized.min.css" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700&display=swap" },
      { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" },
    ],
    script: [
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" },
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js" },
      { src: "https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" },
      { src: "/sticky_sidebar.js", type: "text/javascript", body: true },
      { src: "/specific_listing.js", type: "text/javascript", body: true },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/scss/styles.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "plugins/owl.js", ssr: false }, "~/plugins/vueper-slides.js", "~/plugins/url-helper.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "vue-scrollto/nuxt",
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // baseURL: 'http://localhost:1345'
    baseURL: apiURL,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
