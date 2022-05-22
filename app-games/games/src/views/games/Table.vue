<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Category</th>
        <th scope="col">Year</th>
        <th scope="col">Price</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody v-for="game in games" :key="game.id">
      <tr>
        <th scope="row">{{ game.id }}</th>
        <td>{{ game.name }}</td>
        <td>{{ game.category }}</td>
        <td>{{ game.year }}</td>
        <td>{{ game.price }}</td>
        <td>
          <button type="button" class="btn btn-primary">
            <router-link
              :to="{ name: 'GameDetails', params: { id: game.id } }"
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
  name: 'TableGames',
  props: {
    games: {
      type: null,
    },
  },
};
</script>
