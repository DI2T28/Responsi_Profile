// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/HomeView.vue') 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
