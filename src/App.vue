<script>
// import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
// import AppFooter from './components/AppFooter.vue';
import store from './data/store.js';

export default {
  components: {
    AppMain,
  },
  data() {
    return {
      store,

    }
  },
  methods: {

  },
  mounted() {
    console.log(this.store.films[0].title)
  }
}
</script>

<template>



  <AppMain />




</template>

<style scoped></style>