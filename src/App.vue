<template>
  <RouterView />
  <CLoader />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import CLoader from "./components/CLoader.vue";


export default {
  props: {
    RouterLink,
    RouterView,
  },
  components: {
    CLoader,
  },
};
</script>