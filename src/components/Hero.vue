<template>
    <div class="w-screen h-96 bg-[#011489] opacity-80 grid grid-cols-2 content-center">

        <div class="flex justify-center items-center">
            <h1 class="text-3xl font-bold text-white">Quick Start</h1>
        </div>

        <div class="flex flex-col">
            <highlightjs class="m-2 w-10/12" language='html' :code="code"/>
            <highlightjs class="m-2 w-10/12" language='html' :code="exampleCall"/>
        </div>
    </div>
</template>

<script setup>
import 'highlight.js/lib/common';
import 'highlight.js/styles/tokyo-night-dark.css'
import hljsVuePlugin from "@highlightjs/vue-plugin";

const highlightjs = hljsVuePlugin.component;

const code = "<img src=\"https://eflBadges.com/:team?width=<int>&width<int>&padding=<boolean>&grayscale=<boolean>\">"
const exampleCall = "<img src=\"https://localhost:3000/api/badge/Derby%20County?width=100&height=100&padding=true\">"


</script>

<style scoped>
</style>