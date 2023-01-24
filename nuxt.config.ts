// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  telemetry: false,
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  runtimeConfig: {
    public: {
      // public runtime config
    }
  },
  vite: {
    logLevel: 'info'
  }
})
