// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxt/ui',
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
  ],
  runtimeConfig: {
    public: {
      middlewareOptions: {
        loginRoute: '/auth/login',
        registerRoute: '/auth/register',
        authenticatedBasePath: '/user/dashboard',
      }
    }
  },
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    clientOptions: {
      auth: {
        flowType: 'pkce',
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true
      },
    },
    redirect: false,
  },
  router: {
    linkExactActiveClass: ''
  },
  css: [
    '~/assets/css/fontface.css'
  ],
})
