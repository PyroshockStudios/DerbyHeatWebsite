<template>
    <div class="news-card" @click="gotoNewsPage($.vnode.key)">
        <img :src="image" :alt="title" class="news-image" />
        <div class="news-content">
            <div>
              <p class="news-date">{{ date }} · {{ author }}</p>
              <h3 class="news-title">{{category}} · {{ title }}</h3>
              <p class="news-text">{{ text }}</p>
            </div>

            <p class="news-read-more">Read More <span class="news-read-more-arrow">→</span></p>
        </div>
    </div>
</template>

<script setup>
import { gotoNewsPage } from '@/scripts/navigation';
import { defineProps } from 'vue';

defineProps({
    title: String,
    author: String,
    category: String,
    date: String,
    image: String,
    text: String,
});
</script>

<style scoped>
.news-card {
    background: linear-gradient(135deg, #1e1e1e, #2c2c42);
    color: white;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    min-width: 100px;
    width: 350px;
    max-height: 100vw;
    max-width: 50vw;
    box-shadow: 0 10px 20px #2c2c42;
}

.news-card:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px #2c2c42;
}

.news-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    pointer-events: none;
}

.news-content {
    padding: 15px;

    display: flex;
    flex-direction: column;
    flex-grow: 1; 
    
    /* This ensures the date/title/text are grouped at the top
      and the "Read More" is pushed to the bottom.
    */
    justify-content: space-between;
}

.news-date {
    font-size: 0.9rem;
    opacity: 0.8;
}

.news-title {
    font-size: 1.5rem;
    margin: 5px 0;
}

.news-text {
    font-size: 1rem;
    opacity: 0.9;
}

.news-read-more {
    font-size: larger;
    font-weight: bold;
    cursor: pointer;
    margin-top: 10px; 
}

.news-read-more-arrow {
    display: inline-block;
    transition: transform 0.3s ease;
    
}

.news-read-more:hover .news-read-more-arrow {
    transform: translateX(10px);
}
</style>