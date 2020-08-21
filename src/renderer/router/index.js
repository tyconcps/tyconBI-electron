import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home';
import MarkPage from '../components/MarkPage';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/markpage',
      name: 'markpage',
      component: MarkPage,
    },
    {
      path: '/',
      name: 'home',
      component: require('@/components/Home').default,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
