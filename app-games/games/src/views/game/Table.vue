<template>
  <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Year</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ game.id }}</th>
          <td>{{ game.name }}</td>
          <td>{{ game.category }}</td>
          <td>{{ game.year }}</td>
          <td>{{ game.price }}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  name: 'TableGame',
  props: {
    game: {},
  },
};
</script>
