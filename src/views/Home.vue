<template>
 
  <div >
   
  </div>
</template>

<script setup>
//imports
import { onMounted, ref } from "vue";
import axiosClient from "../axiosClient";

//props
const ingredients = ref(null);



//method
/**
 * get meal method
 * http method uses => GET
 */
async function getMeals() {
  try {
    const { data } = await axiosClient.get("/list.php?i=list");
    ingredients.value = data?.meals;
  } catch (error) {
    console.error(error.message);
  }
}

//mounting
onMounted(() => {
  //run method after render components
  getMeals();
});
</script>
