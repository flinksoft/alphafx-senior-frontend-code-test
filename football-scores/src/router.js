import Vue from 'vue'
import Router from 'vue-router'
import Teams from './views/Teams.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'teams',
      component: Teams
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/team/:id',
      name: 'team-info',
      component: () => import ('./components/TeamInfo.vue'),
      props: (route) => ({
        id: route.params.id,
        ...route.params
      })
    }
  ]
})
