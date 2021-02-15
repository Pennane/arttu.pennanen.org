export default {
  publicPath: "/nuxt/",
  target: "static",
  head: {
    title: "Arttu Pennanen - Aspiring developer working with the web",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "title",
        name: "title",
        content: "Arttu Pennanen - Aspiring developer working with the web"
      },
      {
        hid: "description",
        name: "description",
        content:
          "Portfolio website by Arttu Pennanen housing personal web projects consisting of utilities, demos and inner side jokes."
      },
      {
        hid: "og:type",
        name: "og:type",
        content: "website"
      },
      {
        hid: "og:title",
        name: "og:title",
        content: "Arttu Pennanen - Aspiring developer working with the web"
      },
      {
        hid: "og:description",
        name: "og:description",
        content:
          "Portfolio website by Arttu Pennanen housing personal web projects consisting of utilities, demos and inner side jokes."
      },
      {
        hid: "og:image",
        name: "og:image",
        content: "https://pennanen.dev/cover.png"
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary_large_image"
      },
      {
        hid: "twitter:type",
        name: "twitter:type",
        content: "website"
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Arttu Pennanen - Aspiring developer working with the web"
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content:
          "Portfolio website by Arttu Pennanen housing personal web projects consisting of utilities, demos and inner side jokes."
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "https://pennanen.dev/cover.png"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  css: ["@/assets/theme.scss", "@/assets/global.scss"],
  plugins: [],
  components: true,
  buildModules: ["@nuxt/typescript-build", "@nuxtjs/google-analytics"],
  modules: ["@nuxtjs/google-fonts"],
  googleFonts: {
    preload: true,
    display: "swap",
    families: {
      Inter: [400, 450, 500, 600]
    }
  },
  googleAnalytics: {
    id: "UA-126133790-2"
  },
  build: {}
};
