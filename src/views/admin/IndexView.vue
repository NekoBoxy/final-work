<template>
<div class="container-fluid" v-if="visible">
  <div>你在後台</div>
  <nav class="navbar navbar-expand-lg bg-light">
    <div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item nav-link p-3">
            <RouterLink to="/">回前台首頁</RouterLink>
          </li>
          <li class="nav-item nav-link p-3">
            <RouterLink to="/admin/products">產品一覽</RouterLink>
          </li>
          <li class="nav-item nav-link p-3">
            <RouterLink to="/admin/orders">訂單一覽</RouterLink>
          </li>
          <li class="nav-item nav-link p-3">
            <RouterLink to="/admin/coupons">優惠碼一覽</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView />
</div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    // 確認登入狀態
    async checkLogin() {
      // 從 cookie 取 hextoken
      const hextoken = document.cookie.replace(
        /(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      if (!hextoken) {
        // 若 token 不存在則跳轉至 login 頁
        this.$router.push("/login");
        // 中止運行 checkLogin()
        return;
      }
      // 若 token 存在，找出 token，axios 踹 api 以驗證 token 是否正確。
      axios.defaults.headers.common["Authorization"] = hextoken;
      await axios({
        method: "post",
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/user/check`,
      }).catch((error) => {
        // 若 token 存在但驗證錯誤，顯示錯誤訊息並清空 token&expired 並跳轉登入頁
        const errorMessage = error.response.data.message;
        alert(errorMessage);
        document.cookie = "hextoken=;expired=";
        this.$router.push("/login");
      });
      // 若 token 存在並通過驗證，打開 <div v-if="visible">
      this.visible = true;
    },
  },
  // mounted 時執行 checkLogin()
  async mounted() {
    await this.checkLogin();
  },
};
</script>

<style scoped></style>
