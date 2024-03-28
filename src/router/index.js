import { createRouter, createWebHistory } from 'vue-router';
import Index from '../views/Index.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Index,
    meta: { 
      requiresAuth: false,
    }
  },
  { 
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: NotFound,
  meta: { 
      requiresAuth: false,
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router