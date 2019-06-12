import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue';
import About from '../views/About.vue';

Vue.use(Router)

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]

export const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: routes
})
