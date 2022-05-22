<template>
  <div class="container">
    <h1>Pessoa {{ person.id }}</h1>
    <div v-if="!person">
      <app-loading/>
    </div>
    <Table :person="person" />
  </div>
</template>
<script>
import axios from 'axios';
import Table from '@/views/person/Table.vue';

export default {
  name: 'PersonViewDetails',
  components: {
    Table,
  },
  data() {
    return {
      person: '',
    };
  },
  mounted() {
    this.getPerson();
  },
  methods: {
    getPerson() {
      const { id } = this.$route.params;
      const url = `http://localhost:3000/persons/${id}`;
      axios
        .get(url)
        .then((response) => {
          setTimeout(() => {
            this.person = response.data;
          }, 1000);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
