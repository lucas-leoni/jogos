<template>
  <div class="container">
    <h1>Pessoa {{ person.id }}</h1>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ person.id }}</th>
          <td>{{ person.name }}</td>
          <td>{{ person.email }}</td>
          <td>{{ person.age }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  name: 'PersonViewDetails',
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
          this.person = response.data;
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
