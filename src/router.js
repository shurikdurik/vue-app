import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/todos',
        component: () => import('./views/ToDos.vue')
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;