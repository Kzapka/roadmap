<script setup>
defineProps(['recipe'])
import RecipeCardImage from './RecipeCardImage.vue';
import RecipeCardQuickView from './RecipeCardQuickView.vue';
import { ref } from 'vue';

const isImage = ref(true)
</script>

<template>

    <section class="recipe-card">
        <!-- <RecipeCardImage @click="isImage = false" v-if="isImage" :recipe />
        <RecipeCardQuickView @to-image="isImage = true" v-else :recipe /> -->
        <component v-bind:is="isImage ? RecipeCardImage : RecipeCardQuickView" v-bind:recipe="recipe"
            @to-image="isImage = true" @to-quickview="isImage = false" />
    </section>

</template>

<style scoped>
.recipe-card {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 5px #ddd;
    padding: 15px;
    text-align: center;
}
</style>