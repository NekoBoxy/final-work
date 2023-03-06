<template>
  <div class="header">
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-lg">
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
              <!-- <li class="nav-item nav-link p-3">
                  <RouterLink to="/about">關於我們</RouterLink>
                </li> -->
              <li class="nav-item nav-link p-3">
                <RouterLink to="/products">產品一覽</RouterLink>
              </li>
              <li class="nav-item nav-link p-3">
                <RouterLink to="/cart">購物車</RouterLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}

</script>