<script setup lang="ts">
import { ref } from "vue";

const items = ref(["All", "Checked", "Not Checked"]);
</script>

<template>
  <div>
    <v-select
      class="text-white bg-purple-400 w-[100px] h-12 border-2 border-purple-400 outline-none text-base rounded-lg"
      :items="items"
      density="comfortable"
      label="Tasks"
    ></v-select>
  </div>
</template>
