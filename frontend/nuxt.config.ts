// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@formkit/auto-animate/nuxt', '@nuxt/image', 'maz-ui/nuxt'],
  // @ts-ignore
  runtimeConfig: {
    public: {
      api: 'http://127.0.0.1:3333'
    }
  },
})
