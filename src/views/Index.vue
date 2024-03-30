<template>
    <div class="text-3xl font-bold">
        homepage
    </div>

    <div class="flex">
        <h1 class="text-2xl font-bold w-full h-full mx-auto text-center my-6">Supported Clubs</h1>
    </div>

    <div class="grid grid-cols-4 gap-4">
        <Badge class="hover:bg-slate-200 p-4 w-100 h-100" v-for="(team, index) in teams" :key="index" :team-name="team" />
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import Badge from '../components/Badge.vue';
import {getTeams} from '../composables/apiRequest.js';

const teams = ref([]);

onMounted(async () => {
    teams.value = await getTeams();

})


</script>

<style lang="scss" scoped>

</style>