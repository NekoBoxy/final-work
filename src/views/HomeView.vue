<template>
  <div class="wrapper">
    <CNavbar />
    <!-- 輪播 Carousel -->
    <div class="container">
      <div class="row">
        <div class="col-12 mx-auto">
          <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="10000">
                <img src="../assets/images/home004.png" class="d-block w-100 carousel-img-cover" alt="carouselImg1">
                <div class="carousel-caption">
                  <div class="row justify-content-between align-items-center carousel-text">
                    <div class="col-12 col-md-9 col-lg-10">
                      <span>為生活注入自然的氣息</span>
                    </div>
                    <div class="col-12 col-md-3 col-lg-2">
                      <RouterLink to="/products">
                        <button type="button" class="btn btn-primary">帶我回家</button>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="../assets/images/home002.png" class="d-block w-100 carousel-img-cover" alt="carouselImg2">
                <div class="carousel-caption">
                  <div class="row justify-content-between align-items-center carousel-text">
                    <div class="col-12 col-md-9 col-lg-10">
                      <span>新春限定優惠，即日起輸入優惠碼 happyTUyear 全品項享八折優惠！</span>
                    </div>
                    <div class="col-12 col-md-3 col-lg-2">
                      <RouterLink to="/products">
                        <button type="button" class="button btn btn-primary">
                          帶我回家
                        </button>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carousel-item" data-bs-interval="5000">
                <img src="../assets/images/home001.png" class="d-block w-100 carousel-img-cover" alt="carouselImg3">
                <div class="carousel-caption">
                  <div class="row justify-content-between align-items-center carousel-text">
                    <div class="col-12 col-md-9 col-lg-10">
                      <span>塵世喧鬧中，尋一方心靈綠地</span>
                    </div>
                    <div class="col-12 col-md-3 col-lg-2">
                      <RouterLink to="/products">
                        <button type="button" class="button btn btn-primary">
                          帶我回家
                        </button>
                      </RouterLink>
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
    <!-- 最近新品 card -->
    <div class="latest-area">
      <div class="container">
        <div class="row">
          <div class="col-12 g-3 text-start">
            <h5>最近新品</h5>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-12 col-md-6 col-lg-4 col-xxl-4 g-4" style="display: flex;align-items: stretch;"
            v-for="product in recentProducts" :key="product.id">
            <div class="card" style="width: 100%; cursor: pointer;" @click="handleProductClick(product)">
              <img :src="product.imageUrl" class="card-img-top" alt="latest-area-img">
              <div class="q-card-title">
                <div class="row justify-content-between">
                  <div class="col text-start">
                    <span>{{ product.title }}</span>
                  </div>
                  <div class="col text-end">
                    <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.6138 11.1865C12.6138 11.0319 12.5812 10.8895 12.5161 10.7593C12.4591 10.6209 12.3737 10.4948 12.2598 10.3809L2.5918 0.908203C2.37207 0.696615 2.10352 0.59082 1.78613 0.59082C1.58268 0.59082 1.39551 0.639648 1.22461 0.737305C1.05371 0.834961 0.919434 0.969238 0.821777 1.14014C0.724121 1.3029 0.675293 1.49007 0.675293 1.70166C0.675293 2.00277 0.781087 2.26725 0.992676 2.49512L9.87939 11.1865L0.992676 19.8779C0.781087 20.1058 0.675293 20.3703 0.675293 20.6714C0.675293 20.883 0.724121 21.0701 0.821777 21.2329C0.919434 21.4038 1.05371 21.5381 1.22461 21.6357C1.39551 21.7334 1.58268 21.7822 1.78613 21.7822C2.10352 21.7822 2.37207 21.6724 2.5918 21.4526L12.2598 11.9922C12.3737 11.8783 12.4591 11.7562 12.5161 11.626C12.5812 11.4876 12.6138 11.3411 12.6138 11.1865Z"
                        fill="#F8FBF9" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 產品分類 category -->
    <div class="container">
      <div class="row">
        <div class="col-12 g-3 text-start">
          <h5>產品分類</h5>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-6 col-lg-4 col-xxl-4 g-4">
          <div class="card" style="cursor: pointer;" @click="handleCategoryClick('盆栽')">
            <img src="../assets/images/nkut.png" class="card-img-top" alt="category-area-img">
            <div class="q-card-title">
              <div class="row justify-content-between">
                <div class="col text-start">
                  <span>盆栽</span>
                </div>
                <div class="col text-end">
                  <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.6138 11.1865C12.6138 11.0319 12.5812 10.8895 12.5161 10.7593C12.4591 10.6209 12.3737 10.4948 12.2598 10.3809L2.5918 0.908203C2.37207 0.696615 2.10352 0.59082 1.78613 0.59082C1.58268 0.59082 1.39551 0.639648 1.22461 0.737305C1.05371 0.834961 0.919434 0.969238 0.821777 1.14014C0.724121 1.3029 0.675293 1.49007 0.675293 1.70166C0.675293 2.00277 0.781087 2.26725 0.992676 2.49512L9.87939 11.1865L0.992676 19.8779C0.781087 20.1058 0.675293 20.3703 0.675293 20.6714C0.675293 20.883 0.724121 21.0701 0.821777 21.2329C0.919434 21.4038 1.05371 21.5381 1.22461 21.6357C1.39551 21.7334 1.58268 21.7822 1.78613 21.7822C2.10352 21.7822 2.37207 21.6724 2.5918 21.4526L12.2598 11.9922C12.3737 11.8783 12.4591 11.7562 12.5161 11.626C12.5812 11.4876 12.6138 11.3411 12.6138 11.1865Z"
                      fill="#F8FBF9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xxl-4 g-4">
          <div class="card" style="cursor: pointer;" @click="handleCategoryClick('盆花')">
            <img src="../assets/images/nyryj.png" class="card-img-top" alt="category-area-img">
            <div class="q-card-title">
              <div class="row justify-content-between">
                <div class="col text-start">
                  <span>盆花</span>
                </div>
                <div class="col text-end">
                  <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.6138 11.1865C12.6138 11.0319 12.5812 10.8895 12.5161 10.7593C12.4591 10.6209 12.3737 10.4948 12.2598 10.3809L2.5918 0.908203C2.37207 0.696615 2.10352 0.59082 1.78613 0.59082C1.58268 0.59082 1.39551 0.639648 1.22461 0.737305C1.05371 0.834961 0.919434 0.969238 0.821777 1.14014C0.724121 1.3029 0.675293 1.49007 0.675293 1.70166C0.675293 2.00277 0.781087 2.26725 0.992676 2.49512L9.87939 11.1865L0.992676 19.8779C0.781087 20.1058 0.675293 20.3703 0.675293 20.6714C0.675293 20.883 0.724121 21.0701 0.821777 21.2329C0.919434 21.4038 1.05371 21.5381 1.22461 21.6357C1.39551 21.7334 1.58268 21.7822 1.78613 21.7822C2.10352 21.7822 2.37207 21.6724 2.5918 21.4526L12.2598 11.9922C12.3737 11.8783 12.4591 11.7562 12.5161 11.626C12.5812 11.4876 12.6138 11.3411 12.6138 11.1865Z"
                      fill="#F8FBF9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 col-xxl-4 g-4 pb-3">
          <div class="card" style="cursor: pointer;" @click="handleCategoryClick('花束')">
            <img src="../assets/images/jrsj.png" class="card-img-top" alt="category-area-img">
            <div class="q-card-title">
              <div class="row justify-content-between">
                <div class="col text-start">
                  <span>花束</span>
                </div>
                <div class="col text-end">
                  <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12.6138 11.1865C12.6138 11.0319 12.5812 10.8895 12.5161 10.7593C12.4591 10.6209 12.3737 10.4948 12.2598 10.3809L2.5918 0.908203C2.37207 0.696615 2.10352 0.59082 1.78613 0.59082C1.58268 0.59082 1.39551 0.639648 1.22461 0.737305C1.05371 0.834961 0.919434 0.969238 0.821777 1.14014C0.724121 1.3029 0.675293 1.49007 0.675293 1.70166C0.675293 2.00277 0.781087 2.26725 0.992676 2.49512L9.87939 11.1865L0.992676 19.8779C0.781087 20.1058 0.675293 20.3703 0.675293 20.6714C0.675293 20.883 0.724121 21.0701 0.821777 21.2329C0.919434 21.4038 1.05371 21.5381 1.22461 21.6357C1.39551 21.7334 1.58268 21.7822 1.78613 21.7822C2.10352 21.7822 2.37207 21.6724 2.5918 21.4526L12.2598 11.9922C12.3737 11.8783 12.4591 11.7562 12.5161 11.626C12.5812 11.4876 12.6138 11.3411 12.6138 11.1865Z"
                      fill="#F8FBF9" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 小故事/形象 storys -->
    <div class="container pb-4">
      <div class="row align-items-center">
        <div class="col-12 col-md-6" style="display: flex;align-items: stretch;">
          <div class="context-area p-5" style="width:100%">
            <div>
              <div class="pb-2">
                自然孕育了我們，<br>
                但生活在水林叢林裡，<br>
                放眼望去都是沉重的顏色，<br>
                有多久沒有親近鮮花與綠植了？<br>
              </div>
              <div>
                <RouterLink to="/products">
                  <button type="button" class="button btn btn-primary">
                    帶我回家
                  </button>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6" style="display: flex;align-items: stretch;">
          <img class="img-fluid" style="object-fit: cover;" src="../assets/images/green.png" alt="storysImg">
        </div>
      </div>
    </div>
    <!-- 關於我們 about -->
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6" style="display: flex;align-items: stretch;">
          <img class="img-fluid" style="object-fit: cover;height: 100%;" src="../assets/images/jyrsj.png" alt="aboutImg"
            srcset="">
        </div>
        <div class="col-12 col-md-6" style="display: flex;align-items: stretch;">
          <div class="context-area p-4">
            <div>
              <h5>關於瑤草琪花</h5>
              每一株植物都有著獨特的故事，<br>
              它們都是由專業的園藝師和花藝設計師細心培育而成。<br>
              我們致力於將這份熱愛和用心傳達給每一位顧客，<br>
              帶給您最美麗、最精緻、最獨特的作品。<br>
              無論您的需求為何，<br>
              我們都希望能為您提供最佳的選擇和最優質的服務。<br>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- QA area 手風琴 Accordion-->
    <div class="QAArea mb-3">
      <div class="container">
        <div class="row">
          <div class="col g-3 ps-3 pb-3 text-start">
            <h5>常見問與答</h5>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="accordion" id="accordion1">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button btn btn-outline-primary collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapse1" aria-expanded="true" aria-controls="collapse1">
                    <span>Q：請問運送方式？</span>
                  </button>
                </h2>
                <div id="collapse1" class="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordion1">
                  <div class="accordion-body">
                    <span>A：為了保護嬌嫩的花草們，我們全面採用黑貓宅急便運送，呵護每一株花草。若有折損請洽 0800-000-000，由專人為您服務。</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="accordion" id="accordion2">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button btn btn-outline-primary collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapse2" aria-expanded="true" aria-controls="collapse2">
                    <span>Q：請問怎麼付款呢？</span>
                  </button>
                </h2>
                <div id="collapse2" class="accordion-collapse collapse" aria-labelledby="heading2"
                  data-bs-parent="#accordion2">
                  <div class="accordion-body">
                    <span>A：瑤草琪花一律使用信用卡付款，讓您可以快速便捷的選購喜愛的花草。</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="accordion" id="accordion3">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button btn btn-outline-primary collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapse3" aria-expanded="true" aria-controls="collapse3">
                    <span>Q：網頁上沒有我喜歡的花束款式，可以客製嗎？要怎麼客製呢？價格多少？</span>
                  </button>
                </h2>
                <div id="collapse3" class="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordion3">
                  <div class="accordion-body">
                    <span>A：若有任何客製需求，歡迎來電或寄 email，與我們的花藝師一同討論出最符合您需求的花束款式。花藝師會依您的預算規畫並設計客製花束。</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="accordion" id="accordion4">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button btn btn-outline-primary collapsed" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapse4" aria-expanded="true" aria-controls="collapse4">
                    <span>Q：小編好棒棒，請問怎麼幫小編加雞腿呢？</span>
                  </button>
                </h2>
                <div id="collapse4" class="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordion4">
                  <div class="accordion-body">
                    <span>A：您可以按下方 Octocat 替小編加雞腿唷：）</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CFooter />
