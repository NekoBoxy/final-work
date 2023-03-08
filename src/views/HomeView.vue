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
                        <button type="button" class="btn btn-outline-primary">帶我回家</button>
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
                      <button type="button" class="btn btn-outline-primary">帶我回家</button>
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
                      <button type="button" class="btn btn-outline-primary">帶我回家</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" style="margin-bottom: 78px" type="button"
              data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
              <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_613_1336)">
                  <circle cx="42" cy="40" r="30" fill="#FEFDFC" fill-opacity="0.87" />
                  <path
                    d="M33.75 40.1289C33.75 40.3021 33.7819 40.4661 33.8457 40.6211C33.9095 40.7669 34.0052 40.9036 34.1328 41.0312L44.9746 51.627C45.2207 51.873 45.5169 51.9961 45.8633 51.9961C46.1003 51.9961 46.3099 51.9414 46.4922 51.832C46.6836 51.7227 46.834 51.5723 46.9434 51.3809C47.0618 51.1986 47.1211 50.9889 47.1211 50.752C47.1211 50.4147 46.998 50.1185 46.752 49.8633L36.7988 40.1289L46.752 30.3945C46.998 30.1393 47.1211 29.8431 47.1211 29.5059C47.1211 29.2689 47.0618 29.0592 46.9434 28.877C46.834 28.6855 46.6836 28.5352 46.4922 28.4258C46.3099 28.3164 46.1003 28.2617 45.8633 28.2617C45.5169 28.2617 45.2207 28.3802 44.9746 28.6172L34.1328 39.2266C34.0052 39.3542 33.9095 39.4954 33.8457 39.6504C33.7819 39.7962 33.75 39.9557 33.75 40.1289Z"
                    fill="#123025" fill-opacity="0.3" />
                </g>
                <defs>
                  <filter id="filter0_d_613_1336" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix"
                      values="0 0 0 0 0.0705882 0 0 0 0 0.188235 0 0 0 0 0.145098 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_613_1336" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_613_1336" result="shape" />
                  </filter>
                </defs>
              </svg>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" style="margin-bottom: 78px" type="button"
              data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
              <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_602_269)">
                  <circle cx="42" cy="40" r="30" fill="#FEFDFC" fill-opacity="0.87" />
                  <path
                    d="M50.6074 39.1289C50.6074 38.9557 50.571 38.7962 50.498 38.6504C50.4342 38.4954 50.3385 38.3542 50.2109 38.2266L39.3828 27.6172C39.1367 27.3802 38.8359 27.2617 38.4805 27.2617C38.2526 27.2617 38.043 27.3164 37.8516 27.4258C37.6602 27.5352 37.5098 27.6855 37.4004 27.877C37.291 28.0592 37.2363 28.2689 37.2363 28.5059C37.2363 28.8431 37.3548 29.1393 37.5918 29.3945L47.5449 39.1289L37.5918 48.8633C37.3548 49.1185 37.2363 49.4147 37.2363 49.752C37.2363 49.9889 37.291 50.1986 37.4004 50.3809C37.5098 50.5723 37.6602 50.7227 37.8516 50.832C38.043 50.9414 38.2526 50.9961 38.4805 50.9961C38.8359 50.9961 39.1367 50.873 39.3828 50.627L50.2109 40.0312C50.3385 39.9036 50.4342 39.7669 50.498 39.6211C50.571 39.4661 50.6074 39.3021 50.6074 39.1289Z"
                    fill="#123025" fill-opacity="0.3" />
                </g>
                <defs>
                  <filter id="filter0_d_602_269" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha" />
                    <feOffset dy="2" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix"
                      values="0 0 0 0 0.0705882 0 0 0 0 0.188235 0 0 0 0 0.145098 0 0 0 0.5 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_602_269" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_602_269" result="shape" />
                  </filter>
                </defs>
              </svg>
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
</style>
