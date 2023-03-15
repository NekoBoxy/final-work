<template>
  <CNavbar></CNavbar>
  <div class="container">
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
    <div class="row">
      <div class="col-sm-6">
        <img class="img-fluid" :src="product.imageUrl" alt="">
      </div>
      <div class="col-sm-6">
        <span class="badge bg-primary rounded-pill">{{ product.category }}</span>
        <p>商品描述：{{ product.description }}</p>
        <p>商品內容：{{ product.content }}</p>
        <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
        <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
        <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
        <div>
          <div class="input-group">
            <input type="number" class="form-control" min="1" v-model="qty">
            <button type="button" class="btn btn-primary" @click="handleAddCart">
              <!-- <i class="fas fa-spinner fa-pulse" v-if="loading"></i> -->
              加入購物車
            </button>
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
    }
  },
  methods: {
    async getProduct() {
      // console.log(this.$route.params.id);
      const { id } = this.$route.params;
      const res = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/product/${id}`,
      });
      // console.log(res);
      this.product = res.data.product;
      console.log(this.product);
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    // console.log(this.id);
    this.getProduct();
  },
};

</script>