<template>
  <!-- <vue-loading v-model:active="isLoading"></vue-loading> -->
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
    return {
      // isLoading: false,
    }
  },
  props: {
    RouterLink,
    RouterView,
  },
  components: {

  },
  mounted() {
    // this.isLoading = true;
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 1000)
  },
};
</script>

<style scoped></style>