<template>
  <div ref="modal" class="modal fade" tabindex="-1" aria-labelledby="couponModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="couponModalLabel" class="modal-title">
            <span v-if="status === 'new'">新增產品</span>
            <span v-else>編輯產品</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" style="text-align: left;">
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="newCoupon.title">
              </div>
              <div class="mb-3">
                <label for="code" class="form-label">優惠碼</label>
                <input id="code" type="text" class="form-control" placeholder="請輸入優惠碼" v-model="newCoupon.code">
              </div>
              <div class="mb-3">
                <label for="due_date" class="form-label">到期日</label>
                <input id="due_date" type="date" class="form-control" placeholder="請輸入到期日" v-model="newCoupon.due_date">
              </div>
              <div class="mb-3">
                <label for="percent" class="form-label">折扣百分比</label>
                <input id="percent" type="number" class="form-control" min="0" max="100" placeholder="請輸入折扣百分比"
                  v-model="newCoupon.percent">
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1" :false-value="0"
                    v-model="newCoupon.is_enabled">
                  <label class="form-check-label" for="is_enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="handleSubmit">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { Modal } from "bootstrap";

export default {
  props: {
    status: String,
    coupon: {
      type: Object,
      default() {
        return {};
      }
    },
    on_finish: Function,
  },
  data() {
    return {
      newCoupon: {},
      modal: null,
    };
  },
  watch: {
    coupon(newValue) {
      this.newCoupon = {
        ...newValue,
        due_date: moment.unix(newValue.due_date).format("YYYY-MM-DD"),
      };
    }
  },
  methods: {
    show() {
      this.modal.show();
    },
    hide() {
      this.modal.hide();
    },
    // 處理產品送出
    async handleSubmit() {
      this.newCoupon.due_date = moment(this.newCoupon.due_date).unix();
      try {
        let method = "";
        let url = "";
        if (this.status === "new") { // 新增產品
          method = "post";
          url = `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/coupon`;
        } else { // 編輯產品
          method = "put";
          url = `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/coupon/${this.newCoupon.id}`;
        }
        await axios({ method, url, data: { data: this.newCoupon } }).catch((error) => {
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

<style scoped></style>