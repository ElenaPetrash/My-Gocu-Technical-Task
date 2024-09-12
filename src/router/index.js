import { createRouter, createWebHistory } from 'vue-router'
import UserListView from '../views/UserListView.vue'
import UserAddView from '../views/UserAddView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: UserListView
    },
    {
      path: '/add-user',
      name: 'add-users',
      component: UserAddView
    }
  ]
})

export default router
