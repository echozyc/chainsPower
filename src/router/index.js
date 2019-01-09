import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

const Home = () => import ('../page/home/home')


const Solution = () => import ('../page/solution/solution')
  const Wallat = () => import ('../page/solution/wallat/wallat')

  const Otc = () => import ('../page/solution/numberAsset/otc')
  const Robot = () => import ('../page/solution/numberAsset/robot')
  const Futures = () => import ('../page/solution/numberAsset/future')
  const bibi = () => import ('../page/solution/numberAsset/bibi')
  const numberAsset = () => import ('../page/solution/numberAsset/numberAsset')

  const Underlying = () => import ('../page/solution/underlying/underlying')
  const SZSC = () => import ('../page/solution/underlying/SZSC')
  const CPSY = () => import ('../page/solution/underlying/CPSY')
  const GYLJR = () => import ('../page/solution/underlying/GYLJR')
  const JCYC = () => import ('../page/solution/underlying/JCYC')
  const QKLYX = () => import ('../page/solution/underlying/QKLYX')
  const WLW = () => import ('../page/solution/underlying/WLW')
  const HTCZ = () => import ('../page/solution/underlying/HTCZ')
  const XXAQ = () => import ('../page/solution/underlying/XXAQ')
  const GYCS = () => import ('../page/solution/underlying/GYCS')
  const DSJRGZN = () => import ('../page/solution/underlying/DSJRGZN')
  const JFLM = () => import ('../page/solution/underlying/JFLM')

const EosDapp = () => import ('../page/EosDapp/eosDapp')

const Information = () => import ('../page/information/information')
  const Detail = () => import ('../page/information/detail')
  const ListsZX = () => import ('../page/information/listsZX')
  const ListsGG = () => import ('../page/information/listsGG')
  const ListsLDZX = () => import ('../page/information/listsLDZX')
  const ListsXT = () => import ('../page/information/listsXT')


const Promote = () => import ('../page/promote/promote')
  const WhitePaper = () => import ('../page/promote/whitepaper')
  const Brand = () => import ('../page/promote/brand')
  const Community = () => import ('../page/promote/community')











// Router.prototype.goBack = function () {
//   this.isBack = true
//   window.history.go(-1)
// }


Vue.use(Router)
Vue.use(Meta)

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
      redirect: '/information/listsZX',
      children: [
        {
          path: '/information/detail',
          component: Detail,
        },
        {
          path: '/information/listsZX',
          component: ListsZX,
        },
        {
          path: '/information/listsGG',
          component: ListsGG,
        },
        {
          path: '/information/listsLDZX',
          component: ListsLDZX,
        },
        {
          path: '/information/listsXT',
          component: ListsXT,
        }
      ]
    },

    {
      path: '/eosdapp',
      component: EosDapp
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
          path: '/solution/szsc',
          component: SZSC
        },
        {
          path: '/solution/cpsy',
          component: CPSY
        },
        {
          path: '/solution/gyljr',
          component: GYLJR
        },
        {
          path: '/solution/jcyc',
          component: JCYC
        },
        {
          path: '/solution/qklyx',
          component: QKLYX
        },
        {
          path: '/solution/wlw',
          component: WLW
        },
        {
          path: '/solution/htcz',
          component: HTCZ
        },
        {
          path: '/solution/xxaq',
          component: XXAQ
        },
        {
          path: '/solution/gycs',
          component: GYCS
        },
        {
          path: '/solution/dsjrgzn',
          component: DSJRGZN
        },
        {
          path: '/solution/jflm',
          component: JFLM
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
          path: '/solution/numberAsset',
          component: numberAsset
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
