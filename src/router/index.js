import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/ping',
      name: 'ping',
      component: () => import('../views/Ping.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/About.vue'),
    },
    {
      path: '/account',
      name: 'account',
      component: () => import('../views/Account.vue'),
      meta: { requiresAuth: true },
    },
  ],
})

// Add navigation guard for authentication check
router.beforeEach((to, from, next) => {
  const isAuthenticated = false // TODO: Add authentication logic
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login') // Redirect to login page if not authenticated
  } else {
    next() // Proceed to the next route
  }
})

export default router
