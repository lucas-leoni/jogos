<template>
  <div class="container">
    <h1>Games</h1>
    <div v-if="!games">
      <app-loading/>
    </div>
    <Table :games="games" />
  </div>
</template>

<script>
import axios from 'axios';
import Table from '@/views/games/Table.vue';

export default {
  name: 'GamesView',
  components: {
    Table,
  },
  data() {
    return {
      games: null,
    };
  },
  mounted() {
    this.getGames();
  },
  methods: {
    getGames() {
      const url = 'http://localhost:3000/games';
      axios
        .get(url)
        .then((response) => {
          setTimeout(() => {
            this.games = response.data;
          }, 1000);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
