<template>
    <div class="w-screen h-96 bg-[#011489] opacity-80 grid grid-cols-1 md:grid-cols-2 content-center py-10">

        <div class="flex justify-center items-center">
            <h1 class="text-6xl font-mono font-bold text-white">Quick Start</h1>
        </div>

        <div class="flex flex-col content-center md:content-start">
            <highlightjs class="m-2 w-full md:w-10/12" language='html' :code="code"/>
            <h2 class=" ml-2 text-xl text-white">Example</h2>
            <highlightjs class="m-2 w-full md:w-10/12" language='html' :code="exampleCall"/>

            <h2 class="ml-2 text-xl text-white">Result:</h2>
            <div class="flex justify-center m-2 items-center bg-white rounded-md w-1/3">
                <img :src="`${BASE_URL}/api/badge/Derby%20County?width=100&height=100&padding=true`" :alt="`Derby County club badge`" class="">
            </div>
        </div>
    </div>
</template>

<script setup>
import { BASE_URL } from '../config';
import 'highlight.js/lib/common';
import 'highlight.js/styles/tokyo-night-dark.css'
import hljsVuePlugin from "@highlightjs/vue-plugin";

const highlightjs = hljsVuePlugin.component;

const code = "<img src=\"https://eflBadges.com/:team?width=<int>&width<int>&padding=<boolean>&grayscale=<boolean>\">"
const exampleCall = "<img src=\"https://localhost:3000/api/badge/Derby%20County?width=100&height=100&padding=true\">"


</script>

<style scoped>
</style>