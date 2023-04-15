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
        </div>
        <!-- 上方大標題 -->
        <h5 class="col-12 text-center">確認訂單資料</h5>
        <!-- 左區 -->
        <div class="col-12 col-xl-6">
          <div class="row">
            <div class="col">
              <div class="tab-content mb-3" id="myTabContent">
                <div class="tab-pane fade show active" id="confirm-tab-pane" role="tabpanel" aria-labelledby="confirm-tab"
                  tabindex="0">
                  <div v-if="carts.length > 0 && isCartLoaded">
                    <!-- 左側標題 -->
                    <h5 class="text-center">訂單明細</h5>
                    <!-- 左側表格表頭 -->
                    <div class="row">
                      <div class="col">
                        <table class="table table-main table-under-lg">
                          <thead>
                            <tr>
                              <th scope="col" class="col-auto">
                                <span>圖片</span>
                              </th>
                              <th scope="col" class="col-auto">
                                <span>品名</span>
                              </th>
                              <th scope="col" class="col-auto">
                                <span class="d-inline-block">數量</span>
                              </th>
                              <th scope="col" class="col-auto">
                                <span>小計</span>
                              </th>
                              <th scope="col">
                              </th>
                            </tr>
                          </thead>
                          <tbody class="align-items-center">
                            <tr v-for="item in carts" :key="item.id">
                              <td style="width:100px">
                                <div style="height: 100px; background-size: cover; background-position: center"
                                  :style="{ 'background-image': `url(${item.product.imageUrl})` }">
                                </div>
                              </td>
                              <td>
                                <div class="table-mobile text-truncate" style="width: 100px;" :title="item.product.title">
                                  {{ item.product.title }}
                                </div>
                                <div class="table-pc text-truncate" style="width: 250px;" :title="item.product.title">
                                  {{ item.product.title }}
                                </div>
                              </td>
                              <td>
                                <div class="d-flex d-lg-none mb-3" style="min-width: 110px;">
                                  <input min="1" type="number" class="form-control" step="1"
                                    @blur="updateCart(item.id, item.product.id, item.qty)" v-model.number="item.qty">
                                </div>
                                <div class="input-group mb-3 d-none d-lg-flex" style="max-width: 150px;">
                                  <input min="1" type="number" class="form-control" step="1"
                                    @blur="updateCart(item.id, item.product.id, item.qty)" v-model.number="item.qty">
                                </div>
                              </td>
                              <td>{{ item.total }} 元</td>
                              <td>
                                <button type="button" class="btn btn-danger btn-sm"
                                  @click="deleteCart(item.id, item.product.id)">X</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
              </div>
            </div>
          </div>
        </div>
        <!-- 右區 -->
        <div class="col-xl-6 col-md-12">
          <!-- 右側標題 -->
          <h5 class="text-center">訂單金額</h5>
          <div class="row">
            <div class="col-12">
              <v-form v-on:submit="handleCouponSubmit" ref="couponForm">
                <div class="row">
                  <div class="col-auto">
                    <label for="staticTotal" class="col-form-label">訂單小計：</label>
                    <div class="mb-3 d-inline-block px-2">
                      <input type="text" readonly class="form-control-plaintext" id="staticTotal" :value="`${total} 元`">
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <label for="code" class="col-form-label d-inline-block">優惠碼：</label>
                  <div class="d-inline-block">
                    <v-field id="code" name="code" type="text" class="form-control" placeholder="請輸入優惠碼"></v-field>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    套用
                  </button>
                </div>
                <div class="col-auto">
                  <label for="staticTotal" class="col-form-label">享折扣：</label>
                  <div class="d-inline-block">
                    <input type="text" readonly class="form-control-plaintext" id="staticTotal"
                      :value="final_total !== total ? `${parseInt(100 * final_total / total, 10)} ％` : '無'">
                  </div>
                </div>
                <div class="col-auto">
                  <label for="staticTotal" class="col-form-label">折扣後小計：</label>
                  <div class="d-inline-block">
                    <input type="text" readonly class="form-control-plaintext" id="staticTotal"
                      :value="`${final_total} 元`">
                  </div>
                </div>
                <div class="text-end">
                  <button type="button" class="btn btn-primary" @click="handleConfirmSubmit">下一步</button>
                </div>
              </v-form>
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

@media screen and (min-width: 1280px) {
  .table-pc {
    display: table-cell;
  }
}

.table-mobile {
  display: table-cell;
}

@media screen and (min-width: 1280px) {
  .table-mobile {
    display: none;
  }

  /* .table-under-lg {
    width: 60%;
  } */
}

/* steps start*/
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

/* steps end*/

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