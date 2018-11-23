import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import DriverRating from '@/components/DriverRating.vue'
import HomePage from '@/components/HomePage.vue'
import RankingOptions from '@/components/RankingOptions.vue'
import PassengerRating from '@/components/PassengerRating.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/driverRating',
      name: 'DriverRating',
      component: DriverRating
    },
    {
      path: '/passengerRating',
      name: 'PassengerRating',
      component: PassengerRating
    },
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/rankingOptions',
      name: 'RankingOptions',
      component: RankingOptions
    }
  ]
})
