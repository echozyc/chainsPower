import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import ('../page/home/home')
const Solution = () => import ('../page/solution/solution')
const Information = () => import ('../page/information/information')
const Promote = () => import ('../page/promote/promote')

const Underlying = () => import ('../page/solution/underlying')
const Otc = () => import ('../page/solution/otc')
const Robot = () => import ('../page/solution/robot')
const Futures = () => import ('../page/solution/future')
const bibi = () => import ('../page/solution/bibi')
const Wallat = () => import ('../page/solution/wallat')

const WhitePaper = () => import ('../page/promote/whitepaper')
const Brand = () => import ('../page/promote/brand')
const Community = () => import ('../page/promote/community')

// Router.prototype.goBack = function () {
//   this.isBack = true
//   window.history.go(-1)
// }


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },

    {
      path: '/information',
      component: Information,
    },


    {
      path: '/solution',
      component: Solution
    },

        {
          path: '/solution/underlying',
          component: Underlying
        },
        {
          path: '/solution/otc',
          component: Otc
        },
        {
          path: '/solution/robot',
          component: Robot
        },
        {
          path: '/solution/futures',
          component: Futures
        },
        {
          path: '/solution/bibi',
          component: bibi
        },
        {
          path: '/solution/wallat',
          component: Wallat
        },

    {
      path: '/promote',
      component: Promote
    },
        {
          path: '/promote/whitepaper',
          component: WhitePaper
        },
        {
          path: '/promote/brand',
          component: Brand
        },
        {
          path: '/promote/community',
          component: Community
        },
  ]
})
