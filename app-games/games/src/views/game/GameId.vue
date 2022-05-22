<template>
  <div class="container">
    <h1>Game {{ game.id }}</h1>
    <div v-if="!game">
      <app-loading/>
    </div>
    <Table :game="game" />
  </div>
</template>
<script>
import axios from 'axios';
import Table from '@/views/game/Table.vue';

export default {
  name: 'GameViewDetails',
  components: {
    Table,
  },
  data() {
    return {
      game: '',
    };
  },
  mounted() {
    this.getGame();
  },
  methods: {
    getGame() {
      const { id } = this.$route.params;
      const url = `http://localhost:3000/games/${id}`;
      axios
        .get(url)
        .then((response) => {
          setTimeout(() => {
            this.game = response.data;
          }, 1000);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
