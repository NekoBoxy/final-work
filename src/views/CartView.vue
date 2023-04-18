<template>
  <div class="wrapper">
    <CNavbar />
    <!-- steps -->
    <div v-if="showStep">
      <div class="container container-steps d-flex justify-content-center">
        <div class="progress-container">
          <div id="progress" class="progress" :style="{ width: `${(currentStep - 1) * 33.3}%` }"></div>
          <div class="circle" :class="{ active: currentStep === step }" v-for="step in 4" :key="step">
            {{ step }}
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col">
          <!-- tabs -->
          <ul class="nav nav-tabs" id="myTab" role="tablist" style="display: none;">
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
          <div class="tab-content mb-3" id="myTabContent">
            <div class="tab-pane fade show active" id="confirm-tab-pane" role="tabpanel" aria-labelledby="confirm-tab"
              tabindex="0">
              <div v-if="carts.length > 0 && isCartLoaded">
                <div class="my-3 d-flex justify-content-center">
                  <h5>確認訂單資訊</h5>
                </div>
                <div class="row d-flex justify-content-center">
                  <div class="col-12 col-md-8">
                    <table class="table table-main">
                      <thead>
                        <tr>
                          <th scope="col" class="table-pc">商品圖片</th>
                          <th scope="col">
                            <span class="table-mobile">品名</span>
                            <span class="table-pc">商品名稱</span>
                          </th>
                          <th scope="col" class="table-pc">原價</th>
                          <th scope="col">單價</th>
                          <th scope="col">
                            <span class="table-mobile">數量</span>
                            <span class="table-pc">數量 / 單位</span>
                          </th>
                          <th scope="col">
                            <span class="table-mobile">金額</span>
                            <span class="table-pc">金額小計</span>
                          </th>
                          <th scope="col">取消</th>
                        </tr>
                      </thead>
                      <tbody class="align-items-center">
                        <tr v-for="item in carts" :key="item.id">
                          <td class="table-pc" style="width:200px">
                            <div style="height: 100px; background-size: cover; background-position: center"
                              :style="{ 'background-image': `url(${item.product.imageUrl})` }">
                            </div>
                          </td>
                          <td>
                            <div class="table-mobile text-truncate" style="width: 100px;" :title="item.product.title">{{
                              item.product.title }}
                            </div>
                            <div class="table-pc text-truncate" style="width: 250px;" :title="item.product.title">{{
                              item.product.title }}
                            </div>
                          </td>
                          <td class="table-pc">{{ new Intl.NumberFormat().format(item.product.origin_price) }}</td>
                          <td>{{ new Intl.NumberFormat().format(item.product.price) }}</td>
                          <td>
                            <div class="d-flex d-lg-none mb-3" style="max-width: 90px; min-width: 60px;">
                              <input min="1" type="number" class="form-control" step="1"
                                @blur="updateCart(item.id, item.product.id, item.qty)" v-model.number="item.qty">
                            </div>
                            <div class="input-group mb-3 d-none d-lg-flex" style="max-width: 150px; min-width: 110px;">
                              <input min="1" type="number" class="form-control" step="1"
                                @blur="updateCart(item.id, item.product.id, item.qty)" v-model.number="item.qty">
                              <span class="input-group-text table-pc">
                                {{ item.product.unit }}
                              </span>
                            </div>
                          </td>
                          <td>{{ new Intl.NumberFormat().format(item.total) }} 元</td>
                          <td>
                            <button type="button" class="btn btn-danger btn-sm"
                              @click="deleteCart(item.id, item.product.id)">刪除</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="row d-flex justify-content-center">
                  <div class="col-12 col-md-8">
                    <v-form v-on:submit="handleCouponSubmit" ref="couponForm">
                      <div class="row">
                        <div class="col-12">
                          <label for="staticTotal" class="col-form-label">訂單小計：</label>
                          <div class="d-inline-block px-2">
                            <input type="text" readonly class="form-control-plaintext" id="staticTotal"
                              :value="`${new Intl.NumberFormat().format(total)} 元`">
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="code" class="col-form-label">優惠碼：</label>
                          <div class="d-inline-block px-2" style="max-width: 230px; min-width: 150px;">
                            <v-field id="code" name="code" type="text" class="form-control"
                              placeholder="請輸入優惠碼"></v-field>
                          </div>
                          <button type="submit" class="btn btn-primary"
                            style="display: table-cell; vertical-align:bottom">
                            套用
                          </button>
                        </div>
                        <div class="col-12">
                          <label for="staticTotal" class="col-form-label">享有折扣：</label>
                          <div class="d-inline-block px-2">
                            <input type="text" readonly class="form-control-plaintext" id="staticTotal"
                              :value="final_total !== total ? `${parseInt(100 * final_total / total, 10)} ％` : '無'">
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="staticTotal" class="col-form-label">折扣後小計：</label>
                          <div class="d-inline-block px-2">
                            <input type="text" readonly class="form-control-plaintext" id="staticTotal"
                              :value="`${new Intl.NumberFormat().format(final_total)} 元`">
                          </div>
                        </div>
                        <div class="text-end">
                          <button type="button" class="btn btn-primary" @click="handleConfirmSubmit">下一步</button>
                        </div>
                      </div>
                    </v-form>
                  </div>
                </div>
              </div>
              <div class="container" v-else-if="carts.length === 0 && isCartLoaded">
                <div class="row">
                  <div class="col-12 d-flex justify-content-center mb-3 mt-3">
                    <h5>購物車內沒有東西，帶個花花草草回家吧 <i class="bi bi-emoji-kiss"></i></h5>
                  </div>
                  <div class="col-12 d-flex justify-content-center mb-4">
                    <RouterLink to="/products">
                      <button type="button" class="btn btn-primary">去逛逛吧</button>
                    </RouterLink>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
              <div class="my-3 d-flex justify-content-center">
                <h5>填寫收件資訊</h5>
              </div>
              <div class="row d-flex justify-content-center">
                <div class="col-12 col-md-8 justify-content-center">
                  <v-form v-on:submit="handleProfileSubmit" ref="profileForm" class="col" v-slot="{ errors }">
                    <div class="mb-3">
                      <label for="name" class="form-label">收件人姓名
                        <span class="fw-light" style="color: #FF0000; font-size: 0.8rem;">*必填</span>
                      </label>
                      <v-field id="name" name="name" type="text" class="form-control" placeholder="請輸入姓名"
                        :class="{ 'is-invalid': errors['name'] }" rules="required">
                      </v-field>
                      <error-message name="name" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="mobilePhone" class="form-label">收件人手機號碼
                        <span class="fw-light" style="color: #FF0000; font-size: 0.8rem;">*必填</span>
                      </label>
                      <v-field id="mobilePhone" name="mobilePhone" type="tel" class="form-control" placeholder="請輸入手機號碼"
                        :class="{ 'is-invalid': errors['mobilePhone'] }" v-bind:rules="checkMobilePhone">
                      </v-field>
                      <error-message name="mobilePhone" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email
                        <span class="fw-light" style="color: #FF0000; font-size: 0.8rem;">*必填</span>
                      </label>
                      <v-field id="email" name="email" type="email" class="form-control" placeholder="請輸入 Email"
                        :class="{ 'is-invalid': errors['email'] }" rules="email|required">
                      </v-field>
                      <error-message name="email" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="address" class="form-label">收件人地址
                        <span class="fw-light" style="color: #FF0000; font-size: 0.8rem;">*必填</span>
                      </label>
                      <v-field id="address" name="address" type="text" class="form-control" placeholder="請輸入地址"
                        :class="{ 'is-invalid': errors['address'] }" rules="required">
                      </v-field>
                      <error-message name="address" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="message" class="form-label">留言</label>
                      <v-field id="message" name="message" class="form-control" cols="30" rows="10" rules="required"
                        as="textarea"></v-field>
                    </div>
                    <div class="text-end">
                      <button type="submit" class="btn btn-primary">
                        送出訂單
                      </button>
                    </div>
                  </v-form>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pay-tab-pane" role="tabpanel" aria-labelledby="pay-tab" tabindex="0">
              <div class="my-3 d-flex justify-content-center">
                <h5>填寫信用卡資訊</h5>
              </div>
              <div class="row d-flex justify-content-center">
                <div class="col-12 col-md-8 justify-content-center">
                  <v-form v-on:submit="handlePaySubmit" ref="payForm" class="col" v-slot="{ errors }">
                    <div class="mb-3">
                      <label for="creditCard" class="form-label">信用卡號
                        <span class="fw-light" style="color: #FF0000; font-size: 0.8rem;">*必填</span>
                      </label>
                      <v-field id="creditCard" name="creditCard" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['creditCard'] }" placeholder="9999-9999-9999-9999"
                        :rules="{ required: true, regex: /^\d{4}-\d{4}-\d{4}-\d{4}$/ }"></v-field>
                      <error-message name="creditCard" class="invalid-feedback"></error-message>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label for="firstName" class="form-label">持卡人姓名
                          <span class="fw-light" style="color: #FF0000; font-size: 0.8rem;">*必填</span>
                        </label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <v-field id="firstName" name="firstName" type="text" class="form-control"
                          :class="{ 'is-invalid': errors['firstName'] }" placeholder="請輸入姓氏" rules="required"></v-field>
                        <error-message name="firstName" class="invalid-feedback"></error-message>
                      </div>
                      <div class="mb-3 col-md-6">
                        <v-field id="lastName" name="lastName" type="text" class="form-control"
                          :class="{ 'is-invalid': errors['lastName'] }" placeholder="請輸入名字" rules="required"></v-field>
                        <error-message name="lastName" class="invalid-feedback"></error-message>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label for="month" class="form-label">有效期限
                          <span class="fw-light" style="color: #FF0000; font-size: 0.8rem;">*必填</span>
                        </label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <v-field id="month" name="month" type="text" class="form-control"
                          :class="{ 'is-invalid': errors['month'] }" placeholder="請輸入月份" rules="required"></v-field>
                        <error-message name="month" class="invalid-feedback"></error-message>
                      </div>
                      <div class="mb-3 col-md-6">
                        <v-field id="year" name="year" type="text" class="form-control"
                          :class="{ 'is-invalid': errors['year'] }" placeholder="請輸入年份" rules="required"></v-field>
                        <error-message name="year" class="invalid-feedback"></error-message>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label for="security" class="form-label">安全碼
                        <span class="fw-light" style="color: #FF0000; font-size: 0.8rem;">*必填</span>
                      </label>
                      <v-field id="security" name="security" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['security'] }" placeholder="請輸入安全碼" rules="required"></v-field>
                      <error-message name="security" class="invalid-feedback"></error-message>
                    </div>
                    <div class="text-end">
                      <button type="submit" class="btn btn-primary">
                        付款
                      </button>
                    </div>
                  </v-form>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="success-tab-pane" role="tabpanel" aria-labelledby="success-tab" tabindex="0">
              <div class="my-3 d-flex justify-content-center">
                <h5>完成訂購</h5>
              </div>
              <div class="d-flex justify-content-center">
                <p>
                  交易已完成，<br />
                  謝謝您的購買與支持，小幫手正快馬加鞭包裝與出貨中。<br />
                  關於訂單若有任何需求或疑問，請洽 0800-000-000，將由專人為您服務。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-if="showLike">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col d-flex justify-content-center">
              <h5>你可能會喜歡……</h5>
            </div>
          </div>
          <div class="row justify-content-center mb-3">
            <div class="col-12 col-md-4 col-lg-4 col-xxl-4 g-4" style="display: flex;align-items: stretch;"
              v-for="product in recentProducts" :key="product.id">
              <div class="card" style="width: 100%; cursor: pointer;" @click="handleProductClick(product)">
                <img :src="product.imageUrl" class="card-img-top" alt="anotherImg">
                <div class="q-card-title">
                  <div class="row justify-content-between">
                    <div class="col-auto text-start">
                      <span>{{ product.title }}</span>
                    </div>
                    <div class="col-auto text-end">
                      <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12.6138 11.1865C12.6138 11.0319 12.5812 10.8895 12.5161 10.7593C12.4591 10.6209 12.3737 10.4948 12.2598 10.3809L2.5918 0.908203C2.37207 0.696615 2.10352 0.59082 1.78613 0.59082C1.58268 0.59082 1.39551 0.639648 1.22461 0.737305C1.05371 0.834961 0.919434 0.969238 0.821777 1.14014C0.724121 1.3029 0.675293 1.49007 0.675293 1.70166C0.675293 2.00277 0.781087 2.26725 0.992676 2.49512L9.87939 11.1865L0.992676 19.8779C0.781087 20.1058 0.675293 20.3703 0.675293 20.6714C0.675293 20.883 0.724121 21.0701 0.821777 21.2329C0.919434 21.4038 1.05371 21.5381 1.22461 21.6357C1.39551 21.7334 1.58268 21.7822 1.78613 21.7822C2.10352 21.7822 2.37207 21.6724 2.5918 21.4526L12.2598 11.9922C12.3737 11.8783 12.4591 11.7562 12.5161 11.626C12.5812 11.4876 12.6138 11.3411 12.6138 11.1865Z"
                          fill="#F8FBF9" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CFooter />
