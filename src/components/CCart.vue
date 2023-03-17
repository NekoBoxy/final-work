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
  <button type="button" class="btn btn-outline-secondary position-relative"><svg xmlns="http://www.w3.org/2000/svg"
      width="23" height="23" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
      <path
        d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
    </svg>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {{ cartNum }}
      <span class="visually-hidden">unread messages</span>
    </span>
  </button>
</template>

<style scoped></style>
