<script>
import store from '../data/store.js';
import Jumbo from './Jumbo.vue';
import MoviePlaylist from './MoviePlaylist.vue';
import JumboComing from './JumboComing.vue';
import AppSubscribe from './AppSubscribe.vue';


export default {
    components: {
        MoviePlaylist,
        Jumbo,
        JumboComing,
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

        <AppSubscribe />

    </main>



</template>

<style scoped></style>
