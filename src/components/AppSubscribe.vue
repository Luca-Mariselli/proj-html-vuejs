<script>
import store from '../data/store.js'

export default {
    name: "AppSubscribe",

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
};

</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12 d-flex justify-content-center">
                <div class="mx-5">
                    <input type="text" placeholder="First Name">
                </div>
                <div class="mx-5">
                    <input type="text" placeholder="Last Name">
                </div>
                <div class="mx-5">
                    <input type="text" placeholder="Email Address">
                </div>
            </div>
            <div class="col-12 d-flex justify-content-center">
                <button>Subscribe</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
* {
    color: white;
}

.container {
    width: 100%;
    background-color: #13be13;
    padding: 5rem 0;
    border-radius: 40px;
    margin-bottom: 6rem;
    margin-top: 3rem;
}

input {
    background: none;
    border: 1px solid white;
    padding: 0.8rem 2.5rem;
    border-radius: 25px;
    margin-bottom: 5rem;
    outline: none;
}

button {
    background: black;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    box-shadow: none;
    border-style: solid;
    font-weight: 600;
}

::placeholder {
    color: white;
}
</style>