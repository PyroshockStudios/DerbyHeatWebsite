<template>
    <header class="py-4">
        <div class="mx-auto px-6 flex justify-between items-center">
            <!-- Logo/Title -->
            <div class="text-3xl font-bold text-white flex items-center space-x-2" >
                <img src="/images/DHIcon.png" alt="Logo" class="w-20 h-20 object-cover" />
                <span class="text-4xl font-extrabold tracking-wider" style="margin-left: 10px;">DerbyHeat</span>
            </div>

            <!-- Links to navigate the site -->
            <div class="space-x-6" style="margin: 10px 10px 10px 10px;">
                <a class="text-white text-lg hover:text-gray-200 transition duration-300"
                  @click="gotoStorePage()"> Store Page </a>
            </div>
        </div>
    </header>
</template>

<script setup lang="js">
import { gotoStorePage } from '@/scripts/redirectors.js'
</script>

<style scoped>
header {
    background: linear-gradient(to right, #1e1e1e, #2c2c42, #1e1e1e);
}
</style>