<template>
  <CNavbar></CNavbar>
  <!-- 結帳進度條 steps bar -->
  <div class="container">
    <div class="row">
      <div class="col">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="confirm-tab" ref="confirm-tab" data-bs-toggle="tab"
              data-bs-target="#confirm-tab-pane" type="button" role="tab" aria-controls="confirm-tab-pane"
              aria-selected="true">確認訂單</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" ref="profile-tab" data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane"
              aria-selected="false">收件資訊</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pay-tab" ref="pay-tab" data-bs-toggle="tab" data-bs-target="#pay-tab-pane"
              type="button" role="tab" aria-controls="pay-tab-pane" aria-selected="false">付款資訊</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="success-tab" ref="success-tab" data-bs-toggle="tab"
              data-bs-target="#success-tab-pane" type="button" role="tab" aria-controls="success-tab-pane"
              aria-selected="false">完成訂購</button>
          </li>
        </ul>
        <!-- 購物車內容 -->
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="confirm-tab-pane" role="tabpanel" aria-labelledby="confirm-tab"
            tabindex="0">
            <div class="row">
              <div class="col-12">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">資料序</th>
                      <th scope="col">商品圖片</th>
                      <th scope="col">商品名稱</th>
                      <th scope="col">原價</th>
                      <th scope="col">單價</th>
                      <th scope="col">數量/單位</th>
                      <th scope="col">金額小計</th>
                      <th scope="col">取消</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in carts" :key="item.id">
                      <th scope="row"> {{ index + 1 }} </th>
                      <td>
                        <img :src="item.product.imageUrl" class="img-fluid" style="object-fit: cover; height: 150px;"
                          alt="" srcset="">
                      </td>
                      <td>{{ item.product.title }}</td>
                      <td>{{ item.product.origin_price }}</td>
                      <td>{{ item.product.price }}</td>
                      <td style="width: 150px;">
                        <div class="input-group input-group-sm">
                          <div class="input-group mb-3">
                            <input min="1" type="number" class="form-control"
                              @blur="updateCart(item.id, item.product.id, item.qty)" v-model="item.qty">
                            <span class="input-group-text" id="basic-addon2">{{ item.product.unit
                            }}</span>
                          </div>
                        </div>
                      </td>
                      <td>{{ item.total }}</td>
                      <td>
                        <button type="button" class="btn btn-danger"
                          @click="deleteCart(item.id, item.product.id)">刪除</button>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td>總計</td>
                      <td>{{ this.total }}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div class="row">
              <div class="col">
                Title
              </div>

              <div class="col">

              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...
          </div>
          <div class="tab-pane fade" id="pay-tab-pane" role="tabpanel" aria-labelledby="pay-tab" tabindex="0">...
          </div>
          <div class="tab-pane fade" id="success-tab-pane" role="tabpanel" aria-labelledby="success-tab" tabindex="0">...
          </div>
        </div>
      </div>
    </div>
  </div>
  <CFooter></CFooter>
</template>

<script>
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';

import { Tab } from 'bootstrap';
import axios from 'axios';

export default {
  components: {
    CNavbar,
    CFooter,
  },
  data() {
    return {
      carts: null,
      total: 0,
      final_total: 0,
    }
  },
  methods: {
    async getCart() {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/cart`,
      });
      this.carts = response.data.data.carts;
      this.final_total = response.data.data.final_total;
      this.total = response.data.data.total;
      console.log("response:", response);
      console.log("carts:", this.carts);
      // console.log("total:", this.total);
      // console.log("final_total:", this.final_total);
      // console.log("已取得購物車清單");
    },
    async addCart(product_id, qty = 1) {
      await axios({
        method: 'post',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/cart`,
        data: {
          data: { product_id, qty }
        }
      });
    },
    async updateCart(cart_id, product_id, qty) {
      await axios({
        method: 'put',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/cart/${cart_id}`,
        data: {
          data: { product_id, qty }
        }
      });
      await this.getCart();
    },
    async deleteCart(cart_id, product_id) {
      await axios({
        method: 'delete',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/cart/${cart_id}`,
        data: {
          data: { id: product_id }
        }
      });
      await this.getCart();
    },
  },
  async mounted() {
    this.getCart();
    const tabTrigger = new Tab(this.$refs["confirm-tab"]);
    tabTrigger.show();
  },
};

</script>