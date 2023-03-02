<template>
  <table class="table align-middle">
    <thead>
      <tr>
        <th>產品圖片</th>
        <th>產品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" v-bind:key="product.id">
        <td style="width:200px">
          <!-- img 不好控，故用 div 控 -->
          <div style="height: 100px; background-size: cover; background-position: center"
            :style="{ 'background-image': `url(${product.imageUrl})` }">
          </div>
        </td>
        <td>{{ product.title }}</td>
        <td>
          <!-- 若沒有 product.price 就顯示下兩行; 若有就顯示 product.origin_price  -->
          <!-- 不用 v-else 是因為它只能用一次 -->
          <div v-if="!product.price">{{ product.origin_price }} 元</div>
          <del v-if="product.price">原價 {{ product.origin_price }} 元</del>
          <div v-if="product.price">現在只要 {{ product.price }} 元</div>
        </td>
        <td>
          <RouterLink :to="`/product/${product.id}`" class="btn btn-outline-secondary">點我看更多</RouterLink>
          <button v-on:click="addToCart(product.id)" type="button" class="btn btn-outline-secondary">加入購物車</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: {},
      data: {},
    };
  },
  components: {
  },
  methods: {
    // 取得遠端全部產品資料並存入 products:{}
    async GetProducts() {
      const response = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/products/all`
      });
      // console.log(response.data.products[0]);
      this.products = response.data.products;
    },
    // 加入購物車
    async addToCart(product_id, qty = 1) {
      await axios({
        method: 'post',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/cart`,
        data: {
          data: { product_id, qty },
        },
      });
      console.log("已加入購物車");
      // }).catch((error) => {
      //   console.log("error:", error);
      // });
    },
  },
  async mounted() {
    await this.GetProducts();
  },
};
</script>

<style scoped></style>
