<template>
<div ref="modal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 id="productModalLabel" class="modal-title">
          <span v-if="status === 'new'">新增產品</span>
          <span v-else>編輯產品</span>
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-sm-4">
            <div class="mb-2">
              <div class="mb-3">
                <label for="imageUrl" class="form-label">輸入主圖片網址</label>
                <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="newProduct.imageUrl">
              </div>
              <img class="img-fluid" :src="newProduct.imageUrl" :alt="newProduct.title">
            </div>
            <hr />
            <div>
              <button class="btn btn-outline-primary btn-sm d-block w-100" @click="addImage">
                新增更多圖片
              </button>
            </div>
            <div class="mb-2" v-for="(imgUrl, index) in newProduct.imagesUrl" :key="index">
              <hr />
              <div class="mb-3">
                <label for="imageUrl" class="form-label">輸入圖片網址</label>
                <input type="text" class="form-control" placeholder="請輸入圖片連結" v-model="newProduct.imagesUrl[index]">
              </div>
              <img class="img-fluid" :src="imgUrl" :alt="imgUrl">
              <button class="btn btn-outline-danger btn-sm d-block w-100" @click="removeImage(index)">
                刪除圖片
              </button>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="mb-3">
              <label for="title" class="form-label">標題</label>
              <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="newProduct.title">
            </div>
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="category" class="form-label">分類</label>
                <input id="category" type="text" class="form-control" placeholder="請輸入分類" v-model="newProduct.category">
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">單位</label>
                <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="newProduct.unit">
              </div>
            </div>
            <div class="row">
              <div class="mb-3 col-md-6">
                <label for="origin_price" class="form-label">原價</label>
                <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價" v-model="newProduct.origin_price">
              </div>
              <div class="mb-3 col-md-6">
                <label for="price" class="form-label">售價</label>
                <input id="price" type="number" min="0" class="form-control" placeholder="請輸入售價" v-model="newProduct.price">
              </div>
            </div>
            <hr>
            <div class="mb-3">
              <label for="description" class="form-label">產品描述</label>
              <textarea id="description" type="text" class="form-control" placeholder="請輸入產品描述" v-model="newProduct.description"></textarea>
            </div>
            <div class="mb-3">
              <label for="content" class="form-label">說明內容</label>
              <textarea id="content" type="text" class="form-control" placeholder="請輸入說明內容" v-model="newProduct.content"></textarea>
            </div>
            <div class="mb-3">
              <div class="form-check">
                <input id="is_enabled" class="form-check-input" type="checkbox" :true-value="1" :false-value="0" v-model="newProduct.is_enabled">
                <label class="form-check-label" for="is_enabled">是否啟用</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
          取消
        </button>
        <button type="button" class="btn btn-primary" @click="handleSubmit()">
          確認
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from "axios";
import { Modal } from "bootstrap";

export default {
  props: {
    status: String,
    product: {
      type: Object,
      default() {
        return {
          imagesUrl: [],
        }
      }
    },
    on_finish: Function,
  },
  data() {
    return {
      newProduct: {
        imagesUrl: [],
      },
      modal: null,
    };
  },
  watch: {
    product(newValue) {
      this.newProduct = { ...newValue };
    }
  },
  methods: {
    show() {
      this.modal.show();
    },
    hide() {
      this.modal.hide();
    },
    async handleSubmit() {
      try {
        let method = "";
        let url = "";
        if (this.status === "new") { // 新增產品
          method = "post";
          url = `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/product`;
        } else { // 編輯產品
          method = "put";
          url = `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/product/${this.newProduct.id}`;
        }
        await axios({ method, url, data: { data: this.newProduct } }).catch((error) => {
          throw error.response.data.message;
        });
        this.modal.hide();
        // 完成
        this.$emit('on_finish');
      } catch (message) {
        alert(message);
      }
    },
    // 新增圖片：若 temp 內沒有 imagesUrl，則新增一個 imagesUrl 欄位，之後 push 一個空字串進去，v-for 才能正常執行。
    addImage() {
      if (!this.newProduct.imagesUrl) {
        this.newProduct.imagesUrl = [];
      }
      this.newProduct.imagesUrl.push("");
    },
    // 刪除圖片：用 splice 與 index 搭配，刪除一筆資料。
    removeImage(index) {
      this.newProduct.imagesUrl.splice(index, 1);
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },

};
</script>

<style scoped></style>
