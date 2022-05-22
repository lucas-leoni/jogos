<template>
  <nav class="navbar bg-primary d-flex justify-content-start px-5 py-4 mb-5">
    <router-link class="text-white text-decoration-none px-3" to="/">
      <h3>Persons</h3>
    </router-link>
    <router-link class="text-white text-decoration-none px-3" to="/games">
      <h3>Games</h3>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
};
</script>
