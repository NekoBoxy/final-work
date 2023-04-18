<template>
  <div ref="modal" class="modal fade" tabindex="-1" aria-labelledby="couponModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="couponModalLabel" class="modal-title">
            <span v-if="status === 'new'">新增優惠卷</span>
            <span v-else>編輯優惠卷</span>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body" style="text-align: left;">
          <div class="row">
            <div class="col">
              <div class="mb-3">
                <label for="title" class="form-label">標題</label>
                <span class="fw-light" style="color: #FF0000; font-size: 0.8rem;">*必填</span>
                <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="newCoupon.title">
              </div>
              <div class="mb-3">
                <label for="code" class="form-label">優惠碼</label>
                <span class="fw-light" style="color: #FF0000; font-size: 0.8rem;">*必填</span>
                <input id="code" type="text" class="form-control" placeholder="請輸入優惠碼" v-model="newCoupon.code">
              </div>
              <div class="mb-3">
                <label for="due_date" class="form-label">到期日</label>
                <span class="fw-light" style="color: #FF0000; font-size: 0.8rem;">*必填</span>
                <input id="due_date" type="date" class="form-control" placeholder="請輸入到期日" v-model="newCoupon.due_date"
                  :min="minDate()">
              </div>
              <div class="mb-3">
                <label for="percent" class="form-label">折扣百分比</label>
                <span class="fw-light" style="color: #FF0000; font-size: 0.8rem;">*必填；百分比範圍 0-100</span>
                <input id="percent" type="number" class="form-control" min="0" max="100" placeholder="請輸入折扣百分比"
                  v-model.number="newCoupon.percent">
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
        is_enabled: newValue.is_enabled === undefined ? 1 : newValue.is_enabled, // 後端只吃數字
        due_date: newValue.due_date === undefined ?
          moment().format("YYYY-MM-DD") :
          moment.unix(newValue.due_date).format("YYYY-MM-DD"),
      };
    }
  },
  methods: {
    minDate() {
      return moment(new Date(), 'YYYY-MM-DD').add(1, 'days').format("YYYY-MM-DD");
    },
    show() {
      this.modal.show();
    },
    hide() {
      this.modal.hide();
    },
    // 處理優惠卷送出
    async handleSubmit() {
      try {
        const percent = parseInt(this.newCoupon.percent, 10);
        if (percent < 0 || percent > 100) {
          alert("百分比格式錯誤");
          return;
        }
        const today = new Date();
        const due_date = new Date(this.newCoupon.due_date);
        if (today.getTime() - due_date.getTime() > 0) {
          alert("日期格式錯誤");
          return;
        }
        let method = "";
        let url = "";
        if (this.status === "new") { // 新增優惠卷
          method = "post";
          url = `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/coupon`;
        } else { // 編輯優惠卷
          method = "put";
          url = `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/coupon/${this.newCoupon.id}`;
        }
        await axios({
          method, url, data: {
            data: {
              ...this.newCoupon,
              due_date: moment(this.newCoupon.due_date).unix()
            }
          }
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

<style scoped></style>