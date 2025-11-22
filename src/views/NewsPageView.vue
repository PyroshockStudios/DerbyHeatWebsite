<template>
  <main>
    <Header />
  </main>
  <NewsNavigator :pid="pageId" />
  <NewsArticle :vhtml="htmlContent" />
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import NewsArticle from '@/components/NewsPage/NewsArticle.vue'
import NewsNavigator from '@/components/NewsPage/NewsNavigator.vue'
import { getNewsPageHTML } from '@/scripts/database.ts'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const htmlContent = ref('')
let pageId: number = 0

watchEffect(async () => {
  pageId = Number(route.params.pageId)
  htmlContent.value = await getNewsPageHTML(pageId)
})
</script>

<style scoped>
div {
  padding: 20px;
}
</style>
