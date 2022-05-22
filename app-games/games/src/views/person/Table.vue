<template>
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
</template>

<script>
export default {
  name: 'TablePerson',
  props: {
    person: {},
  },
};
</script>
