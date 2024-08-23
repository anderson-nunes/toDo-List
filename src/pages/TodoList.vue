<script setup lang="ts">
import { Ref, ref } from "vue";
import Modal from "../components/modal/Modal.vue";

interface Note {
  id: number;
  text: string;
}

const notes: Ref<Note[]> = ref([]);

const addNote = (newNote: string) => {
  notes.value.push({ id: notes.value.length + 1, text: newNote });
};

const deleteNote = (id: number) => {
  notes.value = notes.value.filter((el) => {
    return el.id !== id;
  });
};

// const editNote = (text: string) => {

// }
</script>

<template>
  <div class="container mx-auto flex flex-col items-center pt-20 space-y-4">
    <h1 class="text-2xl text-center font-bold mb-4">TODO LIST</h1>
    <div class="flex items-center space-x-4">
      <div
        class="flex items-center px-4 py-2 rounded-md border-2 border-purple-400 overflow-hidden font-[sans-serif]"
      >
        <input
          type="text"
          placeholder="Search note..."
          class="w-[596px] outline-none bg-transparent text-purple-400 text-sm"
        />
        <fa class="border-purple-400 size-6" icon="search" />
      </div>
      <div class="block">
        <select
          id="countries"
          class="w-[100px] h-12 border-2 border-purple-400 bg-purple-400 outline-none text-base rounded-lg py-2.5 px-4"
        >
          <option class="" selected>All</option>
          <option value="US">Check</option>
          <option value="CA">No Check</option>
          <option value="FR">****</option>
          <option value="DE">****</option>
        </select>
      </div>
    </div>

    <div class="mt-4 space-y-2 w-[600px]">
      <div v-if="notes.length === 0" class="text-center text-lg text-gray-500">
        <h2>Create your tasks</h2>
      </div>
      <div v-else>
        <div
          class="flex items-center pb-2 border-b border-purple-400 mb-4"
          v-for="note in notes"
          :key="note.id"
        >
          <input type="checkbox" :id="`note${note.id}`" class="mr-2" />
          <div class="check">
            <label :for="`note${note.id}`" class="text-sm font-bold">
              {{ note.text }}
            </label>
            <input
              class="outline-none ml-2 w-56 bg-transparent"
              type="text"
              placeholder="Edit your note"
            />
            <div class="space">
              <fa class="fa cursor-pointer" icon="pen" />
              <fa
                @click="deleteNote(note.id)"
                class="cursor-pointer"
                icon="trash-can"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-full flex justify-end items-end">
        <Modal @addNote="addNote" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.check {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.fa {
  margin-right: 16px;
}

select option {
  background: white;
}
</style>
