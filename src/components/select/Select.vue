<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  items: {
    type: Array as () => string[],
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const updateValue = (value: string) => {
  emit("update:modelValue", value);
};
</script>

<template>
  <div>
    <v-select
      class="text-white bg-purple-400 w-[100px] h-12 border-2 border-purple-400 outline-none text-base rounded-lg"
      @update:modelValue="updateValue"
      :modelValue="props.modelValue"
      :items="props.items"
      density="comfortable"
      label="Tasks"
    ></v-select>
  </div>
</template>
