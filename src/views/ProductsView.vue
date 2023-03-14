<template>
  <CNavbar></CNavbar>
  <!-- 麵包屑 breadcrumb -->
  <div class="container">
    <div class="row">
      <div class="col">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Library</a></li>
            <li class="breadcrumb-item active" aria-current="page">Data</li>
          </ol>
        </nav>
      </div>
    </div>
    <div class="row">
      <div class="col-2" style="background-color: #FFF;">
        <div>
          <h5>新品上架</h5>
        </div>
        <div>盆栽</div>
        <div>盆花</div>
        <div>花束</div>
      </div>

      <div class="col-10">
        <div class="card-group" v-for="item in products" :key="item.id">
          <div class="card">
            <img :src="item.imageUrl" class="img-fluid card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's
                content.</p>
              <a href="#" class="btn btn-primary">加入購物車</a>
            </div>
          </div>
        </div>
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
  components: {
    CNavbar,
    CFooter,
  },
  data() {
    return {
      products: {},
      data: {},
    }
  },
  methods: {
    async getProducts() {
      const response = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/products/all`
      });
      // console.log(response.data.products[0]);
      this.products = response.data.products;
      // this.data = response;
      console.log(response);
      // console.log(this.data);
    }
  },
  mounted() {
    this.getProducts();
  },
};

</script>

<style scoped>
.card img {
  width: 100%;
  height: 25vw;
  object-fit: cover;
}
</style>