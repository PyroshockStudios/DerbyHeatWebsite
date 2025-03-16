<template>
    <div class="news-card">
        <img :src="image" :alt="title" class="news-image" />
        <div class="news-content">
            <p class="news-date news-content-item">{{ date }}</p>
            <p class="news-title news-content-item">{{ title }}</p>
            <p class="news-read-more news-content-item">Read More <span class="news-read-more-arrow">→</span></p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    image: String,
    date: String,
    author: String,
    title: String
});
</script>

<style scoped>
.news-card {
    position: relative;
    display: flex;
    width: 350px;
    height: 400px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.news-image {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.news-content {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(22, 22, 22, 1) 30%, rgba(22, 22, 22, 0.0) 100%);
}

.news-content-item {
    text-align: left;
    padding-left: 25px;
    padding-top: 5px;
}

.news-date {
    color: orange;
}

.news-title {
    font-size: xx-large;
    font-weight: bold;
}

.news-read-more {
    font-size: larger;
    font-weight: bold;
    padding-bottom: 25px;
    cursor: pointer;
}

.news-read-more-arrow {
    display: inline-block;
    transition: transform 0.3s ease;
}

.news-read-more:hover .news-read-more-arrow {
    transform: translateX(10px);
}
</style>