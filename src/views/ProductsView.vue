<template>
  <div class="wrapper">
    <CNavbar />
    <div class="container">
      <!-- 麵包屑 breadcrumb -->
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
      <div class="row">
        <!-- 左側選單 -->
        <div class="col-12 col-md-2 d-flex flex-column">
          <input type="radio" class="btn-check" name="options-outlined" id="outlined1" autocomplete="off" checked>
          <label class="btn btn-outline-primary mb-2" style="min-width: 110px;" for="outlined1"
            @click="handleCategory('')">全部</label>
          <input type="radio" class="btn-check" name="options-outlined" id="outlined2" autocomplete="off">
          <label class="btn btn-outline-primary mb-2" style="min-width: 110px;" for="outlined2"
            @click="handleCategory('盆栽')">盆栽</label>
          <input type="radio" class="btn-check" name="options-outlined" id="outlined3" autocomplete="off">
          <label class="btn btn-outline-primary mb-2" style="min-width: 110px;" for="outlined3"
            @click="handleCategory('盆花')">盆花</label>
          <input type="radio" class="btn-check" name="options-outlined" id="outlined4" autocomplete="off">
          <label class="btn btn-outline-primary mb-2" style="min-width: 110px;" for="outlined4"
            @click="handleCategory('花束')">花束</label>
        </div>
        <!-- 右側產品內容 -->
        <div class="col-12 col-md-10">
          <div class="row">
            <div class="col pb-3">
              <div class="row">
                <div class="col-sm-12 col-md-6 col-lg-4" v-for="item in products" :key="item.id">
                  <div class="card mb-3" @click="handleProductClick(item)" style="cursor: pointer;">
                    <img :src="item.imageUrl" class="img-fluid card-img-top boxy"
                      style="object-fit: cover; height: 300px;" alt="productImg">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-12">
                          <span class="card-title text-truncate" :title="item.title" style="font-size: 1.5rem;">{{
                            item.title
                          }}</span>
                        </div>
                        <div class="col-6 d-flex align-items-center">
                          <div class="d-flex flex-column align-items-left">
                            <div class="product-pc">
                              <del style="font-size: 0.75rem;color: #123025A8;">{{ item.origin_price }}</del>
                            </div>
                            <div>
                              <span style="font-size: 1rem;">{{ item.price + " 元" }}</span>
                            </div>
                          </div>
                        </div>
                        <div class="product-mobile col-6 justify-content-center p-1">
                          <button type="button" class="btn btn-outline-primary" @click.stop="addCart(item.id)">
                            <i class="bi bi-cart-plus"></i>
                          </button>
                        </div>
                        <div class="product-pc col-6 justify-content-center p-1">
                          <button type="button" class="btn btn-outline-primary btn-sm" @click.stop="addCart(item.id)">
                            加入購物車
                          </button>
                        </div>
                      </div>
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
  </div>
  <CFooter />
</template>

<script>
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';
import CPagination from '../components/CPagination.vue';
import axios from 'axios';
import { mapActions } from "pinia";
import { useCartStore } from "../stores/cart";
import { useLoaderStore } from "../stores/loader";

export default {
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
    ...mapActions(useCartStore, ["updateNum"]),
    ...mapActions(useLoaderStore, ["setLoader"]),
    async handleProductClick(product) {
      await this.$router.push(`/product/${product.id}`);
      await this.$router.go();
    },
    async getProducts(page) {
      try {
        this.setLoader(true);
        const response = await axios({
          method: 'get',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/products`,
          params: {
            page: page || this.pagination.current_page,
            category: this.category
          }
        });
        this.products = response.data.products;
        this.pagination = response.data.pagination;
        this.setLoader(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    async handleCategory(category) {
      try {
        this.setLoader(true);
        this.category = category;
        if (category) {
          this.$router.push({ path: "/products", query: { category } });
        } else {
          this.$router.push({ path: "/products" });
        }
        await this.getProducts();
        this.setLoader(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    async addCart(product_id, qty = 1) {
      try {
        this.setLoader(true);
        await axios({
          method: 'post',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/cart`,
          data: {
            data: { product_id, qty }
          }
        });
        await this.updateNum();
        this.setLoader(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  },
  async mounted() {
    this.setLoader(true);
    this.category = this.$route.query.category;
    await this.getProducts();
    this.setLoader(false);
  },
};
</script>

<style scoped>
.wrapper {
  min-height: calc(100vh - 110px);
}

.product-pc {
  display: none;
}

@media screen and (min-width: 1201px) {
  .product-pc {
    display: flex;
  }
}

.product-mobile {
  display: flex;
}

@media screen and (min-width: 1201px) {
  .product-mobile {
    display: none;
  }
}
</style>