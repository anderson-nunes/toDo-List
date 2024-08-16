<script setup lang="ts"></script>

<template>
  <div class="container mx-auto flex flex-col items-center pt-20 space-y-4">
    <h1 class="text-2xl text-center font-bold mb-4">TODO LIST</h1>
    <div class="flex items-center space-x-4">
      <div
        class="flex items-center px-4 py-2 rounded-md border-2 border-purple-400 overflow-hidden font-[sans-serif]"
      >
        <input
          type="email"
          placeholder="Search note..."
          class="w-[596px] outline-none bg-transparent text-purple-400 text-sm"
        />
        <fa class="border-purple-400 size-6" icon="search" />
      </div>
      <div class="block">
        <select
          id="countries"
          class="w-[100px] h-12 border-2 border-purple-400 bg-white outline-none text-base rounded-lg py-2.5 px-4"
        >
          <option selected>All</option>
          <option value="US">United States</option>
          <option value="CA">Canada</option>
          <option value="FR">France</option>
          <option value="DE">Germany</option>
        </select>
      </div>
    </div>

    <div class="mt-4 space-y-2 w-[600px]">
      <div class="flex items-center pb-2 border-b border-purple-400">
        <input type="checkbox" id="note1" class="mr-2" />
        <div class="check">
          <label for="note1" class="text-sm font-bold">Note #1</label>
          <div class="space">
            <fa class="fa" icon="pen" />
            <fa icon="trash-can" />
          </div>
        </div>
      </div>
      <div class="flex items-center pb-2 border-b border-purple-400">
        <input type="checkbox" id="note2" class="mr-2" />
        <div class="check">
          <label for="note1" class="text-sm font-bold">Note #2</label>
          <div class="space">
            <fa class="fa" icon="pen" />
            <fa icon="trash-can" />
          </div>
        </div>
      </div>
      <div class="flex items-center pb-2 border-b border-purple-400">
        <input type="checkbox" id="note3" class="mr-2" />
        <div class="check">
          <label for="note1" class="text-sm font-bold">Note #3</label>
          <div class="space">
            <fa class="fa" icon="pen" />
            <fa icon="trash-can" />
          </div>
        </div>
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
</style>
