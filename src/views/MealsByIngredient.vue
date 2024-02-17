<template>
  <div>
    <select
      v-model="ingredient"
      class="w-full focus:border-orange-500 border-orange-400 border-1 focus:border-2 focus:ring-0"
      @change="handleChangeIngredient"
    >
      <option value="" hidden>choose_ingredient</option>
      <option
        v-for="ingredient in ingredients"
        :key="ingredient.idIngredient"
        :value="ingredient.strIngredient"
      >
        {{ ingredient.strIngredient }}
      </option>
    </select>
    <h3 v-if="!meals.length">Choose meals by ingredient</h3>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 py-6">
      <div v-for="meal in meals" :key="meal.idMeal">
        <div class="border border-gray-300 shadow rounded-sm overflow-hidden">
          <div class="h-[250px]">
            <img
              class="w-full h-full object-cover"
              :src="meal?.strMealThumb"
              :alt="meal?.strMeal"
              loading="lazy"
            />
          </div>
          <div class="p-2">
            <h2 class="text-base font-semibold text-nowrap">
              {{ meal?.strMeal }}
            </h2>
            <div class="flex gap-2 mt-4">
              <router-link
                :to="{ name: 'mealDetails', params: { id: meal?.idMeal } }"
                class="px-3 py-1 bg-blue-500 text-white rounded-sm"
                >View</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, defineProps , watch} from "vue";
import store from "../store";

//ref
const ingredient = ref("");

//ingredirents
const ingredients = computed(() => store.state.ingredients);
const meals = computed(() => store.state.searcheMealsByIngredients);

function handleChangeIngredient() {
  store.dispatch("getMealsByIngredients", ingredient.value);
}

//mounting
onMounted(() => {
  store.dispatch("getIngredients");

});
</script>
