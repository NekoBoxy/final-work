<template>
  <div class="wrapper">
    <CNavbar />
    <!-- steps -->
    <div class="container container-steps d-flex justify-content-center">
      <div class="progress-container">
        <div id="progress" class="progress" :style="{ width: `${(currentStep - 1) * 33.3}%` }"></div>
        <div class="circle" :class="{ active: currentStep === step }" v-for="step in 4" :key="step">
          {{ step }}
        </div>
      </div>
    </div>
    <!-- tabs -->
    <div class="container">
      <div class="row">
        <div class="col">
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
              <div class="my-3 d-flex justify-content-center">
                <h5>確認訂單資訊</h5>
              </div>
              <div class="row">
                <div class="col-12">
                  <table class="table-main">
                    <thead>
                      <tr>
                        <!-- <th scope="col" class="table-pc">資料序</th> -->
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
                        <td class="table-pc">
                          <img :src="item.product.imageUrl" style="object-fit: cover; height: 150px; max-width: 150px;"
                            alt="listImg" srcset="">
                        </td>
                        <td>
                          <div class="table-mobile text-truncate" style="width: 100px;" :title="item.product.title">{{
                            item.product.title }}
                          </div>
                          <div class="table-pc text-truncate" style="width: 250px;" :title="item.product.title">{{
                            item.product.title }}
                          </div>
                        </td>
                        <td class="table-pc">{{ item.product.origin_price }}</td>
                        <td>{{ item.product.price }}</td>
                        <td>
                          <div class="d-flex d-lg-none mb-3" style="min-width: 110px;">
                            <input min="1" type="number" class="form-control" step="1"
                              @blur="updateCart(item.id, item.product.id, item.qty)" v-model.number="item.qty">
                          </div>
                          <div class="input-group mb-3 d-none d-lg-flex" style="max-width: 150px;">
                            <input min="1" type="number" class="form-control" step="1"
                              @blur="updateCart(item.id, item.product.id, item.qty)" v-model.number="item.qty">
                            <span class="input-group-text table-pc">
                              {{ item.product.unit }}
                            </span>
                          </div>
                        </td>
                        <td>{{ item.total }} 元</td>
                        <td>
                          <button type="button" class="btn btn-danger btn-sm"
                            @click="deleteCart(item.id, item.product.id)">刪除</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="row">
                <v-form v-on:submit="handleCouponSubmit" ref="couponForm" class="col">
                  <div class="row">
                    <label for="staticTotal" class="col-12 col-md-4 col-lg-3 col-form-label">訂單金額小計：</label>
                    <div class="col-12 col-md-8 col-lg-9">
                      <div class="mb-3">
                        <input type="text" readonly class="form-control-plaintext" id="staticTotal" :value="`${total} 元`">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <label for="code" class="col-12 col-md-4 col-lg-3 col-form-label">使用優惠碼：</label>
                    <div class="col-12 col-sm-6 col-md-3 col-lg-4 mb-3">
                      <v-field id="code" name="code" type="text" class="form-control" placeholder="請輸入優惠碼"></v-field>
                    </div>
                    <div class="col-12 col-sm-6 col-md-5 col-lg-5 mb-3">
                      <button type="submit" class="btn btn-primary">
                        套用優惠碼
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <label for="staticTotal" class="col-12 col-md-4 col-lg-3 col-form-label">您的優惠折扣：</label>
                    <div class="col-12 col-md-8 col-lg-9">
                      <div class="mb-3">
                        <input type="text" readonly class="form-control-plaintext" id="staticTotal"
                          :value="final_total !== total ? `${parseInt(100 * final_total / total, 10)} ％` : '無'">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <label for="staticTotal" class="col-12 col-md-4 col-lg-3 col-form-label">折扣後訂單總金額：</label>
                    <div class="col-12 col-md-8 col-lg-9">
                      <div class="mb-3">
                        <input type="text" readonly class="form-control-plaintext" id="staticTotal"
                          :value="`${final_total} 元`">
                      </div>
                    </div>
                  </div>
                  <div class="text-end">
                    <button type="button" class="btn btn-primary" @click="handleConfirmSubmit">下一步</button>
                  </div>
                </v-form>
              </div>
            </div>
            <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
              <div class="my-3 d-flex justify-content-center">
                <h5>填寫收件資訊</h5>
              </div>
              <div class="row">
                <div class="col-12 justify-content-center">
                  <v-form v-on:submit="handleProfileSubmit" ref="profileForm" class="col" v-slot="{ errors }">
                    <div class="mb-3">
                      <label for="name" class="form-label">收件人姓名</label>
                      <v-field id="name" name="name" type="text" class="form-control" placeholder="請輸入姓名"
                        :class="{ 'is-invalid': errors['name'] }" rules="required">
                      </v-field>
                      <error-message name="name" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="mobilePhone" class="form-label">收件人手機號碼</label>
                      <v-field id="mobilePhone" name="mobilePhone" type="tel" class="form-control" placeholder="請輸入手機號碼"
                        :class="{ 'is-invalid': errors['mobilePhone'] }" v-bind:rules="checkMobilePhone">
                      </v-field>
                      <error-message name="mobilePhone" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label">Email</label>
                      <v-field id="email" name="email" type="email" class="form-control" placeholder="請輸入 Email"
                        :class="{ 'is-invalid': errors['email'] }" rules="email|required">
                      </v-field>
                      <error-message name="email" class="invalid-feedback"></error-message>
                    </div>
                    <div class="mb-3">
                      <label for="address" class="form-label">收件人地址</label>
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
              <div class="row">
                <div class="col-12 justify-content-center">
                  <v-form v-on:submit="handlePaySubmit" ref="payForm" class="col" v-slot="{ errors }">
                    <div class="mb-3">
                      <label for="creditCard" class="form-label">信用卡號</label>
                      <v-field id="creditCard" name="creditCard" type="text" class="form-control"
                        :class="{ 'is-invalid': errors['creditCard'] }" placeholder="請輸入信用卡號"
                        :rules="{ required: true, regex: /^\d{4}-\d{4}-\d{4}-\d{4}$/ }"></v-field>
                      <error-message name="creditCard" class="invalid-feedback"></error-message>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <label for="firstName" class="form-label">持卡人姓名</label>
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
                        <label for="month" class="form-label">有效期限</label>
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
                      <label for="security" class="form-label">安全碼</label>
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
              <div class="d-flex justify-content-center">交易已完成，您可於三至五分鐘後至電子信箱收取訂單資訊郵件。<br />
                謝謝您的購買與支持，小幫手正快馬加鞭包裝與出貨中。<br />
                關於訂單若有任何需求，請洽0800-000-000，將由專人為您服務。
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
      currentStep: 1,
      step: "",
      carts: [],
      total: 0,
      final_total: 0,
      orderId: "",
    }
  },
  methods: {
    ...mapActions(useCartStore, ["updateNum"]),
    ...mapActions(useLoaderStore, ["setLoader"]),
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
        // 取絕對值、轉型成十進位數值
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
      }
    },
    async handleConfirmSubmit() {
      this.setLoader(true);
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
        this.setLoader(false);
        this.currentStep = 4;
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  },
  async mounted() {
    this.setLoader(true);
    await this.getCart();
    this.step = this.$route.query.step;
    if (this.step === "profile") {
      const tabTrigger = new Tab(this.$refs["profile-tab"]);
      tabTrigger.show();
      this.currentStep = 2;
    } else if (this.step === "pay") {
      const tabTrigger = new Tab(this.$refs["pay-tab"]);
      tabTrigger.show();
      this.orderId = this.$route.query.orderId;
      this.currentStep = 3;
    } else if (this.step === "success") {
      const tabTrigger = new Tab(this.$refs["success-tab"]);
      tabTrigger.show();
      this.currentStep = 4;
    } else {
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
</style>