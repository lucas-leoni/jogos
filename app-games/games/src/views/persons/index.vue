<template>
  <div class="container">
    <h1>Pessoas</h1>
    <div v-if="!persons">
      <app-loading />
    </div>
    <Table :persons="persons" />
  </div>
</template>

<script>
import axios from 'axios';
import Table from '@/views/persons/Table.vue';

export default {
  name: 'HomeView',
  components: {
    Table,
  },
  data() {
    return {
      persons: null,
    };
  },
  mounted() {
    this.getPersons();
  },
  methods: {
    getPersons() {
      const url = 'http://localhost:3000/persons';
      axios
        .get(url)
        .then((response) => {
          setTimeout(() => {
            this.persons = response.data;
          }, 1000);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
