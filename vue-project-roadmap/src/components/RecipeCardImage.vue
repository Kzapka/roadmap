<script setup>
defineProps(['recipe'])
</script>

<template>
    <img @click="$emit('to-quickview')" :src="recipe.image" />
</template>

<style scoped>
img {
    aspect-ratio: 1/1;
    width: 100%;
    border-radius: 5px;
    cursor: pointer;
    opacity: 0.9;
    transition: opacity 0.2s;
}

img:hover {
    opacity: 1;
}
</style>