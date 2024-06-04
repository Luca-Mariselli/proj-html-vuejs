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
        getImage(percorso) {
            return new URL(`../assets/img/${percorso}`, import.meta.url)
        }
    },
    mounted() {
    }
}
</script>

<template>

    <div class="my-movie-pl p-1">
        <h3 class="ms-2">Movie Playlist</h3>
        <div class="ms-2">Lorem Ipsum is simply dummy text of the printing and typesettin</div>
    </div>

    <div class="d-flex">
        <div class="my-col-pl-left">
            thumbnail
        </div>
        <div class="my-col-pl-right d-flex flex-column">
            <div class="p-3 mb-1 pl-bg">
                <h4>New Movie</h4>
                <div>Plying 24</div>
            </div>
            <div class="pl-bg p-3 my-container-pl d-flex flex-column overflow-y-auto">
                <div class="mb-4 d-flex" v-for="film in store.films">
                    <img class="my-width-pl" :src="getImage(film.img_sq)" alt="">
                    <div class="ms-3">
                        <div class="fw-bold fs-4">{{ film.title }}</div>
                        <div class="fw-semibold fs-6">{{ film.views }} Views</div>
                        <div>{{ film.release }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>






</template>

<style scoped>
.my-movie-pl {
    border-left: solid 2px #13BE13;
    border-bottom: solid 1px #182028;
    margin-bottom: 6rem;
}

.my-col-pl-left {
    width: 760px;
    max-height: 570px;
}

.my-col-pl-right {
    width: 380px;
    max-height: 570px;
}

.pl-bg {
    background-color: #182028;
}

.my-container-pl {}

.my-width-pl {
    width: 30%;
}
</style>