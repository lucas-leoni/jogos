<template>
  <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Age</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-for="person in persons" :key="person.id">
        <tr>
          <th scope="row">{{ person.id }}</th>
          <td>{{ person.name }}</td>
          <td>{{ person.email }}</td>
          <td>{{ person.age }}</td>
          <td>
            <button type="button" class="btn btn-primary">
              <router-link
                :to="{ name: 'PersonDetails', params: { id : person.id }}"
                class="text-white text-decoration-none"
                >
                Action
              </router-link>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: 'TablePersons',
  props: {
    persons: {
      type: null,
    },
  },
};
</script>
