export default {
  publicPath: "/nuxt/",
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Arttu Pennanen",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Arttu Pennanen's portfolio website"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/theme.scss", "@/assets/global.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    // "@nuxtjs/axios",
    "@nuxtjs/google-fonts"
  ],

  // // Axios module configuration: https://go.nuxtjs.dev/config-axios
  // axios: {},

  googleFonts: {
    preload: true,
    display: "swap",
    families: {
      Inter: [400, 450, 500, 600]
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
