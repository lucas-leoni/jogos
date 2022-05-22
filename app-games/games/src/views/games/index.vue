<template>
  <div class="container">
    <h1>Games</h1>
    <div v-if="!games">
      <app-loading/>
    </div>
    <div>
      {{games}}
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'GamesView',
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
      axios.get(url)
        .then((response) => {
          setTimeout(() => {
            this.games = response.data;
          }, 1500);
        }).catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
