<template>
  <header class="flex items-center justify-between px-4 h-[55px] shadow">
    <router-link
      class="text-base md:text-xl font-semibold font-mono text-orange-500"
      :to="{ name: 'home' }"
      >Meals</router-link
    >

    <nav class="h-full">
      <router-link
        class="inline-flex px-2 items-center h-full hover:bg-orange-500 hover:text-white"
        :to="{name: 'byName'}"
        >Search Meals</router-link
      >
      <router-link
        class="inline-flex px-2 items-center h-full hover:bg-orange-500 hover:text-white"
        :to="{name: 'byLetter'}"
        >Search By Letter</router-link
      >
      <router-link
        class="inline-flex px-2 items-center h-full hover:bg-orange-500 hover:text-white"
        :to="{name: 'byIngredient'}"
        >Search By Ingredients</router-link
      >
    </nav>
  </header>
</template>

<script setup></script>
