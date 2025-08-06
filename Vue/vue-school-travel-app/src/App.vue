<script>
import { RouterLink } from 'vue-router';

</script>

<template>
  <div id="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/brazil">Brasil</RouterLink>
    <RouterLink to="/havai">Havaí</RouterLink>
    <RouterLink to="/jamaica">Jamaica</RouterLink>
    <RouterLink to="/panama">Panamá</RouterLink>
  </div>

  <div class="container">
    <RouterView></RouterView>
  </div>

</template>

<style scoped></style>
