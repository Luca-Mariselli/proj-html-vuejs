<script>
import store from '../data/store.js';
import MoviePlaylist from './MoviePlaylist.vue';


export default {
    components: {
        MoviePlaylist,

    },
    data() {
        return {
            store,
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<template>



    <main>
        <div class="container mt-3">
            <MoviePlaylist />
        </div>
    </main>



</template>

<style scoped></style>
