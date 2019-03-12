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
      path: '/team/:id',
      name: 'team-info',
      component: () => import ('./components/TeamInfo.vue'),
      props: true,
      props: (route) => ({
        id: route.params.id,
        team: route.params.team
      })
    },
    {
      path: '/team/:id/addgame',
      name: 'add-team-game',
      component: () => import ('./components/AddTeamGame.vue'),
      props: true,
      props: (route) => ({
        id: route.params.teamId,
        teamName: route.params.teamName
      })
    },
    {
      path: '/team/:id/player/:name',
      name: 'player-history',
      component: () => import ('./components/PlayerHistory.vue'),
      props: true,
      props: (route) => ({
        id: route.params.id,
        name: route.params.name
      })
    },
    { path: "*", component:  () => import ('./views/PageNotFound.vue') }
  ]
})
