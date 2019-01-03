import Vue from 'vue'
import Router from 'vue-router'
import StackVis from './views/StackVis.';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: StackVis
    },
    {
      path: '/stackVis',
      name: 'stackVis',
      component: StackVis
    }
  ]
})
