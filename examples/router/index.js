import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      component: () => import('../pages/home.vue')
    },
    {
      path: '/button',
      component: () => import('../pages/button.vue')
    },
    {
      path: '/toast',
      component: () => import('../pages/toast.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  }
});
