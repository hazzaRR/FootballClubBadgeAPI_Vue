<template>
    <div class="mx-auto w-full h-full">
        <img v-if="badge" :src="`${BASE_URL}/api/badge/${teamName}`" :alt="`${teamName} club badge`" class="">

        <h2 class="text-lg">{{ teamName }}</h2>

    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue'
import { BASE_URL } from '../config';
import { getBadge } from '../composables/apiRequest';
const props = defineProps(['teamName'])


const badge = ref(null)

onMounted(async () => {
    badge.value = await getBadge(props.teamName);
})

</script>

<style lang="scss" scoped>

</style>