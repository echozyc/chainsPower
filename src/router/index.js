import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import ('../page/content/home')
const Solution = () => import ('../page/content/solution')
const Information = () => import ('../page/content/information')

const Underlying = () => import ('../page/content/underlying')
const Otc = () => import ('../page/content/otc')
const Robot = () => import ('../page/content/robot')
const Futures = () => import ('../page/content/future')
const bibi = () => import ('../page/content/bibi')
const Wallat = () => import ('../page/content/wallat')

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
      path: '/solution',
      component: Solution
    },
    {
      path: '/information',
      component: Information,
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
    }
  ]
})
