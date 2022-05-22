import Vue from 'vue';
import VueRouter from 'vue-router';
import PersonViewDetails from '@/components/PersonId.vue';
import HomeView from '../views/HomeView.vue';
import GamesView from '../views/games/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/games',
    name: 'games',
    component: GamesView,
  },
  {
    path: '/person/:id',
    name: 'PersonDetails',
    component: PersonViewDetails,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
