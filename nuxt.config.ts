// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({

    
     
      // https://v3.nuxtjs.org/api/configuration/nuxt.config
      css: ['~/assets/css/main.css'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

    
  
})