</template>

<script>
import axios from 'axios';

import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';

export default {
  data() {
    return {
      recentProducts: [],
    }
  },
  components: {
    CNavbar,
    CFooter,
  },
  methods: {
    async handleProductClick(product) {
      await this.$router.push(`/product/${product.id}`);
      await this.$router.go();
    },
    async handleCategoryClick(category) {
      await this.$router.push({ path: "/products", query: { category } });
      await this.$router.go();
    },
    async getProducts() {
      try {
        const response = await axios({
          method: 'get',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/products`
        });
        this.recentProducts = [
          response.data.products[0],
          response.data.products[1],
          response.data.products[2],
        ];
      } catch (error) {
        alert(error.response.data.message);
      }
    },
  },
  async mounted() {
    this.getProducts();
  }
};
</script>

<style scoped>
/* 輪播文字內容 */
.carousel-text {
  color: #123025;
  align-items: center;
  background-color: #FEFDFCDE;
  padding: 16px 24px;
  font-size: 24px;
}

/* 最近新品 & 產品分類 card */
.q-card-title {
  background-color: #457B5FDE;
  color: white;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px;
}

.card img {
  width: 100%;
  max-height: 288px;
  object-fit: cover;
  height: 100%;
}

.QAArea button {
  border: none;
}

.context-area {
  display: flex;
  justify-content: center;
  background-color: #FEFDFCDE;
}

.carousel-img-cover {
  object-fit: cover;
  height: 375px;
}

@media screen and (min-width: 769px) {
  .carousel-img-cover {
    height: 500px;
  }
}

.wrapper {
  min-height: calc(100vh - 110px);
}
</style>
