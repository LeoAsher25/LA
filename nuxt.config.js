export default {
  // Target: https://go.nuxtjs.dev/config-target

  target: 'static',
  generate: {
    fallback: false,
    dir: 'dist',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Leo Asher',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  loading: {
    color: '#293579',
    height: '4px',
  },

  loadingIndicator: {
    name: 'circle',
    color: '#40A9FF',
    background: 'white',
    throttle: 0,
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '@/assets/css/tailwind.css',
    '@/assets/css/main.scss',
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/antd-ui', '@/plugins/scroll'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxt/postcss8',
    '@nuxtjs/style-resources',
    '@nuxt/image',
    '@nuxtjs/color-mode',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyC_r19BeGBfndJrTvf3sOdvFrMONApQhrg',
          authDomain: 'leoasher-e65c1.firebaseapp.com',
          projectId: 'leoasher-e65c1',
          storageBucket: 'leoasher-e65c1.appspot.com',
          messagingSenderId: '118780209795',
          appId: '1:118780209795:web:28f390755fedb5cbf549b6',
          measurementId: 'G-D1PDBV1VSZ',
        },
        services: {
          auth: true, // Just as example. Can be any other service.
        },
      },
    ],
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  styleResources: {
    scss: ['@/assets/css/mixins.scss', '@/assets/css/vars/*'],
  },
  buildDir: 'dist',
}
