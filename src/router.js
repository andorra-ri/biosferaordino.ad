import { createRouter, createWebHistory } from 'vue-router';
import Home from '/@/views/Home.vue';

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0, behavior: 'smooth' }),
  routes: [
    {
      path: '/',
      name: 'inici',
      component: Home,
    },
    {
      path: '/descobreix',
      name: 'descobreix',
      component: () => import('/@/views/Discover.vue'),
    },
    {
      path: '/projectes',
      name: 'projectes',
      component: () => import('/@/views/Projects.vue'),
    },
    {
      path: '/recursos',
      name: 'recursos',
      component: () => import('/@/views/Resources.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('/@/views/PrivacyPolicy.vue'),
    },
  ],
});
