<template>
  <CModalProductDelete :product="product" @on_finish="getAllProducts()" ref="cModalProductDelete"></CModalProductDelete>
  <CModalProductEdit :product="product" :status="status" @on_finish="getAllProducts()" ref="cModalProductEdit">
  </CModalProductEdit>
  <div class="container">
    <div class="row">
      <div class="col text-end mt-4">
        <button type="button" class="btn btn-outline-primary" @click="addProduct()">
          建立新的產品
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <table class="table align-middle">
          <thead>
            <tr>
              <td>圖片</td>
              <td>名稱</td>
              <td>分類</td>
              <td>單位</td>
              <td>原價</td>
              <td>售價</td>
              <td>是否啟用</td>
              <td>編輯</td>
              <td>刪除</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in products" v-bind:key="product.id">
              <td style="width:200px">
                <div style="height: 100px; background-size: cover; background-position: center"
                  :style="{ 'background-image': `url(${product.imageUrl})` }">
                </div>
              </td>
              <td>{{ product.title }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.unit }}</td>
              <td>{{ product.origin_price }}</td>
              <td>{{ product.price }}</td>
              <td>
                <span v-if="product.is_enabled">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <button v-on:click="editProduct(product)" type="button" class="btn btn-outline-secondary">編輯</button>
              </td>
              <td>
                <button v-on:click="delProduct(product)" type="button" class="btn btn-outline-secondary">刪除</button>
              </td>
            </tr>
          </tbody>
          <tfoot></tfoot>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <CPagination :total_pages="pagination.total_pages" @on_page="getAllProducts"></CPagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CModalProductDelete from "@/components/admin/CModalProductDelete.vue";
import CModalProductEdit from "@/components/admin/CModalProductEdit.vue";
import CPagination from "@/components/CPagination.vue";
import { mapActions } from "pinia";
import { useLoaderStore } from "@/stores/loader";

export default {
  data() {
    return {
      status: "",
      product: {},
      products: {},
      pagination: {
        total_pages: "",
        current_page: 1,
        has_pre: false,
        has_next: false,
        category: ""
      },
    };
  },
  components: {
    CModalProductDelete,
    CModalProductEdit,
    CPagination,
  },
  methods: {
    ...mapActions(useLoaderStore, ["setLoader"]),
    async addProduct() {
      this.status = "new";
      this.product = {};
      this.$refs.cModalProductEdit.show();
    },
    async editProduct(product) {
      this.status = "edit";
      this.product = product;
      this.$refs.cModalProductEdit.show();
    },
    async delProduct(product) {
      this.product = product;
      this.$refs.cModalProductDelete.show();
    },
    // 取得產品資料 - 分頁
    async getAllProducts(page) {
      try {
        this.setLoader(true);
        const response = await axios({
          method: "get",
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/products/`,
          params: {
            page: page || this.pagination.current_page
          }
        });
        this.products = response.data.products;
        this.pagination = response.data.pagination;
        this.setLoader(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  },
  async mounted() {
    this.setLoader(true);
    await this.getAllProducts();
    this.setLoader(false);
  },
};
</script>

<style scoped></style>
