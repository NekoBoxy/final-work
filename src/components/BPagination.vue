<template>
  <nav aria-label="Page navigation">
    <ul class="pagination">
      <!-- class 內容是變數時要綁 v-bind，不然會被當字串然後失效 -->
      <li :class="{ 'page-item': true, disabled: currentPage == 1 }">
        <a class="page-link" style="cursor: pointer;" v-on:click="handlePrePage()">
          上一頁
        </a>
      </li>
      <li :class="{ 'page-item': true, active: currentPage == page }" v-for="(page, key) in total_pages" v-bind:key="key">
        <a class="page-link" style="cursor: pointer;" v-on:click="handleCurrentPage(page)">
          {{ page }}
        </a>
      </li>
      <li :class="{ 'page-item': true, disabled: currentPage == total_pages }">
        <a class="page-link" style="cursor: pointer;" v-on:click="handleNextPage()">
          下一頁
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: [
    "total_pages",
    "on_page"
  ],
  data() {
    return {
      currentPage: 1,
    }
  },
  methods: {
    handlePrePage() {
      this.currentPage = this.currentPage - 1;
      this.$emit("on_page", this.currentPage);
    },
    handleCurrentPage(page) {
      this.currentPage = page;
      this.$emit("on_page", this.currentPage);
    },
    handleNextPage() {
      this.currentPage = this.currentPage + 1;
      this.$emit("on_page", this.currentPage);
    },
  },
  computed: {
    pages() {
      return parseInt(this.total_pages, 10);
    }
  },
};
</script>

<style scoped></style>
