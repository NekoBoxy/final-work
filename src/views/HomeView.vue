<template>
  <CNavbar></CNavbar>
  <!-- Carousel 輪播 -->
  <div class="carouselArea">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="../assets/images/home004.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <div class="row justify-content-between align-items-center carousel-text">
                    <div class="col-3">
                      <span>為生活注入自然的氣息</span>
                    </div>
                    <div class="col-2">
                      <RouterLink to="/products">
                        <button type="button" class="btn btn-outline-primary carousel-btn">帶我回家</button>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="../assets/images/home002.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <div class="row justify-content-between align-items-center carousel-text">
                    <div class="col-10">
                      <span>兔年吉祥！新春限定優惠，即日起至2/15，輸入優惠碼 happyTUyear 全品項享八折優惠！</span>
                    </div>
                    <div class="col-2">
                      <button type="button" class="btn btn-outline-primary carousel-btn">帶我回家</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="../assets/images/home001.png" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                  <div class="row justify-content-between align-items-center carousel-text">
                    <div class="col-10">
                      <span>塵世喧鬧中，尋一方心靈綠地</span>
                    </div>
                    <div class="col-2">
                      <button type="button" class="btn btn-outline-primary carousel-btn">帶我回家</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 最近新品 card -->
  <div class="latestArea">
    <div class="container">
      <div class="row">
        <div class="col-4 p-4" v-for="product in products" v-bind:key="product.id">
          <div class="card h-25">
            <img v-bind:src="product.imageUrl" class="card-img-top" alt="latestCardImg">
            <div class="card-img-overlay">
              <h5 class="card-title">{{ product.title }}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 產品分區 category -->
  <div class="categoryArea">
    <div class="container">
      <div class="row">
        <div class="col-4">
          <div class="card h-25">
            <img src="../assets/images/nkut.png" class="card-img-top" alt="categoryCardImg">
            <div class="card-img-overlay">
              <h5 class="card-title">盆栽</h5>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card h-25">
            <img src="../assets/images/nyryj.png" class="card-img-top" alt="categoryCardImg">
            <div class="card-img-overlay">
              <h5 class="card-title">盆花</h5>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="card h-25">
            <img src="../assets/images/jrsj.png" class="card-img-top" alt="categoryCardImg">
            <div class="card-img-overlay">
              <h5 class="card-title">花束</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 心靈小語 storys -->
  <div class="storyArea">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="texts">
            <p>生活在水林叢林裡，想找尋一點綠意，卻發現放眼望去都是沉重的顏色</p>
            <p>有多久沒有接觸花卉與植物了？</p>
          </div>
        </div>
        <div class="col">
          <div class="pic">
            <img src="../assets/images/green.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 關於我們 about -->
  <div class="aboutArea">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="pic">
            <img src="../assets/images/jyrsj.png" alt="" srcset="">
          </div>
        </div>
        <div class="col">
          <div class="text">
            <p>想從生活中親近自然，最簡單的就是從自家做起。</p>
            <p>但居家空間有限，不如就以小巧的盆栽與花卉，來為自己的私空間妝點顏色吧。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- QA area -->
  <div class="QAArea">
    <div class="container">
      <div class="row">
        <div class="col-12 p-2 g-2">
          <h5>Q：請問運送方式？</h5>
          <p>A：為了保護嬌嫩的花草們，我們全面採用黑貓宅急便運送，呵護每一株花草。若有折損請洽 0800-000-000，由專人為您服務。</p>
        </div>
        <div class="col-12 p-2 g-2">
          <h5>Q：請問怎麼付款呢？</h5>
          <p>A：瑤草琪花一律使用信用卡付款，讓您可以快速便捷的選購喜愛的花草。</p>
        </div>
        <div class="col-12 p-2 g-2">
          <h5>Q：網頁上沒有我喜歡的花束款式，可以客製嗎？要怎麼客製呢？價格多少？</h5>
          <p>A：若有任何客製需求，歡迎來電或寄 email，與我們的花藝師一同討論出最符合您需求的花束款式。花藝師會依您的預算規畫並設計客製花束。</p>
        </div>
        <div class="col-12 p-2 g-2">
          <h5>Q：小編好棒棒，請問怎麼幫小編加雞腿呢？</h5>
          <p>A：您可以按下方 Octocat 替小編加雞腿唷：）</p>
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
.carousel-text {
  color: #123025;
  align-items: center;
  background-color: #FEFDFCDE;
  padding: 16px 24px;
  font-size: 24px;
}

.carousel-btn {
  position: relative;
  z-index: 2;
}
</style>
