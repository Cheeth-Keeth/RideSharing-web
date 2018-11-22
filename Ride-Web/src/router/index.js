import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Ride from '@/components/Ride.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/app',
      name: 'Ride',
      component: Ride
    }
  ]
})
