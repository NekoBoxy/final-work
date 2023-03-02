import { defineStore } from "pinia";

export const useLoaderStore = defineStore("loader", {
  state: () => ({
    visible: false,
  }),
  actions: {
    setLoader(visible) {
      this.visible = visible;
    },
  },
});
