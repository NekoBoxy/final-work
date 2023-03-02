<script>
import axios from "axios";
import { Modal } from "bootstrap";

export default {
  props: {
    order: Object,
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
    // 處理訂單刪除
    async handleRemove() {
      try {
        await axios({
          method: 'delete',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/order/${this.order.id}`,
        }).catch((error) => {
          throw error.response.data.message;
        });
        this.modal.hide();
        // 完成
        this.$emit('on_finish');
      } catch (message) {
        alert(message);
      }
    },
  },
  async mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>

<template>
    <div ref="modal" class="modal fade" tabindex="-1" aria-labelledby="delProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content border-0">
                <div class="modal-header bg-danger text-white">
                    <h5 id="delProductModalLabel" class="modal-title">
                        <span>刪除訂單</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    是否刪除
                    <strong class="text-danger">{{ order.id }}</strong> 訂單(刪除後將無法恢復)。
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                        取消
                    </button>
                    <button type="button" class="btn btn-danger" @click="handleRemove">
                        確認刪除
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>