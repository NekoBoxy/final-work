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
      <div class="col-2">
        <div>
          <h5>新品上架</h5>
        </div>
        <div>盆栽</div>
        <div>盆花</div>
        <div>花束</div>
      </div>

      <div class="col-10">
        <div class="row">
          <div class="gx-4 col col-md-3 col-lg-3 col-xl-4 col-xxl-4">
            <div class="card-group" v-for="item in products" :key="item.id">
              <div class="card thumbnail">
                <img :src="item.imageUrl" class="img-fluid card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">text</p>
                  <a href="#" class="btn btn-primary">加入購物車</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





    </div>

    <div class="row">
      <div class="col-12">
        <CPagination :total_pages="pagination.total_pages" @on_page="getProducts"></CPagination>
      </div>
    </div>
  </div>



  <CFooter></CFooter>
</template>

<script>
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';
import CPagination from '../components/CPagination.vue';


import axios from 'axios';

export default {
  props: [

  ],
  components: {
    CNavbar,
    CFooter,
    CPagination,
  },
  data() {
    return {
      products: {},
      data: {},
      pagination: {
        total_pages: "",
        current_page: 1,
        has_pre: false,
        has_next: false,
        category: "",
      },
    }
  },
  methods: {
    async getProducts(page) {
      const response = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/products`,
        params: {
          page: page || this.pagination.current_page
        }
      });
      // console.log(response.data.products[0]);
      this.products = response.data.products;
      this.pagination = response.data.pagination;
      // this.data = response;
      console.log(response);
    }
  },
  mounted() {
    this.getProducts();
  },
  computed: {

  },
};

</script>

<style scoped>
/* .card img {
  width: 100%;
  height: 25vw;
  object-fit: cover;
} */
.row>.col-2 {
  border-radius: 10px;
  background-color: transparent;
  /* padding-top: 1rem; */
}
</style>