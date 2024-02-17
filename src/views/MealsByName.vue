<template>
  <div class="p-6">
    <input
      type="search"
      class="rounded border-orange-500 focus:border-2 focus:border-orange-600 focus:ring-0 w-full"
      placeholder="Search for Meals..."
      v-model="keyword"
      @change="searchByName"
    />
    <!-- meals -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-6">
      <meal-item v-for="meal in meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>

<script setup>
// import
import { computed, onMounted, ref } from "vue";
import store from "../store";
import { useRoute } from "vue-router";
import MealItem from "../components/MealItem.vue";
// import

//keyword
const keyword = ref("");

//meals
const meals = computed(() => store.state.searchedMeals);

//router
const route = useRoute();

//searh by name
async function searchByName() {
  store.dispatch("searchMeals", keyword.value);
}

//mounting
onMounted(() => {
  keyword.value = route.params.name;

  if (keyword.value) {
    searchByName();
  }
});
</script>
