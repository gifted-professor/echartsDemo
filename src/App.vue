<script setup lang="ts"></script>

<template>
    <div class="container">
        <router-view></router-view>
    </div>
</template>

<style scoped>
html,
body,
#app {
    height: 100%;
}
.container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background: url(./src/assets/main.jpg) no-repeat;
    background-size: cover;
    display: flex;
    overflow: hidden;
}
.container::before {
    display: block;
    content: '';
    width: 100%;
    background-image: radial-gradient(circle, rgba(255, 255, 255, 0.001), rgba(0, 0, 0, 0.5), rgb(0, 0, 0));
}
</style>

<style>
html,
body {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
</style>
