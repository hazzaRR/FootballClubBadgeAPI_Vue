<template>
    <Hero />
    <div class="mx-auto w-full">
        <div class="grid grid-cols-1 my-6">
            <h1 class="text-2xl font-mono font-bold w-full h-full mx-auto text-center">Supported Clubs</h1>
            <h3 class="text-lg font-bold w-full h-full mx-auto text-center text-gray-700">Hover over badge to see grayscale</h3>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-2 m-4">
            <Badge class="hover:bg-slate-200" v-for="(team, index) in teams" :key="index" :team-name="team" />
        </div>
    </div>
    <Footer />
</template>

<script setup>
import {ref, onMounted} from 'vue';
import Badge from '../components/Badge.vue';
import Hero from '../components/Hero.vue';
import Footer from '../components/Footer.vue';
import {getTeams} from '../composables/apiRequest.js';

const teams = ref([]);

onMounted(async () => {
    teams.value = await getTeams();

})


</script>

<style lang="scss" scoped>

</style>