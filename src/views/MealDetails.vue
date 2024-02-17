<template>
  <div v-if="meal" class="grid grid-cols-1 md:grid-cols-2 gap-3">
    <div class="h-[500px] rounded-sm outline outline-gray-300 outline-offset-1 shadow">
      <img
        :src="meal.strMealThumb"
        alt=""
        class="w-full h-full object-cover rounded-sm"
      />
    </div>
    <div>
      <h2 class="text-3xl font-bold">{{ meal.strMeal }}</h2>
      <p class="font-medium py-4 text-lg">{{ meal.strInstructions }}</p>
      <ul>
        <li>Category: {{ meal.strCategory }}</li>
        <li>Area: {{ meal.strArea }}</li>
      </ul>
      <router-link :to="{name:'byName'}" class="px-4 py-2 bg-black text-white mt-2 inline-block rounded-md">Back</router-link>
    </div>
  </div>
  <h3 v-else>Loading...</h3>   
</template>

<script setup>
import { computed, defineProps, onMounted } from "vue";
import store from "../store";

//define props
const props = defineProps(["id"]);

//meal
const meal = computed(() => store.state.meal);

//mounting
onMounted(() => {
  store.dispatch("getMealById", props.id);
});
</script>
