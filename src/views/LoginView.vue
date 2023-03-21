<template>
  <CNavbar></CNavbar>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-12" style="text-align: center;">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
      </div>
      <div class="col-12 col-sm-6">
        <form id="form" class="form-signin" v-on:submit.prevent="handleLogin">
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="username" placeholder="name@example.com" v-model="username"
              required />
            <label for="username">Email address</label>
          </div>
          <div class="form-floating">
            <input type="password" class="form-control" id="password" placeholder="Password" v-model="password"
              required />
            <label for="password">Password</label>
          </div>
          <button class="btn btn-lg btn-primary w-100 mt-3" type="submit">
            登入
          </button>
        </form>
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
  data() {
    return {
      username: "",
      password: "",
    };
  },
  components: {
    CNavbar,
    CFooter,
  },
  methods: {
    async handleLogin() {
      const response = await axios({
        method: "post",
        url: `${import.meta.env.VITE_BASE_URL}/v2/admin/signin`,
        data: {
          username: this.username,
          password: this.password,
        },
      }).catch((error) => {
        const errorMessage = error.response.data.message;
        alert(errorMessage);
        this.username = "";
        this.password = "";
      });
      const { token, expired } = response.data;
      document.cookie = `hextoken=${token}; expires=${new Date(expired)}`;
      this.$router.push({ path: "/admin/products" });
    },
  },
};
</script>