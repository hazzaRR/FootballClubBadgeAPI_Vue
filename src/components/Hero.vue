<template>
    <div class="w-full h-auto bg-[#011489] opacity-80 grid grid-cols-1 md:grid-cols-2 content-center py-10">

        <div class="flex justify-center items-center">
            <h1 class="text-4xl md:text-6xl font-mono font-bold text-white">Quick Start</h1>
        </div>

        <div class="flex flex-col content-center md:content-start">
            <highlightjs class="m-2 w-11/12" language='html' :code="code"/>
            <h2 class=" ml-2 text-xl text-white">Example</h2>
            <highlightjs class="m-2 w-11/12" language='html' :code="exampleCallPng"/>
            <highlightjs class="m-2 w-11/12" language='html' :code="exampleCallJpeg"/>

            <h2 class="ml-2 text-xl text-white">Result:</h2>
            <div class="flex justify-center m-2 items-center bg-gray-200 rounded-md w-1/2 md:w-1/3">
                <img :src="`${BASE_URL}/api/badge/Derby%20County.png?width=100&height=100&padding=true`" :alt="`Derby County club badge`" class="">
                <p class="ml-4 text-lg font-semibold">PNG image</p>
            </div>
            <div class="flex justify-center m-2 items-center bg-gray-200 rounded-md w-1/2 md:w-1/3">
                <img :src="`${BASE_URL}/api/badge/Derby%20County.jpeg?width=100&height=100&padding=true`" :alt="`Derby County club badge`" class="">
                <p class="ml-4 text-lg font-semibold">JPEG image</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { BASE_URL } from '../config';

const code = `<img src=\"${BASE_URL}/:team.<png/jpeg>?width=<int>&width<int>&padding=<boolean>&grayscale=<boolean>\">`
const exampleCallPng = `<img src=\"${BASE_URL}/api/badge/Derby%20County.png?width=100&height=100&padding=true\">`
const exampleCallJpeg = `<img src=\"${BASE_URL}/api/badge/Derby%20County.jpeg?width=100&height=100&padding=true\">`


</script>

<style scoped>
</style>