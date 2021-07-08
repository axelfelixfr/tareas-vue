import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../components/Post.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/posts',
    name: 'Posts',
    // route level code-splitting
    // this generates a separate chunk (posts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "posts" */ '../views/Posts.vue')
  },
  {
    path: '/posts/:id',
    name: 'Post',
    component: Post,
    meta:{
      auth: true
    }
  },
  {
    // Con este path podemos redirigir todas las rutas no encontradas a home
    path: '/:catchAll(.*)',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

const authUser = true;
router.beforeEach((to,from,next) => {
  if(to.meta.auth && !authUser){
    next('/'); 
  } else{
    next();
  }
})

export default router
