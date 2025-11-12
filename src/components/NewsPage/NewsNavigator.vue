<template>
  <!-- Navigation wrapper -->
  <div class="flex justify-between items-center w-full">
    
    <!-- Previous Button -->
    <button
      @click="gotoNewsPage(pid - 1)"
      :disabled="!news_page_less_exists"
      class="
        flex items-center gap-3 rounded-md 
        bg-gray-800 py-3 px-6 
        text-white uppercase font-bold tracking-wider 
        transition-colors duration-200 
        hover:bg-white hover:text-black 
        disabled:opacity-40 disabled:cursor-not-allowed 
        disabled:hover:bg-gray-800 disabled:hover:text-white
      "
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
      <span>Previous</span>
    </button>

    <!-- Next Button -->
    <button
      @click="gotoNewsPage(pid + 1)"
      :disabled="!news_page_more_exists"
      class="
        flex items-center gap-3 rounded-md 
        bg-gray-800 py-3 px-6 
        text-white uppercase font-bold tracking-wider 
        transition-colors duration-200 
        hover:bg-white hover:text-black
        disabled:opacity-40 disabled:cursor-not-allowed 
        disabled:hover:bg-gray-800 disabled:hover:text-white
      "
    >
      <span>Next</span>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  </div>
</template>

<script setup>
import { defineProps, ref, watchEffect } from 'vue'; 
import { doesNewsPageExist } from '@/scripts/database';
import { gotoNewsPage } from '@/scripts/navigation';

const news_page_less_exists = ref(false);
const news_page_more_exists = ref(false);

const props = defineProps({
    // The 'pid' prop is the CURRENT page ID
    pid: Number,
});

watchEffect(async () => {
  if (!props.pid) {
    news_page_less_exists.value = false;
    news_page_more_exists.value = false;
    return;
  }

  news_page_less_exists.value = await doesNewsPageExist(props.pid - 1);
  news_page_more_exists.value = await doesNewsPageExist(props.pid + 1);
});
</script>

<style scoped>
button {
  outline: none;
}

button:focus-visible {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.5);
}
</style>