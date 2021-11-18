<script setup>
    import { ref } from '@vue/reactivity';
import {useJokes} from '../composables/useJokes.js';
    
    const {jokes, search} = useJokes();
    
    const searchItem = ref("");
</script>

<template>
    <div>
        <input type="text" v-model="searchItem"
        @change="search(searchItem)"
        placeholder="Search a Joke" 
        class="w-full py-4 mt-16 text-xl text-center rounded-full" />
        <div class="grid grid-cols-2 gap-16 pt-16">
           <div v-for="(joke, index) in jokes" :key="index">
               <p>
                   {{joke}}
               </p>
           </div>
        </div>

    </div>
</template>