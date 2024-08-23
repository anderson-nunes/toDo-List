<script setup lang="ts">
import { ref, watch } from "vue";

const emit = defineEmits(["addNote"]);
const dialog = ref(false);
const newNote = ref("");

watch(dialog, (newValue) => {
  if (newValue) return (newNote.value = "");
});

const applyNote = () => {
  emit("addNote", newNote.value);
  dialog.value = false;
};
</script>

<template>
  <div class="text-center pa-4">
    <v-dialog class="rounded-lg" v-model="dialog" max-width="400" persistent>
      <template v-slot:activator="{ props: activatorProps }">
        <fa
          v-bind="activatorProps"
          class="size-8 pt-8 cursor-pointer text-purple-400"
          icon="circle-plus"
        />
      </template>

      <v-card class="space text-center" title="NEW NOTE">
        <div
          class="flex items-center px-4 py-2 rounded-md border-2 border-purple-400 overflow-hidden font-[sans-serif]"
        >
          <input
            v-model="newNote"
            type="text"
            placeholder="Search note..."
            class="w-[596px] outline-none bg-transparent text-purple-400 text-sm"
          />
        </div>
        <template v-slot:actions>
          <v-spacer></v-spacer>
          <div class="w-full flex justify-between pt-14">
            <v-btn class="btn-cancel" @click="dialog = false"> CANCEL </v-btn>

            <v-btn class="btn-apply" @click="applyNote"> APPLY</v-btn>
          </div>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>

<style scoped>
.space {
  padding: 20px;
}

.btn-apply {
  width: 80px;
  background: rgb(192 132 252);
  color: white;
}

.btn-cancel {
  background: white;
  border: 1px solid rgb(192 132 252);
  color: rgb(192 132 252);
}
</style>
