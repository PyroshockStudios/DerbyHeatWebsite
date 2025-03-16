<template>
    <section class="news-section">
        <h2>News</h2>
        <div class="news-wrapper">
            <button @click="scrollLeft" class="scroll-button left">❮</button>
            <div ref="newsContainer" class="news-container">
                <div class="news-track">
                    <NewsCard image="/images/muscle.webp" date="14 Março 2025 / News / By Tyrese" title="New Car Buggy"
                        text="Buggy car is finally arrived" class="news-card" />
                    <NewsCard image="/images/muscle.webp" date="14 Março 2025 / News / By Tyrese" title="New Car Muscle"
                        text="Muscle car is finally arrived with skins" class="news-card" />
                    <NewsCard image="/images/muscle.webp" date="14 Março 2025 / News / By Tyrese" title="Weapons"
                        text="Example Example Example" class="news-card" />
                    <NewsCard image="/images/muscle.webp" date="14 Março 2025 / News / By Tyrese" title="New Car Buggy"
                        text="Buggy car is finally arrived" class="news-card" />
                    <NewsCard image="/images/muscle.webp" date="14 Março 2025 / News / By Tyrese" title="New Car Muscle"
                        text="Muscle car is finally arrived with skins" class="news-card" />
                    <NewsCard image="/images/muscle.webp" date="14 Março 2025 / News / By Tyrese" title="Weapons"
                        text="Example Example Example" class="news-card" />
                </div>
            </div>
            <button @click="scrollRight" class="scroll-button right">❯</button>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import NewsCard from '@/components/NewsCardFloat.vue';
import SlideShow from '@/assets/js/api_slideshow.js';
import grab from '@/assets/js/api_grab.js';


const newsContainer = ref(null);

//const scrollLeft = () => {
//    newsContainer.value.scrollBy({ left: -350, behavior: 'smooth' });
//};
//
//const scrollRight = () => {
//    newsContainer.value.scrollBy({ left: 350, behavior: 'smooth' });
//};

onMounted(() => {
    var slideShow = new SlideShow('news-container', 'news-track', 'news-card');
    slideShow.setArrowLeft('.left');
    slideShow.setArrowRight('.right');
    grab(slideShow)
})

</script>

<style scoped>
.news-section {
    text-align: center;
    padding: 50px;
    background: #111;
    color: white;
    position: relative;
    width: 100%;
    margin-top: 100px;
}

.news-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 10px;
}

.news-container {
    overflow-x: auto;
    scroll-behavior: smooth;
    width: 80%;
    max-width: 80%;
    scrollbar-width: none;
}

.news-container::-webkit-scrollbar {
    display: none;
}

.news-track {
    display: flex;
    gap: 20px;
    width: max-content;
}

.scroll-button {
    background: red;
    color: white;
    border: none;
    padding: 15px;
    font-size: 2rem;
    cursor: pointer;
    transition: 0.3s;
}

.scroll-button.left {
    left: 0;
}

.scroll-button.right {
    right: 0;
}

.scroll-button:hover {
    background: darkred;
}
</style>