</template>

<script>
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';

import { Tab } from 'bootstrap';
import axios from 'axios';

import { mapActions } from "pinia";
import { useCartStore } from "../stores/cart";
import { useLoaderStore } from "../stores/loader";

export default {
  components: {
    CNavbar,
    CFooter,
  },
  data() {
    return {
      showStep: false,
      showLike: false,
      isCartLoaded: false,
      currentStep: 1,
      step: "",
      carts: [],
      total: 0,
      final_total: 0,
      orderId: "",
      recentProducts: [],
    }
  },
  methods: {
    ...mapActions(useCartStore, ["updateNum"]),
    ...mapActions(useLoaderStore, ["setLoader"]),
    async getProducts() {
      try {
        this.setLoader(true);
        const response = await axios({
          method: 'get',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/products`
        });
        const products = response.data.products.filter(product => {
          return product.id !== this.id;
        });
        this.recentProducts = [
          products[0],
          products[1],
          products[2],
        ];
        this.setLoader(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    async handleProductClick(product) {
      await this.$router.push(`/product/${product.id}`);
      await this.$router.go();
    },
    async getCart() {
      try {
        this.setLoader(true);
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/cart`,
        });
        this.carts = response.data.data.carts;
        // 無條件進位 math.ceil()
        this.final_total = Math.ceil(response.data.data.final_total);
        this.total = response.data.data.total;
        this.setLoader(false);
      } catch (error) {
        const errorMessage = error.response.data.message;
        alert(errorMessage);
      }
    },
    async updateCart(cart_id, product_id, qty) {
      try {
        // 取絕對值、轉型成數值(十進位)
        this.qty = Math.abs(parseInt(qty, 10));
        // 若輸入數值為零，強制轉換為一
        this.qty = this.qty === 0 ? 1 : this.qty;
        this.carts = this.carts.map(item => {
          if (item.id === cart_id) {
            item.qty = this.qty;
          }
          return item;
        });
        this.setLoader(true);
        await axios({
          method: 'put',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/cart/${cart_id}`,
          data: {
            data: { product_id, qty: this.qty }
          }
        });
        await this.getCart();
        this.setLoader(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    async deleteCart(cart_id, product_id) {
      try {
        this.setLoader(true);
        await axios({
          method: 'delete',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/cart/${cart_id}`,
          data: {
            data: { id: product_id }
          }
        });
        await this.getCart();
        if (this.carts.length === 0) {
          this.showLike = true;
          await this.getProducts();
        }
        await this.updateNum();
        this.setLoader(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    checkMobilePhone(value) {
      const mobilePhone = /^09[0-9]{8}$/;
      return mobilePhone.test(value) ? true : '需要正確的電話號碼';
    },
    async handleCouponSubmit(values) {
      try {
        this.setLoader(true);
        await axios({
          method: 'post',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/coupon`,
          data: {
            data: {
              code: values.code
            }
          }
        });
        this.$refs.couponForm.resetForm();
        await this.getCart();
        this.setLoader(false);
      } catch (error) {
        alert(error.response.data.message);
        this.$refs.couponForm.resetForm();
        this.setLoader(false);
      }
    },
    async handleConfirmSubmit() {
      this.setLoader(true);
      this.showLike = false;
      const tabTrigger = new Tab(this.$refs["profile-tab"]);
      tabTrigger.show();
      this.$router.push({
        path: "/cart", query: {
          step: "profile",
        }
      });
      document.documentElement.scrollTop = 0; // 捲到頂端
      this.setLoader(false);
      this.currentStep = 2;
    },
    async handleProfileSubmit(values) {
      try {
        this.setLoader(true);
        const res = await axios({
          method: 'post',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/order`,
          data: {
            data: {
              user: {
                email: values.email,
                name: values.name,
                tel: values.mobilePhone,
                address: values.address,
              },
              message: values.message,
            }
          }
        });
        this.orderId = res.data.orderId;
        this.$refs.profileForm.resetForm();
        await this.getCart();
        await this.updateNum(); // 購物車歸零
        const tabTrigger = new Tab(this.$refs["pay-tab"]);
        tabTrigger.show();
        this.$router.push({
          path: "/cart", query: {
            step: "pay",
            orderId: this.orderId
          }
        });
        document.documentElement.scrollTop = 0;
        this.setLoader(false);
        this.currentStep = 3;
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    async handlePaySubmit() {
      try {
        this.setLoader(true);
        await axios({
          method: 'post',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/pay/${this.orderId}`,
        });
        this.$refs.payForm.resetForm();
        const tabTrigger = new Tab(this.$refs["success-tab"]);
        tabTrigger.show();
        this.$router.push({
          path: "/cart", query: {
            step: "success"
          }
        });
        document.documentElement.scrollTop = 0;
        this.showLike = true;
        await this.getProducts();
        this.setLoader(false);
        this.currentStep = 4;
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  },
  async mounted() {
    this.setLoader(true);
    this.step = this.$route.query.step;
    if (this.step === "profile") {
      this.showStep = true;
      const tabTrigger = new Tab(this.$refs["profile-tab"]);
      tabTrigger.show();
      this.currentStep = 2;
    } else if (this.step === "pay") {
      this.showStep = true;
      const tabTrigger = new Tab(this.$refs["pay-tab"]);
      tabTrigger.show();
      this.orderId = this.$route.query.orderId;
      this.currentStep = 3;
    } else if (this.step === "success") {
      this.showStep = true;
      this.showLike = true;
      const tabTrigger = new Tab(this.$refs["success-tab"]);
      tabTrigger.show();
      await this.getProducts();
      this.currentStep = 4;
    } else {
      await this.getCart();
      this.isCartLoaded = true;
      if (this.carts.length === 0) {
        this.showLike = true;
        await this.getProducts();
      } else {
        this.showStep = true;
      }
      const tabTrigger = new Tab(this.$refs["confirm-tab"]);
      tabTrigger.show();
      this.currentStep = 1;
    }
    this.setLoader(false);
  },
};
</script>

<style scoped>
.wrapper {
  min-height: calc(100vh - 110px);
}

.table-main {
  width: 100%;
  white-space: nowrap;
}

.table-pc {
  display: none;
}

@media screen and (min-width: 993px) {
  .table-pc {
    display: table-cell;
  }
}

.table-mobile {
  display: table-cell;
}

/* 寬度小於 993 ,table-mobile=display: none; */
@media screen and (min-width: 993px) {
  .table-mobile {
    display: none;
  }
}

/* steps */
.container-steps {
  font-size: 1rem;
  font-weight: bold;
}

.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
}

.progress-container::before {
  content: "";
  background-color: #85A896;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: -1;
  transform: translateY(-50%);
}

div.progress {
  background-color: #326A4D;
  position: absolute;
  top: 50%;
  left: 0;
  height: 3px;
  z-index: -1;
  transform: translateY(-50%);
  transition: width 0.5s linear;
}

div.circle {
  color: white;
  background-color: #326A4D;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.5s linear;
}

div.circle.active {
  border: 3px solid #326A4D;
  background-color: #326A4D;
}

/* 在 active 後的 div 套用顏色 */
div.circle.active~div {
  background-color: #85A896;
}

.q-card-title {
  background-color: #457B5FDE;
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
}

.card img {
  width: 100%;
  max-height: 288px;
  object-fit: cover;
  height: 100%;
}
</style>