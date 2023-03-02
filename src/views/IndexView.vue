<template>
  <div class="container">
    <div>我是前台</div>
    <RouterLink to="/">首頁</RouterLink>
    <!-- <span>｜</span>
    <RouterLink to="/about">關於我們</RouterLink> -->
    <span>｜</span>
    <RouterLink to="/products">產品一覽</RouterLink>
    <span>｜</span>
    <RouterLink to="/cart">購物車</RouterLink>
    <span>｜</span>
    <RouterLink to="/admin/orders">後台訂單一覽</RouterLink>
    <!-- 套用簡單 nav 樣式 -->
      <!-- <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item nav-link p-3">
                <RouterLink to="/">首頁</RouterLink>
              </li>
              <li class="nav-item nav-link p-3">
                <RouterLink to="/about">關於我們</RouterLink>
              </li>
              <li class="nav-item nav-link p-3">
                <RouterLink to="/cart">購物車</RouterLink>
              </li>
              <li class="nav-item nav-link p-3">
                <RouterLink to="/products">產品一覽</RouterLink>
              </li>
              <li class="nav-item nav-link p-3">
                <RouterLink to="/admin/orders">後台訂單一覽</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> -->
    <RouterView />
  </div>
</template>

<script></script>

<style scoped></style>
