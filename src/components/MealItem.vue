<template>
    <div >
        <div class="border border-gray-300 shadow rounded-sm overflow-hidden">
          <div class="h-[250px]">
            <img
              class="w-full h-full object-cover"
              :src="meal?.strMealThumb"
              :alt="meal?.strTags"
              loading="lazy"
            />
          </div>
          <div class="p-2">
            <h2 class="text-base font-semibold text-nowrap">
              {{ meal?.strMeal }}
            </h2>
            <div class="flex gap-2 mt-4">
              <youtube-button :href="meal?.strYoutube" >YouTube</youtube-button>
              <router-link
                :to="{ name: 'mealDetails', params: { id: meal?.idMeal } }"
                class="px-3 py-1 bg-blue-500 text-white rounded-sm"
                >View</router-link
              >
            </div>
          </div>
        </div>
      </div>
</template>

<script setup>
import { defineProps } from 'vue';
import YoutubeButton from './YoutubeButton.vue';
const props = defineProps(["meal"]);
</script>