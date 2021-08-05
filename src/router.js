import { createRouter, createWebHistory } from 'vue-router';
import Home from '/@/views/Home.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/descobreix', component: () => import('/@/views/Discover.vue') },
    { path: '/projectes', component: () => import('/@/views/Projects.vue') },
  ],
});
