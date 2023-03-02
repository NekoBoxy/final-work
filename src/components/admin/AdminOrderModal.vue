<script>
import { Modal } from "bootstrap";
import moment from "moment";

export default {
  props: {
    order: {
      type: Object,
      default() {
        return {
          products: {},
          user: {},
        }
      }
    },
    on_update: Function,
  },
  data() {
    return {
      modal: null,
      newOrder: {
        products: {},
        user: {},
      },
    };
  },
  watch: {
    order(newValue) {
      this.newOrder = { ...newValue };
    }
  },
  methods: {
    handlePaidChange(e) {
      this.newOrder.is_paid = e.target.checked;
    },
    handleSubmit() {
      this.$emit("on_update", this.newOrder);
      this.modal.hide();
    },
    show() {
      this.modal.show();
    },
    hide() {
      this.modal.hide();
    },
    getDate(date) {
      return moment(date * 1000).format("YYYY/MM/DD");
    },
  },
  async mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>

<template>
    <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
        <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content border-0">
                <div class="modal-header bg-dark text-white">
                    <h5 class="modal-title" id="exampleModalLabel">
                        <span>訂單細節</span>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="text-align: left;">
                    <div class="row">
                        <div class="col-sm-4">
                            <h4>用戶資料</h4>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">姓名</th>
                                        <td>{{ newOrder.user.name }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">信箱</th>
                                        <td>{{ newOrder.user.email }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">電話</th>
                                        <td>{{ newOrder.user.tel }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">地址</th>
                                        <td>{{ newOrder.user.address }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col-sm-8">
                            <h4>訂單細節</h4>
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">訂單編號</th>
                                        <td>{{ newOrder.id }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">下單時間</th>
                                        <td>{{ getDate(newOrder.create_at) }}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">付款時間</th>
                                        <td>
                                            <span v-if="newOrder.is_paid && newOrder.paid_date">{{
                                              getDate(newOrder.paid_date) }}</span>
                                            <span v-else>無紀錄</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">付款狀態</th>
                                        <td><span v-if="newOrder.is_paid">已付款</span>
                                            <span v-else>未付款</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">總金額</th>
                                        <td>{{ newOrder.total }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4>選購商品</h4>
                            <table class="table">
                                <tbody>
                                    <tr v-for="(product, key) in newOrder.products" :key="key">
                                        <th scope="row">{{ product.product.title }}</th>
                                        <td>{{ product.qty }} {{ product.product.unit }}</td>
                                        <td>{{ product.total }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="d-flex justify-content-end">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="is_paid"
                                        @change="handlePaidChange" :checked="newOrder.is_paid">
                                    <label class="form-check-label" for="is_paid">
                                        <span v-if="newOrder.is_paid">已付款</span>
                                        <span v-else>未付款</span>
                                    </label>
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
                        修改付款狀態
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>