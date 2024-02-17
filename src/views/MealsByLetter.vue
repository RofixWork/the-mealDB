<template>
  <div class="">
    <div class="flex gap-2 justify-center py-4 flex-wrap uppercase">
      <router-link
        class="font-mono rounded-sm bg-orange-500 text-white w-[25px] h-[25px] grid place-items-center"
        v-for="(letter, index) in letters"
        :key="index"
        :to="{ name: 'byLetter', params: { letter } }"
      >
        {{ letter }}
      </router-link>
    </div>
    <!-- meals -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-6">
      <meal-item v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
// imports
import { defineProps, onMounted, watch, computed } from "vue";
import store from "../store";
import MealItem from "../components/MealItem.vue";
//get props
const props = defineProps(["letter"]);

//get letter from path

//letter
const letters = "abcdefghijklmnopqrstuvwxyz".split("");

//meals by Letetr
const meals = computed(() => store.state.searcheMealsByLetter);

//watch
onMounted(() => {
  if(props.letter)
    store.dispatch("getMealByLetter", props.letter);
  watch(
    () => props.letter,
    (newLetter, oldLetter) => {
      if (newLetter !== oldLetter) {
        store.dispatch("getMealByLetter", newLetter);
      }
    }
  );
});
</script>
