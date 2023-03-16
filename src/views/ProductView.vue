<template>
  <CNavbar></CNavbar>
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
    <div class="row">
      <div class="col-6 col-sm-6 gx-5 d-flex justify-content-center">
        <img class="img-fluid" :src="product.imageUrl" style="object-fit: cover;" alt="">
      </div>
      <div class="col-6 col-sm-6 gx-5 ">
        <div class="row">
          <div class="col-12">
            <h3>{{ product.title }}</h3>
          </div>
          <div class="col-12 pb-1">
            <span class="badge bg-primary rounded-pill">{{ product.category }}</span>
          </div>
          <div class="col-12 pb-1">
            商品描述：{{ product.description }}
          </div>
          <div class="col-12 pb-1">
            商品內容：{{ product.content }}
          </div>
          <div class="col-12 pb-1">
            <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
            <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
          </div>
          <div class="col-12 pb-1">
            <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
          </div>
          <div class="col-12 pb-1">
            <div class="input-group">
              <select class="form-select" id="selectNum" v-model="qty" required>
                <option selected>請選擇數量</option>
                <option value="1">1</option>
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
  </div>

  <CFooter></CFooter>
</template>

<script>
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';

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
      qty: 0,
    }
  },
  methods: {
    async getProduct() {
      const { id } = this.$route.params;
      const res = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/product/${id}`,
      });
      this.product = res.data.product;
      console.log(this.product);
    },
    async handleAddCart() {
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
      console.log("已加入購物車");
    },

  },
  mounted() {
    this.id = this.$route.params.id;
    this.getProduct();
  },
};

</script>