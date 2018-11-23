import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import DriverRating from '@/components/DriverRating.vue'
import HomePage from '@/components/HomePage.vue'
import RankingOptions from '@/components/RankingOptions.vue'
import PassengerRating from '@/components/PassengerRating.vue'
import MostPopularRoute from '@/components/MostPopularRoute.vue'
import RouteStatus from '@/components/RouteStatus.vue'
import DriverStatus from '@/components/DriverStatus.vue'
import PassengerStatus from '@/components/PassengerStatus.vue'
import StatusOptions from '@/components/StatusOptions.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hhh',
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
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/rankingOptions',
      name: 'RankingOptions',
      component: RankingOptions
    },
    {
      path: '/mostPopularRoute',
      name: 'MostPopularRoute',
      component: MostPopularRoute
    },
    ,
    {
      path: '/driverStatus',
      name: 'DriverStatus',
      component: DriverStatus
    },
    {
      path: '/passengerStatus',
      name: 'PassengerStatus',
      component: PassengerStatus
    },
    {
      path: '/routeStatus',
      name: 'RouteStatus',
      component: RouteStatus
    },
    {
      path: '/statusOptions',
      name: 'StatusOptions',
      component: StatusOptions
    },
  ]
})
