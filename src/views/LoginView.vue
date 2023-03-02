<template>
  <!-- 3. 使用 CheckLogin 元件 -->
  <CheckLogin />
</template>

<script>
// 1. 引入 CheckLogin 元件
import CheckLogin from "../components/CheckLogin.vue";

export default {
  components: {
    // 2. 註冊 CheckLogin 元件
    CheckLogin,
  }
};
</script>

<style scoped></style>
