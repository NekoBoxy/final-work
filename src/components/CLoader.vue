<template>
  <teleport to="body">
    <div v-if="visible" style="
      background: rgba(0, 0, 0, 0.3);
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    ">
      <div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </teleport>
</template>

<script>
import { mapState } from "pinia";
import { useLoaderStore } from "../stores/loader";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useLoaderStore, ["visible"]),
  },
};
</script>



<style scoped></style>
