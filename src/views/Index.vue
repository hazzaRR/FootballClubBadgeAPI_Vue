<template>
    <div class="text-3xl font-bold">
        homepage
    </div>
    <Hero />
    <div class="mx-auto w-full">
        <div class="flex">
            <h1 class="text-2xl font-bold w-full h-full mx-auto text-center my-6">Supported Clubs</h1>
        </div>
        
        <div class="grid grid-cols-4 gap-2 m-4">
            <Badge class="hover:bg-slate-200" v-for="(team, index) in teams" :key="index" :team-name="team" />
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import Badge from '../components/Badge.vue';
import Hero from '../components/Hero.vue';
import {getTeams} from '../composables/apiRequest.js';

const teams = ref([]);

onMounted(async () => {
    teams.value = await getTeams();

})


</script>

<style lang="scss" scoped>

</style>