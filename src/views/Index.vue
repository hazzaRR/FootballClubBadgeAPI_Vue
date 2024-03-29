<template>
    <div class="text-3xl font-bold">
        homepage
    </div>

    <div class="grid grid-cols-5 gap-4">
        <Badge v-for="(team, index) in teams" :key="index" :team-name="team" :club-badge="clubBadge" />
    </div>
</template>

<script setup>
import {ref} from 'vue';
import Badge from '../components/Badge.vue';

const teams = ref(["Derby County", "Notts Forest"])
const clubBadge = ref({
    src: null,
    alt: null
})

</script>

<style lang="scss" scoped>

</style>