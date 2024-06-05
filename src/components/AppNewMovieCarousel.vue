<script>
import store from '../data/store.js'
import AppSingleCardMovie from './AppSingleCardMovie.vue';

export default {
    name: "AppNewMovieCarousel",

    components: {
        AppSingleCardMovie,
    },

    data() {
        return {
            store,
            activeImg: 0,
            myPrevImg: 8,
            myNextImg: 1,
        }
    },

    methods: {
        // getActiveImg() {
        //     this.activeImg = index
        //     console.log(this.activeImg)
        // },

        nextImg() {
            if (this.activeImg == 8) {
                this.activeImg = 0
                console.log(store.films)
            } else {
                this.activeImg++
                console.log(store.films)
            }

            if (this.activeImg == 0) {
                this.myPrevImg = 8
            } else {
                this.myPrevImg = this.activeImg - 1
            }
        },

        prevImg() {
            if (this.activeImg == 0) {
                this.activeImg = 8
            } else {
                this.activeImg--
            }

            if (this.activeImg == 8) {
                this.myNextImg = 0
            } else {
                this.myNextImg = this.activeImg + 1
            }
        },

        takePrevImg() {

        }
    },

    mounted() {

    }
};

</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-between">
                <div class="my-movie-pl p-1">
                    <h3 class="ms-2">New Movie</h3>
                    <div class="ms-2">Lorem Ipsum is simply dummy text of the printing and typesettin</div>
                </div>
                <div>
                    <button @click="prevImg()">dietro</button>
                    <button @click="nextImg()">avanti</button>
                </div>
            </div>
            <div class="col-12">
                <div class="carousel-container d-flex flex-wrap flex-column">
                    <!-- <template v-for="movie, i in store.films">
                        <AppSingleCardMovie v-show="this.myPrevImg == i"
                            style="height: 600px; width: calc(100% / 3); border-radius: 20px;" :card="movie" />
                        <AppSingleCardMovie v-show="this.activeImg == i"
                            style="height: 600px; width: calc(100% / 3); border-radius: 20px;" :card="movie" />
                        <AppSingleCardMovie v-show="this.myNextImg == i"
                            style="height: 600px; width: calc(100% / 3); border-radius: 20px;" :card="movie" />
                    </template> -->
                    <AppSingleCardMovie v-for="movie, i in store.films" :card="movie" v-if="activeImg == i" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    color: white;
}

.carousel-container {
    width: 100%;
    height: 660px;
    border: 1px solid white;
    overflow: hidden;
}
</style>