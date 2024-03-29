<template>
    <div class="text-3xl font-bold">
        homepage
    </div>

    <div class="grid grid-cols-5 gap-4">
        <Badge v-for="(team, index) in teams" :key="index" :team-name="team" />
    </div>
</template>

<script setup>
import {ref, onMounted} from 'vue';
import Badge from '../components/Badge.vue';
import {getTeams} from '../composables/apiRequest.js';

const teams = ref(["Derby County", "Notts Forest"]);

onMounted(async () => {
    teams.value = await getTeams();

})


</script>

<style lang="scss" scoped>

</style>