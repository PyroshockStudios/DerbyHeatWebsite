<template>
  <section class="news-section">
    <h2 class="text-3xl font-bold mb-8" style="margin-bottom: 30px;">News</h2>

    <div class="news-wrapper">
      <button @click="scrollLeft" class="scroll-button left">❮</button>

      <div
        ref="newsContainer"
        class="news-container"
        @mousedown="onMouseDown"
      >
        <div class="news-track">
          <NewsCard
            v-for="item in newsItems.slice().reverse()"
            :key="item.id"
            :title="item.title"
            :author="item.author"
            :category="item.category"
            :date="item.date"
            :image="item.image"
            :text="item.text"
            class="news-card"
          />
        </div>
      </div>

      <button @click="scrollRight" class="scroll-button right">❯</button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import NewsCard from '@/components/NewsCard.vue'

// --- Create a ref to store the news data ---
// We also define a 'type' for our news items for TypeScript
interface NewsItem {
  id: number;
  title: string;
  author: string;
  category: string;
  date: string;
  image: string;
  text: string;
}
const newsItems = ref<NewsItem[]>([]);

// --- Fetch the data when the component mounts ---
onMounted(async () => {
  try {
    // This fetches the file from your 'public' folder
    const response = await fetch('news.json'); 
    
    // To fetch from a remote URL, just change the string:
    // const response = await fetch('https://api.my-game.com/news');

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    
    // Parse the JSON data and put it in our ref
    newsItems.value = await response.json();

  } catch (error) {
    console.error('Error fetching news:', error);
    // You could set a default/error state here
  }
});


const newsContainer = ref<HTMLDivElement | null>(null)

// --- Simple Button Scrolling ---

const scrollLeft = () => {
  if (newsContainer.value) {
    newsContainer.value.scrollBy({ left: -350, behavior: 'smooth' })
  }
}

const scrollRight = () => {
  if (newsContainer.value) {
    newsContainer.value.scrollBy({ left: 350, behavior: 'smooth' })
  }
}

// Grab-to-Drag Logic ---

const isDown = ref(false)
const startX = ref(0)
const scrollLeftStart = ref(0)

const onMouseDown = (e: MouseEvent) => {
  if (!newsContainer.value) return
  isDown.value = true
  newsContainer.value.classList.add('grabbing')
  startX.value = e.pageX - newsContainer.value.offsetLeft
  scrollLeftStart.value = newsContainer.value.scrollLeft
}

const onMouseLeave = () => {
  if (!newsContainer.value) return
  isDown.value = false
  newsContainer.value.classList.remove('grabbing')
}

const onMouseUp = () => {
  if (!newsContainer.value) return
  isDown.value = false
  newsContainer.value.classList.remove('grabbing')
}

const onMouseMove = (e: MouseEvent) => {
  if (!isDown.value || !newsContainer.value) return
  e.preventDefault() // Stop text selection
  const x = e.pageX - newsContainer.value.offsetLeft
  const walk = x - startX.value
  newsContainer.value.scrollLeft = scrollLeftStart.value - walk
}

// We need to add/remove the 'global' listeners (up, move, leave)
// to the window to ensure dragging works even if the
// mouse leaves the container.

onMounted(() => {
  // We attach these to the container itself in the template:
  // @mousedown="onMouseDown"

  // We attach these to the window for better control
  window.addEventListener('mouseup', onMouseUp)
  window.addEventListener('mouseleave', onMouseLeave)
  window.addEventListener('mousemove', onMouseMove)
})

onUnmounted(() => {
  // Clean up listeners to prevent memory leaks
  window.removeEventListener('mouseup', onMouseUp)
  window.removeEventListener('mouseleave', onMouseLeave)
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<style scoped>
.news-section {
  text-align: center;
  padding: 50px 0;
  background: #111;
  color: white;
  position: relative;
  width: 100%;
  margin-top: 100px;
  
  overflow-x: hidden;
}

.news-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 10px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}

.news-container {
  overflow-x: auto;
  scroll-behavior: smooth;
  flex-grow: 1;
  flex-shrink: 1;
  min-width: 0;
  scrollbar-width: none;
  
  padding: 20px 20px 20px 20px;
}

.news-container.grabbing {
  cursor: grabbing;
  cursor: -webkit-grabbing;
  scroll-behavior: auto; /* Turn off smooth scroll during drag */
  user-select: none; /* Prevent text selection */
}

.news-container::-webkit-scrollbar {
  display: none;
}

.news-track {
  display: flex;
  gap: 20px;
  width: max-content;
  /* Prevent child elements (cards) from interfering with mouse events */
  pointer-events: none;
}

/* We need to re-enable pointer events on the cards */
.news-card {
  pointer-events: auto;
}

.scroll-button {
  background: #1e1e1e;
  color: white;
  border: none;
  padding: 15px;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.3s;
  z-index: 10;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-button:hover {
  background: #2c2c42;
}
</style>