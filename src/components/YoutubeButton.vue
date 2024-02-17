<template>
  <a
    class="px-3 py-1 bg-red-500 text-white rounded-sm"
    :href="href"
    target="_blank"
    >
        <slot />
    </a
  >
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["href"]);
</script>
