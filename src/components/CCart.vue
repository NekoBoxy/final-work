<script>
import { mapState } from "pinia";
import { useCartStore } from "../stores/cart";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useCartStore, ["cartNum"]),
  },
};
</script>

<template>
  <!-- 用 Badges 定位於角落 -->
  <button type="button" class="btn btn-outline-secondary position-relative">
    <img src="../assets/images/carticon.png" alt="" srcset="">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {{ cartNum }}
      <span class="visually-hidden">unread messages</span>
    </span>
  </button>
</template>

<style scoped></style>
