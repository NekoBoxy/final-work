<template>
  <CNavbar></CNavbar>
  <div>我是首頁內容 homeview</div>
  <CFooter></CFooter>
</template>

<script>
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';

export default {
  components: {
    CNavbar,
    CFooter
  }
};
</script>

<style scoped></style>
