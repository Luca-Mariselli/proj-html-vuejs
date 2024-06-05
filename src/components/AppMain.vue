<script>
import store from '../data/store.js';
import Jumbo from './Jumbo.vue';
import MoviePlaylist from './MoviePlaylist.vue';
import JumboComing from './JumboComing.vue';
import AppSubscribe from './AppSubscribe.vue';
import MovieCategories from './MovieCategories.vue';


export default {
    components: {
        MoviePlaylist,
        Jumbo,
        JumboComing,
        MovieCategories,
        AppSubscribe,

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

        <MoviePlaylist />

        <JumboComing />

        <MovieCategories />

        <AppSubscribe />

    </main>



</template>

<style scoped></style>
