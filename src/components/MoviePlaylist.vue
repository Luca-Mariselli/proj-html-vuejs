<script>
import store from '../data/store.js';



export default {
    components: {


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

    <div class="my-movie-playlist p-1">
        <h3 class="ms-2">Movie Playlist</h3>
        <div class="ms-2">Lorem Ipsum is simply dummy text of the printing and typesettin</div>
    </div>

    <div class="d-flex">
        <div class="col-7">
            thumbnail
        </div>
        <div class="col-3 d-flex flex-column">
            <div class="mb-3">
                <h4>New Movie</h4>
                <div>Plying 24</div>
            </div>
            <div v-for="film in store.films">{{ film.title }}</div>
        </div>
    </div>






</template>

<style scoped>
.my-movie-playlist {
    border-left: solid 2px #13BE13;
    border-bottom: solid 1px #182028;
    margin-bottom: 6rem;
}
</style>