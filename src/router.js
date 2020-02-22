import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '/1.2',
      name: '单项数据流和它们的语法糖',
      component: () => import('./views/1.2')
    },
    {
      path: '/1.5',
      name: 'watch与computed',
      component: () => import('./views/1.5')
    },
    {
      path: '/1.6',
      name: '观察vue的声明周期',
      component: () => import('./views/1.6')
    },
    {
      path: '/1.6_a',
      name: '秒杀组件',
      component: () => import('./views/1.6_a')
    },
    {
      path: '/question_1',
      name: '习题解答上',
      component: () => import('./views/question_1')
    }
  ]
})