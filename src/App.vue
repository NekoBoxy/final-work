<template>
  <div class="container-fluid">
    <RouterView />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  data() {
    return {

    }
  },
  props: {
    RouterLink,
    RouterView,
  },
  components: {

  },
  mounted() {

  },
};
</script>

<style scoped></style>