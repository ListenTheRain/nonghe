import Vue from 'vue'
import Router from 'vue-router'
import Mid from '@/components/pages/Mid'
import Butie from '@/components/pages/butie'
import Detail from '@/components/pages/detail'
import Xueyuan from '@/components/pages/xueyuan'
import Nongji from '@/components/pages/nongji'
import Hezuoshe from '@/components/pages/hezuoshe'
import Guandian from '@/components/pages/guandian'
import Kuaixun from '@/components/pages/kuaixun'
import Shehuihua from '@/components/pages/shehuihua'
import Xueyuandetail from '@/components/pages/xueyuandetail'
Vue.use(Router)

export default new Router({
 // mode: 'history',
  routes: [
    {
      path: '/Butie',
      name: 'Butie',
      component: Butie
    },
    {
      path: '/',
      name: 'Mid',
      component: Mid
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/Xueyuan',
      name: 'Xueyuan',
      component: Xueyuan
    },
    {
      path: '/Nongji',
      name: 'Nongji',
      component: Nongji
    },
    {
      path: '/Hezuoshe',
      name: 'Hezuoshe',
      component: Hezuoshe
    },
    {
      path: '/Guandian',
      name: 'Guandian',
      component: Guandian
    },
    {
      path: '/Kuaixun',
      name: 'Kuaixun',
      component: Kuaixun
    },
    {
      path: '/Shehuihua',
      name: 'Shehuihua',
      component: Shehuihua
    },
    {
      path: '/Xueyuandetail',
      name: 'Xueyuandetail',
      component: Xueyuandetail
    }
  ]
})
