import VueFeather from 'vue-feather'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FeatherIcon', VueFeather)
})
