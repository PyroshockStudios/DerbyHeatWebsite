<template>
    <div class="hero-container">
        <video autoplay loop muted playsinline class="hero-video">
            <source :src="'/videos/video1.mp4'" type="video/mp4" />
        </video>
        <div class="hero-overlay">
            <h1 class="title">Corrida Extrema</h1>
            <button class="play-button">Play Now For Free</button>
        </div>
    </div>
</template>

<style scoped>
.hero-container {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hero-overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: white;
}

.title {
    font-size: 3rem;
    font-weight: bold;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
}

.play-button {
    margin-top: 10px;
    padding: 15px 30px;
    font-size: 1.5rem;
    background-color: red;
    color: white;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}

.play-button:hover {
    background-color: darkred;
}
</style>