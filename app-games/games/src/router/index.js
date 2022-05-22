import Vue from 'vue';
import VueRouter from 'vue-router';
import PersonView from '@/views/persons/index.vue';
import GamesView from '@/views/games/index.vue';
import PersonViewDetails from '@/views/person/PersonId.vue';
import GameViewDetails from '@/views/game/GameId.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: PersonView,
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
    path: '/game/:id',
    name: 'GameDetails',
    component: GameViewDetails,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
