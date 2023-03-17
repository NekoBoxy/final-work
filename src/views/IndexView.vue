<template>
  <RouterView />
</template>

<script>
import { mapActions } from "pinia";
import { useCartStore } from "../stores/cart";

export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    ...mapActions(useCartStore, ["updateNum"]),
    async getCart() {
      this.updateNum();
    },
  },
  async mounted() {
    await this.getCart();
  }
};

</script>

<style scoped></style>
