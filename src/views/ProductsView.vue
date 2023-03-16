<template>
  <CNavbar></CNavbar>
  <!-- 麵包屑 breadcrumb -->
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
            <li class="breadcrumb-item active" aria-current="page">{{ category || "全部" }}</li>
          </ol>
        </nav>
      </div>
    </div>
    <!-- 左側選單 -->
    <div class="row">
      <div class="col-2 d-flex flex-column">
        <input type="radio" class="btn-check" name="options-outlined" id="outlined1" autocomplete="off" checked>
        <label class="btn btn-outline-primary mb-2" for="outlined1" @click="handleCategory('')">全部</label>
        <input type="radio" class="btn-check" name="options-outlined" id="outlined2" autocomplete="off">
        <label class="btn btn-outline-primary mb-2" for="outlined2" @click="handleCategory('盆栽')">盆栽</label>
        <input type="radio" class="btn-check" name="options-outlined" id="outlined3" autocomplete="off">
        <label class="btn btn-outline-primary mb-2" for="outlined3" @click="handleCategory('盆花')">盆花</label>
        <input type="radio" class="btn-check" name="options-outlined" id="outlined4" autocomplete="off">
        <label class="btn btn-outline-primary mb-2" for="outlined4" @click="handleCategory('花束')">花束</label>
      </div>
      <!-- 右側產品內容 -->
      <div class="col-10">
        <div class="row">
          <div class="col pb-3">
            <div class="row">
              <div class="col-sm-12 col-md-4" v-for="item in products" :key="item.id">
                <div class="card mb-3">
                  <RouterLink :to="{ path: `/product/${item.id}` }">
                    <img :src="item.imageUrl" class="img-fluid card-img-top boxy"
                      style="object-fit: cover; height: 300px;" alt="...">
                  </RouterLink>
                  <div class="card-body">
                    <h5 class="card-title text-truncate" :title="item.title">{{ item.title }}</h5>
                    <button type="button" class="btn btn-outline-primary" @click="addCart(item.id)">加入購物車</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <CPagination :total_pages="pagination.total_pages" @on_page="getProducts"></CPagination>
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
import CPagination from '../components/CPagination.vue';
import axios from 'axios';

export default {
  props: [

  ],
  components: {
    CNavbar,
    CFooter,
    CPagination,
  },
  data() {
    return {
      // data: {},
      category: "",
      products: {},
      pagination: {
        total_pages: 1,
        current_page: 1,
        has_pre: false,
        has_next: false,
        category: "",
      },
    }
  },
  methods: {
    async getProducts(page) {
      const response = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/products`,
        params: {
          page: page || this.pagination.current_page,
          category: this.category
        }
      });
      // console.log(response.data.products[0]);
      this.products = response.data.products;
      this.pagination = response.data.pagination;
    },
    handleCategory(category) {
      this.category = category;
      if (category) {
        this.$router.push({ path: "/products", query: { category } });
      } else {
        this.$router.push({ path: "/products" });
      }
      this.getProducts();
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
  },
  async mounted() {
    this.category = this.$route.query.category;
    this.getProducts();
  },
  computed: {

  },
};
</script>

<style scoped></style>