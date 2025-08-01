<script setup>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
import RecipeCard from './components/RecipeCard.vue';
import recipes from './assets/data.js'
import Banner from './components/Banner.vue';
import Button from './components/Button.vue';
</script>

<template>
  <Header></Header>
  <Banner>
    <p>🚨 <strong>NEW RECIPE:</strong> Triple Chocolate Chip Cookies! 🚨</p>
  </Banner>
  <main>
    <RecipeCard v-for="(recipe, index) in recipes" :key="index" :recipe="recipes[index]" />
  </main>
  <Button>Load More</Button>
  <Footer></Footer>
</template>

<style scoped>
main {
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  background: white;
}

@media (min-width:414px) {
  main {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width:768px) {
  main {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media (min-width:1200px) {
  main {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}
</style>
