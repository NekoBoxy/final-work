<template>
  <CModalCouponsEdit :coupon="coupon" @on_finish="getCoupons" :status="status" ref="adminCouponModal"></CModalCouponsEdit>
  <CModalCouponsDelete :coupon="coupon" @on_finish="getCoupons" ref="adminDeleteCouponModal"></CModalCouponsDelete>
  <div class="container">
    <div class="row mb-2">
      <div class="col-8">
        <span style="font-size: 1.5rem;">後台優惠碼一覽</span>
      </div>
      <div class="col text-end">
        <button type="button" class="btn btn-outline-primary" @click="addCoupon">
          新增優惠券
        </button>
      </div>
    </div>
    <div class="text-center">
      <div class="row">
        <div class="col-12">
          <table class="table align-middle">
            <thead>
              <tr>
                <th>名稱</th>
                <th>優惠碼</th>
                <th>折扣百分比</th>
                <th>到期日</th>
                <th>是否啟用</th>
                <th>編輯</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="coupon in coupons" :key="coupon.id">
                <td>{{ coupon.title }}</td>
                <td>{{ coupon.code }}</td>
                <td>{{ coupon.percent }}%</td>
                <td>{{ getDate(coupon.due_date) }}</td>
                <td>
                  <span v-if="coupon.is_enabled">啟用</span>
                  <span v-else>未啟用</span>
                </td>
                <td>
                  <div class="btn-group btn-group-sm">
                    <button type="button" class="btn btn-outline-primary" @click="editCoupon(coupon)">
                      編輯
                    </button>
                    <button type="button" class="btn btn-outline-danger" @click="deleteCoupon(coupon)">
                      刪除
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <CPagination :total_pages="pagination.total_pages" @on_page="getCoupons"></CPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import CPagination from "@/components/CPagination.vue";
import CModalCouponsEdit from "@/components/admin/CModalCouponsEdit.vue";
import CModalCouponsDelete from "@/components/admin/CModalCouponsDelete.vue";
import { mapActions } from "pinia";
import { useLoaderStore } from "@/stores/loader";



export default {
  data() {
    return {
      status: "",
      coupons: [],
      pagination: {
        total_pages: 1,
        current_page: 1,
        has_pre: false,
        has_next: false,
        category: ""
      },
      coupon: {},
    };
  },
  components: {
    CPagination,
    CModalCouponsDelete,
    CModalCouponsEdit,
  },
  methods: {
    ...mapActions(useLoaderStore, ["setLoader"]),
    addCoupon() {
      this.status = "new";
      this.coupon = {};
      this.$refs.adminCouponModal.show();
    },
    editCoupon(coupon) {
      this.status = "edit";
      this.coupon = JSON.parse(JSON.stringify(coupon));
      this.$refs.adminCouponModal.show();
    },
    deleteCoupon(coupon) {
      this.coupon = coupon;
      this.$refs.adminDeleteCouponModal.show();
    },
    async getCoupons(page) {
      try {
        this.setLoader(true);
        const res = await axios({
          method: 'get',
          url: `${import.meta.env.VITE_BASE_URL}/v2/api/${import.meta.env.VITE_BASE_PATH}/admin/coupons`,
          params: {
            page: page || this.pagination.current_page
          }
        });
        this.coupons = res.data.coupons;
        this.pagination = res.data.pagination;
        this.setLoader(false);
      } catch (error) {
        alert(error.response.data.message);
      }
    },
    getDate(date) {
      return moment.unix(date).format("YYYY/MM/DD");
    },
  },
  async mounted() {
    this.setLoader(true);
    await this.getCoupons();
    this.setLoader(false);
  }
};
</script>

<style scoped></style>