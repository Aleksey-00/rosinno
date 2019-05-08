import Vue from 'vue'
import Router from 'vue-router'
import LoginForm from '@/components/LoginForm'
import ListUsers from '@/components/ListUsers'
import PageNotFound from '@/components/PageNotFound'
import UserForm from '@/components/UserForm'
import {store} from '../store/index'

Vue.use(Router)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.ISAUTH) {
    next()
    return
  }
  next('/')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.ISAUTH) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    name: 'ListUsers',
    component: ListUsers,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/login',
    name: 'LoginForm',
    component: LoginForm,
    beforeEnter: ifNotAuthenticated
  },
  {
    path: '/user/add',
    name: 'UserForm',
    component: UserForm,
    beforeEnter: ifAuthenticated
  },
  {
    path: '/user/edit/:id',
    name: 'UserEditForm',
    component: UserForm,
    beforeEnter: ifAuthenticated
  },
  {
    path: '*',
    component: PageNotFound
  }
]

const router = new Router({
  mode: 'history',
  routes: routes
})

export default router
