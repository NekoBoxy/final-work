<template>
  <CNavbar></CNavbar>
  <!-- Carousel 輪播 -->
  <div class="carouselBox">
    <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>

      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img src="../assets/home004.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>為生活增添點自然的氣息吧！</h5>
          </div>
        </div>

        <div class="carousel-item" data-bs-interval="5000">
          <img src="../assets/home002.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <p>兔年吉祥！新春限定優惠，即日起至2/15，輸入優惠碼happyTUyear全品項享八折優惠！</p>
          </div>
        </div>

        <div class="carousel-item" data-bs-interval="5000">
          <img src="../assets/home001.png" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
  <!-- 最近新品 card -->
  <div class="latestCard">
    <div class="row">
      <div class="col" v-for="product in products" v-bind:key="product.id">
        <div class="card h-50">
          <img v-bind:src="product.imageUrl" class="card-img-top" alt="latestCardImg">
          <div class="card-img-overlay">
            <h5 class="card-title">{{ product.title }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 產品分區 category -->
  <div class="categoryCard">
    <div class="row">
      <div class="col">
        <div class="card h-25">
          <img src="../assets/Rectangle 34 (3).png" class="card-img-top" alt="categoryCardImg">
          <div class="card-img-overlay">
            <h5 class="card-title">盆栽</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-25">
          <img src="../assets/Rectangle 34 (4).png" class="card-img-top" alt="categoryCardImg">
          <div class="card-img-overlay">
            <h5 class="card-title">盆花</h5>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-25">
          <img src="../assets/Rectangle 34.png" class="card-img-top" alt="categoryCardImg">
          <div class="card-img-overlay">
            <h5 class="card-title">花束</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 心靈小語 storys -->
  <div class="storys">
    <div class="row">
      <div class="col">
        <div class="texts">
          <p>生活在水林叢林裡，想找尋一點綠意，卻發現放眼望去都是沉重的顏色</p>
          <p>有多久沒有接觸花卉與植物了？</p>
        </div>
      </div>
      <div class="col">
        <div class="pic">
          <img src="../assets/green.png" alt="">
        </div>
      </div>
    </div>
  </div>



  <CFooter></CFooter>
</template>

<script>
import axios from 'axios';

import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';




export default {
  data() {
    return {
      products: {},
    }
  },
  components: {
    CNavbar,
    CFooter,
  },
  methods: {
    async getProducts() {
      const response = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/products/all`
      });
      this.products = [
        response.data.products[0],
        response.data.products[1],
        response.data.products[2],
      ];
      console.log(this.products);
    },
  },
  async mounted() {
    this.getProducts();
  }
};
</script>

<style scoped>
.latestCard {
  /* width: 416px;
  height: 416px; */

  border-radius: 6px;
}

;

.storys .texts {
  background-color: #FEFDFCDE;
  /* background-image: '../assets/green.png'; */
}
</style>
