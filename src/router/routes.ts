import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/auth',
    component: () => import('layouts/GuestLayout.vue'),
    children: [{ path: 'login', component: () => import('pages/auth/SignUpPage.vue') }],
  },

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{
      path: 'balance',
      component: () => import('pages/user/BalancePage.vue'),
    },
    {
      path: 'expenses',
      component: () => import('pages/user/ExpensesPage.vue'),
    },
    {
      path: 'purchase',
      component: () => import('pages/user/PurchasePage.vue'),
    },
    {
      path: 'checks',
      component: () => import('pages/user/ChecksPage.vue'),
    },
    {
      path: 'checks/deposit',
      component: () => import('pages/user/DepositCheckPage.vue'),
    }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
