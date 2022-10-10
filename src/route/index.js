import { createRouter, createWebHashHistory } from 'vue-router';
const login = () => import('@/view/login/login');

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
