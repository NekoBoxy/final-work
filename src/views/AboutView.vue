<template>
  <div class="wrapper">
    <CNavbar />
    <br /><br /><br />
  </div>
  <CFooter />
</template>

<script>
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';

export default {
  data() {
    return {
      currentStep: 3,
    }
  },
  components: {
    CNavbar,
    CFooter,
  },
  methods: {

  },
};

</script>

<style scoped>
.wrapper {
  min-height: calc(100vh - 110px);
}
</style>