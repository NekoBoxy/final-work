<template>
  <CNavbar></CNavbar>
  <!-- steps bar -->
  <div class="container">
    <div class="row">
      <div class="col">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button class="nav-link active" id="confirm-tab" ref="confirm-tab" data-bs-toggle="tab"
              data-bs-target="#confirm-tab-pane" type="button" role="tab" aria-controls="confirm-tab-pane"
              aria-selected="true">確認訂單</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="profile-tab" ref="profile-tab" data-bs-toggle="tab"
              data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane"
              aria-selected="false">收件資訊</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="pay-tab" ref="pay-tab" data-bs-toggle="tab" data-bs-target="#pay-tab-pane"
              type="button" role="tab" aria-controls="pay-tab-pane" aria-selected="false">付款資訊</button>
          </li>
          <li class="nav-item" role="presentation">
            <button class="nav-link" id="success-tab" ref="success-tab" data-bs-toggle="tab"
              data-bs-target="#success-tab-pane" type="button" role="tab" aria-controls="success-tab-pane"
              aria-selected="false">完成訂購</button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="confirm-tab-pane" role="tabpanel" aria-labelledby="confirm-tab"
            tabindex="0">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...
          </div>
          <div class="tab-pane fade" id="pay-tab-pane" role="tabpanel" aria-labelledby="pay-tab" tabindex="0">...
          </div>
          <div class="tab-pane fade" id="success-tab-pane" role="tabpanel" aria-labelledby="success-tab" tabindex="0">...
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

import { Tab } from "bootstrap";

export default {
  components: {
    CNavbar,
    CFooter,
  },
  data() {
    return {

    }
  },
  methods: {
    async getCart() {

    },
  },
  async mounted() {
    this.getCart();
    const tabTrigger = new Tab(this.$refs["profile-tab"]);
    tabTrigger.show();
  },
};

</script>