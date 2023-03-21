<template>
  <div ref="modal" class="modal fade" tabindex="-1" aria-labelledby="delProductModalLabel" aria-hidden="true">
      <div class="modal-dialog">
          <div class="modal-content border-0">
              <div class="modal-header bg-danger text-white">
                  <h5 id="delProductModalLabel" class="modal-title">
                      <span>刪除產品</span>
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                  是否刪除
                  <strong class="text-danger">{{ product.title }}</strong> 商品(刪除後將無法恢復)。
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                      取消
                  </button>
                  <button type="button" class="btn btn-danger" @click="handleRemove()">
                      確認刪除
                  </button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from "axios";
import { Modal } from "bootstrap";

export default {
  props: {
    product: Object,
    on_finish: Function,
  },
  data() {
    return {

    };
  },
  methods: {
    show() {
      this.modal.show();
    },
    hide() {
      this.modal.hide();
    },
    // 處理產品刪除
    async handleRemove() {
      await axios({
        method: "delete",
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/product/${this.product.id}`,
      }).catch((error) => {
        console.log("error", error);
      });
      console.log("已刪除");
      this.hide();
      this.$emit("on_finish");
    },
  },
  async mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>

<style scoped></style>