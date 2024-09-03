<script setup lang="ts">
import { Ref, ref } from "vue";
import Modal from "../components/modal/Modal.vue";
import Select from "../components/select/Select.vue";
import { computed } from "vue";

interface Note {
  id: number;
  text: string;
  isEditing: boolean;
  isChecked: boolean;
}

const notes: Ref<Note[]> = ref([]);
const searchNotes = ref("");
const selectedFilter = ref("All");

const addNote = (newNote: string) => {
  notes.value.push({
    id: notes.value.length + 1,
    text: newNote,
    isEditing: false,
    isChecked: false,
  });
};

const deleteNote = (id: number) => {
  notes.value = notes.value.filter((el) => {
    return el.id !== id;
  });
};

const editNote = (id: number) => {
  const note = notes.value.find((el) => el.id === id);

  if (note) {
    note.isEditing = true;
  }
};

const saveNote = (id: number, newText: string) => {
  const note = notes.value.find((el) => el.id === id);
  if (note) {
    note.text = newText;
    note.isEditing = false;
  }
};

const filteredNotes = computed(() => {
  return notes.value.filter((note) => {
    const matchesText = note.text
      .toLowerCase()
      .includes(searchNotes.value.toLowerCase());

    if (selectedFilter.value === "Checked") {
      return note.isChecked && matchesText;
    } else if (selectedFilter.value === "Not Checked") {
      return !note.isChecked && matchesText;
    } else {
      return matchesText;
    }
  });
});
</script>

<template>
  <div class="container mx-auto flex flex-col items-center pt-20 space-y-4">
    <h1 class="text-2xl text-center font-bold mb-4">TODO LIST</h1>
    <div class="flex items-center space-x-4">
      <div
        class="flex items-center px-4 py-2 rounded-md border-2 border-purple-400 overflow-hidden font-[sans-serif]"
      >
        <input
          v-model="searchNotes"
          type="text"
          placeholder="Search note..."
          class="w-[596px] outline-none bg-transparent text-purple-400 text-sm"
        />
        <fa class="border-purple-400 size-6" icon="search" />
      </div>
      <div class="block">
        <Select
          v-model="selectedFilter"
          :items="['All', 'Checked', 'Not Checked']"
        />
      </div>
    </div>

    <div class="mt-4 space-y-2 w-[600px]">
      <div
        v-if="filteredNotes.length === 0"
        class="text-center text-lg text-gray-500"
      >
        <h2>Create your tasks</h2>
      </div>
      <div v-else>
        <div
          class="flex items-center pb-2 border-b border-purple-400 mb-4"
          v-for="note in filteredNotes"
          :key="note.id"
        >
          <input
            v-model="note.isChecked"
            type="checkbox"
            :id="`note${note.id}`"
            class="mr-2"
          />
          <div class="check">
            <div v-if="note.isEditing">
              <input
                class="w-full border-b border-purple-400 outline-none"
                type="text"
                v-model="note.text"
                @blur="saveNote(note.id, note.text)"
                @keyup.enter="saveNote(note.id, note.text)"
              />
            </div>
            <div v-else>
              <label :for="`note${note.id}`" class="text-sm font-bold">
                {{ note.text }}
              </label>
            </div>
            <div class="space">
              <fa
                v-if="!note.isEditing"
                @click="editNote(note.id)"
                class="fa cursor-pointer"
                icon="pen"
              />
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
