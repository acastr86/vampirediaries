<script setup>
    import { ref } from '@vue/reactivity';
import {useAPI} from '../composables/useAPI';
    
    const {seasons} = useAPI();
</script>

<template>
    <div class="mt-16">
        <ul class="grid grid-cols-3 gap-12">
            <router-link class="p-4 bg-white rounded-lg shadow-2xl cursor-pointer hover:scale-105"
            v-for="season in seasons" :key="season.id"
            :to="`season${season.id}`">
            <div>
                <h3 class="text-xl font-semibold tracking-tight">
                   Season {{season.id}} 
                </h3>
            </div>
                
            </router-link>
        </ul>
    </div>
</template>