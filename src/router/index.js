import {
  createRouter,
  createWebHistory
} from "vue-router";
import {
  routes
} from './router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


router.beforeEach((to, from, next) => {
  const token = window.sessionStorage.getItem("token");
  if (to.meta.isLogin) {
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})
export default router;