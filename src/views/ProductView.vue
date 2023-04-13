<template>
  <div class="wrapper">
    <CNavbar />
    <div class="container">
      <!-- 麵包屑 -->
      <div class="row">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <RouterLink to="/">首頁</RouterLink>
              </li>
              <li class="breadcrumb-item">
                <RouterLink to="/products">產品一覽</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">商品細節</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- 產品內容 -->
      <div class="row pb-5">
        <div class="col-12 col-lg-6 gx-5 d-flex justify-content-center">
          <img class="img-fluid" :src="product.imageUrl" style="object-fit: cover;" alt="product image">
        </div>
        <div class="col-12 col-lg-6 gx-5">
          <div class="row">
            <div class="col-12">
              <h3>{{ product.title }}</h3>
            </div>
            <div class="col-12 pb-1">
              <span class="badge bg-primary rounded-pill">{{ product.category }}</span>
            </div>
            <div class="col-12 pb-1">
              商品描述：
              <div class="mb-2">
                {{ product.description }}
              </div>
            </div>
            <div class="col-12 pb-1">
              商品內容：
              <div>{{ product.content }}</div>
            </div>
            <div class="col-12 pb-1">
              <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
              <del class="h6" v-if="product.price"> {{ product.origin_price }} 元</del>
            </div>
            <div class="col-12 pb-1">
              <div class="h4" v-if="product.price">售價 {{ product.price }} 元</div>
            </div>
            <div class="col-12 pb-1">
              <div class="input-group">
                <select class="form-select" id="selectNum" v-model="qty" required>
                  <option value="1" selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <button type="button" class="btn btn-primary" @click="handleAddCart">
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div>
            <h5>你可能也喜歡 ...</h5>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mb-3">
        <div class="col-12 col-md-6 col-lg-4 col-xxl-5 g-4" style="display: flex;align-items: stretch;"
          v-for="product in recentProducts" :key="product.id">
          <div class="card" style="width: 100%; cursor: pointer;" @click="handleProductClick(product)">
            <img :src="product.imageUrl" class="card-img-top" alt="anotherImg">
            <div class="q-card-title">
              <div class="row justify-content-between">
                <div class="col text-start">
                  <span>{{ product.title }}</span>
                </div>
                <div class="col text-end">
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
  <CFooter />
</template>

<script>
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';
import { mapActions } from "pinia";
import { useLoaderStore } from "../stores/loader";

import axios from 'axios';

export default {
  components: {
    CNavbar,
    CFooter,
  },
  data() {
    return {
      id: "",
      product: {},
      recentProducts: [],
      qty: 1,
    }
  },
  methods: {
    ...mapActions(useLoaderStore, ["setLoader"]),
    async handleProductClick(product) {
      await this.$router.push(`/product/${product.id}`);
      await this.$router.go();
    },
    async getProduct() {
      try {
        const { id } = this.$route.params;
        const res = await axios({
          method: 'get',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/product/${id}`,
        });
        this.product = res.data.product;
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    async getProducts() {
      try {
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
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    async handleAddCart() {
      try {
        this.setLoader(true);
        await axios({
          method: 'post',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/cart`,
          data: {
            data: {
              product_id: this.product.id,
              qty: parseInt(this.qty, 10),
            },
          },
        });
        this.qty = 1;
        this.setLoader(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  },
  async mounted() {
    this.setLoader(true);
    this.id = this.$route.params.id;
    await this.getProduct();
    await this.getProducts();
    this.setLoader(false);
  },
};
</script>

<style scoped>
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

.wrapper {
  min-height: calc(100vh - 110px);
}
</style>