<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import store from './data/store.js';

export default {
  components: {
    AppMain,
    AppHeader,
    AppFooter,
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

  <AppHeader />


  <AppMain />


  <AppFooter />


</template>

<style scoped></style>