<script>
import TheNavigation from '@/components/TheNavigation.vue'

export default {
  components: { TheNavigation }
}
</script>

<template>
  <TheNavigation></TheNavigation>
  <div class="container">
    <!-- Sidebar -->
    <RouterView v-slot="{ Component }" class="view left-sidebar" name="LeftSidebar">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </RouterView>
    <!-- Sidebar fim -->
    <RouterView v-slot="{ Component }" class="main-view">
      <Transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </Transition>
    </RouterView>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.container {
  display: flex;
}

.left-sidebar {
  width: 20%;
}

.main-view {
  width: 100%;
}
</style>
