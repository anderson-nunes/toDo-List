import { ref, computed, Ref } from "vue";

interface Note {
  id: number;
  text: string;
  isEditing: boolean;
  isChecked: boolean;
}

export function useNotes() {
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
    notes.value = notes.value.filter((el) => el.id !== id);
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

  return {
    notes,
    searchNotes,
    selectedFilter,
    addNote,
    deleteNote,
    editNote,
    saveNote,
    filteredNotes,
  };
}
