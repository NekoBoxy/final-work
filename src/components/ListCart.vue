<template>
  <table class="table align-middle">
    <thead>
      <tr>
        <th>產品名稱</th>
        <th>數量</th>
        <th>單價</th>
        <th>金額小計</th>
      </tr>
    </thead>
    <tbody>
      <!-- 尚未做單項刪除 & 數量增減 -->
      <tr v-for="item in carts" v-bind:key="item.id">
        <td>{{ item.product.title }}</td>
        <td>{{ item.qty }}</td>
        <td>{{ item.product.price }}</td>
        <td>{{ item.total }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ total }}</td>
      </tr>
    </tfoot>
  </table>
  <div class="text-end">
    <button class="btn btn-outline-primary" v-on:click="clearAll">
      清空購物車
    </button>
  </div>
  <!-- 做購買者資訊表單 -->
  <div class="my-5 row-12 justify-content-center">
  <v-form v-on:submit="handleSubmit" ref="form" class="col" v-slot="{ errors }">
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <v-field id="email" name="email" type="email" class="form-control" placeholder="請輸入 Email" :class="{ 'is-invalid': errors['email'] }" rules="email|required">
      </v-field>
      <error-message name="email" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="name" class="form-label">收件人姓名</label>
      <v-field id="name" name="name" type="text" class="form-control" placeholder="請輸入姓名" :class="{ 'is-invalid': errors['name'] }" rules="required">
      </v-field>
      <error-message name="name" class="invalid-feedback"></error-message>
    </div>
    <div class="mb-3">
      <label for="mobilePhone" class="form-label">收件人手機號碼</label>
      <v-field id="mobilePhone" name="mobilePhone" type="text" class="form-control" placeholder="請輸入手機號碼" :class="{ 'is-invalid': errors['mobilePhone'] }" v-bind:rules="checkMobilePhone">
      </v-field>
      <error-message name="mobilePhone" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="address" class="form-label">收件人地址</label>
      <v-field id="address" name="address" type="text" class="form-control" placeholder="請輸入地址" :class="{ 'is-invalid': errors['address'] }" rules="required">
      </v-field>
      <error-message name="address" class="invalid-feedback"></error-message>
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">留言</label>
      <v-field id="message" name="message" class="form-control" cols="30" rows="10" rules="required" as="textarea"></v-field>
    </div>

    <div class="text-end">
      <button type="submit" class="btn btn-danger">
        送出訂單
      </button>
    </div>
  </v-form>
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: {},
      carts: null,
      final_total: 0,
      total: 0,
    };
  },
  components: {

  },
  methods: {
    async getCart() {
      const response = await axios({
        method: "get",
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/cart`,
      });
      // console.log(response);
      // this.data = response.data;
      // console.log(this.data);
      this.carts = response.data.data.carts;
      // hint: final_total & total 跟 carts 是不同層的=_=+
      this.final_total = response.data.data.final_total;
      this.total = response.data.data.total;
      console.log("已取得購物車清單");
      this.data = response.data.data;
    },
    async clearAll() {
      const response = await axios({
        method: "delete",
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/carts`,
      });
      this.data = response.data.data;
      console.log("已清空購物車");
      this.getCart();
    },
    checkMobilePhone(value) {
      const mobilePhone = /^09[0-9]{8}$/ // 正規表達式
      return mobilePhone.test(value) ? true : '需要正確的電話號碼'
    },
    async handleSubmit(values) {
      await axios({
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
      }).catch((error) => {
        alert(error.response.data.message);
      });
      this.$refs.form.resetForm();
      await this.getCart();
    },
  },
  async mounted() {
    await this.getCart();
  },
};
</script>

<style scoped></style>
