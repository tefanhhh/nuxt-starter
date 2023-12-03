// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    [
      "@nuxtjs/eslint-module",
      {
        cache: true,
      },
    ],
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
  ],
  ssr: false,
})
