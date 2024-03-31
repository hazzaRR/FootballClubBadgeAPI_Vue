<template>
    <div>
        <div class="w-full h-96 bg-[#011489] opacity-80 grid grid-cols-1 md:grid-cols-2 content-center py-10">

            <div class="flex flex-col justify-start md:content-start ml-6">
                <h1 class="text-2xl font-mono font-bold text-white">Parameters</h1>

                <p class="text-white m-2 ml-0">The optional parameters to customise the badge returned as listed below:
                </p>
                <ul class="list-disc ml-4">
                    <li class="text-white"><span class="font-bold">width</span>: int (default=100)</li>
                    <li class="text-white"><span class="font-bold">height</span>: int (default=100)</li>
                    <li class="text-white"><span class="font-bold">padding</span>: boolean (default=false)</li>
                    <li class="text-white"><span class="font-bold">grayscale</span>: boolean (default=false)</li>
                </ul>
            </div>

            <div class="flex flex-col content-center md:content-start">
                <h1 class="text-2xl font-mono font-bold text-white">Sizing</h1>

                <p class="text-white m-2 ml-0">
                    The API allows you to request the badges in any size with the query parameters however please note that 
                    the larger the image request the quality of the image deteriorates. The recommended size are:
                </p>
                <ul class="list-disc ml-4">
                    <li class="text-white"><span class="font-bold">64x64</span>: 64px width and 64px height badge</li>
                    <li class="text-white"><span class="font-bold">100x100</span>: 100px width and 100px height badge</li>
                    <li class="text-white"><span class="font-bold">150x150</span>: 150px width and 150px height badge</li>
                    <li class="text-white"><span class="font-bold">250x250</span>: 250px width and 250px height badge</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>