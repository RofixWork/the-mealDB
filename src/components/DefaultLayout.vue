<template>
  <!-- navbar -->
  <Navbar />
  <!-- render components here -->
  <main class="w-[90vw] sm:w-[70%] mx-auto mt-4">
    <router-view />
  </main>
</template>


<script setup>
//import components
import Navbar from "./Navbar.vue";
//import components
</script>