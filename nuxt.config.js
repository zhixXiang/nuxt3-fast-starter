import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'FindBillion'
  },
  css: [
    // SCSS file in the project
    '~/assets/sass/main.scss'
  ],
  buildModules: ['@pinia/nuxt', 'nuxt-lodash', '@vueuse/nuxt'],
  vueuse: {
    ssrHandlers: true
  },
  lodash: {
    prefix: '_',
    prefixSkip: ['is'],
    alias: [
      ['camelCase', 'stringToCamelCase'], // => useStringToCamelCase
      ['kebabCase', 'stringToKebabCase'] // => useStringToKebabCase
    ]
  }
});
