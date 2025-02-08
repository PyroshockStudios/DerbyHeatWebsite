<template>
    <header class="bg-gradient-to-r from-[#e6e6e6] via-[#ff5500] to-[#ff0000] py-4 shadow-lg">
        <div class="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
            <!-- Logo/Title -->
            <div class="text-3xl font-bold text-white flex items-center space-x-2">
                <img src="" alt="Logo" class="w-10 h-10 object-cover" />
                <span class="text-4xl font-extrabold tracking-wider">DerbyHeat</span>
            </div>

            <!-- Links to navigate the site -->
            <div class="space-x-6">
                <router-link to="/login" class="text-white text-lg hover:text-gray-200 transition duration-300">
                    Login
                </router-link>
                <router-link to="/register" class="text-white text-lg hover:text-gray-200 transition duration-300">
                    Register
                </router-link>
            </div>
        </div>
    </header>
</template>

<script setup>
</script>

<style scoped>
header {
    background: linear-gradient(to right, #e6e6e6, #ff5500, #ff0000);
}
</style>