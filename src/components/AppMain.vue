<script>
import store from '../data/store.js';
import Jumbo from './Jumbo.vue';
import MoviePlaylist from './MoviePlaylist.vue';
import JumboComing from './JumboComing.vue';
import AppSubscribe from './AppSubscribe.vue';
import MovieCategories from './MovieCategories.vue';
import AppNewMovieCarousel from './AppNewMovieCarousel.vue';


export default {
    components: {
        MoviePlaylist,
        Jumbo,
        JumboComing,
        MovieCategories,
        AppSubscribe,
        AppNewMovieCarousel,

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

        <Jumbo />

        <AppNewMovieCarousel />

        <MoviePlaylist />

        <JumboComing />

        <MovieCategories />

        <AppSubscribe />

    </main>



</template>

<style scoped></style>
