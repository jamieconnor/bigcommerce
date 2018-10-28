import Vue from 'vue'
import Router from 'vue-router'
import WhatsForLunch from './views/WhatsForLunch.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'lunch',
      component: WhatsForLunch
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
