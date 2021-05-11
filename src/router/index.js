import Vue from 'vue'
import VueRouter from 'vue-router'
import partyModify from "../views/partyModify"
import Login from "../views/Login"
import Vote from "../views/Vote"
import viewParty from "../views/ViewParty"

Vue.use(VueRouter)

const routes = [
  {
    path: '/modify',
    name:'partyModify',
    component: partyModify
  },
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/vote',
    name: 'vote',
    component: Vote
  },
  {
    path: '/viewParty',
    name: 'viewParty',
    component: viewParty
  }
]

const router = new VueRouter({
  mode:'history',
  routes
})

export default router
