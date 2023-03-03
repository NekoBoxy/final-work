<template>
  <div class="header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg bg-light">
            <a class="navbar-brand" href="#">瑤草琪花</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item p-3">
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
          </nav>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<script></script>

<style scoped></style>
