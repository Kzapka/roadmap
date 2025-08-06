<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default {
  components: { TheNavigation }
}
</script>

<template>

  <TheNavigation></TheNavigation>
  <div class="container">
    <RouterView :key="$route.path"></RouterView>
  </div>

</template>

<style scoped></style>
