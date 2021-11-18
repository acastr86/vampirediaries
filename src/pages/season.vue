<script setup>
    import { useRoute } from 'vue-router';

    import { useAPI } from '../composables/useAPI';

    const route = useRoute();

    const {id} = route.params;

    const { episodes, getEpisodes} = useAPI();

     getEpisodes(id);
    
</script>

<template>
    <div v-if="episodes"
    class="py-3 mx-auto text-center">
        <h3 class="text-xl font-semibold tracking-tight">
                   Season {{id}} 
        </h3>
    </div>
    <div v-else>
        Loading...
    </div>
    <div class="mt-8">
         <ul class="grid grid-cols-3 gap-12">
            <div class="p-4 bg-white rounded-lg shadow-2xl cursor-pointer hover:scale-105"
            v-for="episode in episodes" :key="episode.id"
            >
           
                <h3 class="text-xl font-semibold tracking-tight">
                   {{episode.title}} 
                </h3>
                <p>Directed By: {{episode.directedBy}}</p>
                <p>Written By: {{episode.writtenBy}}</p>
                <p>Air Date: {{episode.airDate}}</p>
                <p>US Viewers: {{episode.USviewers}} millions</p>
                
            </div>
        </ul>
    </div>
    
</template>