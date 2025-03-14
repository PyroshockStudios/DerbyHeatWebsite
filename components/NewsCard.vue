<template>
    <div class="news-card">
        <img :src="image" :alt="title" class="news-image" />
        <div class="news-content">
            <p class="news-date">{{ date }}</p>
            <h3 class="news-title">{{ title }}</h3>
            <p class="news-text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        date: String,
        title: String,
        text: String
    }
}
</script>

<style scoped>
.news-card {
    background: linear-gradient(135deg, #ff0000, #880000);
    color: white;
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    max-width: 350px;
    box-shadow: 0 10px 20px rgba(255, 0, 0, 0.5);
}

.news-card:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(255, 0, 0, 0.7);
}

.news-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.news-content {
    padding: 15px;
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
</style>