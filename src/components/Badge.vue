<template>
    <div>

        <img :src="clubBadge.src" :alt="clubBadge.alt">

        <h2>{{ teamName }}</h2>

    </div>
</template>

<script setup>

import {ref} from 'vue';


const clubBadge = ref({
    src: null,
    alt: null
})

const teamName = ref(null);

</script>

<style lang="scss" scoped>

</style>