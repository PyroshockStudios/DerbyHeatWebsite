<template>
  <div>
    <header2 />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import header2 from '../components/header.vue';
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
}

nav ul {
  list-style-type: none;
}

nav li {
  display: inline;
  margin-right: 10px;
}
</style>