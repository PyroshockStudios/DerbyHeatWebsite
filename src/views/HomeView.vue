<script setup>
import Header from '@/components/Header.vue'
import Banner from '@/components/Home/Banner.vue'
import NewsSection from '@/components/Home/NewsSection.vue'
</script>

<template>
  <main>
    <Header />
    <Banner />
    <NewsSection />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>