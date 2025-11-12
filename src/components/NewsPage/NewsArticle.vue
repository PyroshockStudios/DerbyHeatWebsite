<template>
    <article class="news-article-body">
    <section v-if="vhtml" v-html="vhtml"></section>
    <section v-else>
      <div class="container animate-pulse">
      
        <div class="space-y-4 pl-5 mb-12">
          <div class="h-5 bg-gray-800 rounded-md w-full"></div>
          <div class="h-5 bg-gray-800 rounded-md w-5/6"></div>
          <div class="h-5 bg-gray-800 rounded-md w-full"></div>
          <div class="h-5 bg-gray-800 rounded-md w-3/4"></div>
        </div>

        <div class="w-full h-72 bg-gray-800 rounded-none my-8"></div>

        <div class="h-8 bg-gray-800 rounded-md w-1/2 mb-4 mt-12"></div>

        <div class="border-l-4 border-gray-800 pl-5 my-8">
          <div class="space-y-3">
            <div class="h-5 bg-gray-800 rounded-md w-full"></div>
            <div class="h-5 bg-gray-800 rounded-md w-full"></div>
            <div class="h-5 bg-gray-800 rounded-md w-1/3"></div>
          </div>
        </div>

        <div class="h-5 bg-gray-800 rounded-md w-full mb-4"></div>
        <div class="h-5 bg-gray-800 rounded-md w-3/4 mb-6"></div>
        <div class="h-5 bg-gray-800 rounded-md w-5/6 mb-8"></div>
        
      
      </div>
    </section>
  </article>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    vhtml : String,
});

</script>

<style>
@import '@/assets/css/news-page.css';
</style>