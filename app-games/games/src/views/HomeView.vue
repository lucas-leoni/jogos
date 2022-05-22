<template>
  <div class="container">
    <h1>Pessoas</h1>
    <div v-if="!persons">
      <app-loading/>
    </div>
    {{persons}}
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HomeView',
  data() {
    return {
      persons: null,
    };
  },
  mounted() {
    this.getPerson();
  },
  methods: {
    getPerson() {
      const url = 'http://localhost:3000/persons';
      axios.get(url)
        .then((response) => {
          setTimeout(() => {
            this.persons = response.data;
          }, 1500);
        }).catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
