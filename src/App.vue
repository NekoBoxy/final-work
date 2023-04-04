<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  props: {
    RouterLink,
    RouterView,
  },
};
</script>