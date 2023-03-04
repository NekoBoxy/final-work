<template>
  <CNavbar></CNavbar>
  <CCarousel></CCarousel>
  <CArrival></CArrival>
  <CCategory></CCategory>
  <CTalkA></CTalkA>
  <CTalkB></CTalkB>
  <CQA></CQA>
  <CFooter></CFooter>
</template>

<script>
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';
import CArrival from '../components/CArrival.vue';
import CCarousel from '../components/CCarousel.vue';
import CCategory from '../components/CCategory.vue';
import CTalkA from '../components/CTalkA.vue';
import CTalkB from '../components/CTalkB.vue';
import CQA from '../components/CQA.vue';


export default {
  components: {
    CNavbar,
    CFooter,
    CArrival,
    CCarousel,
    CCategory,
    CTalkA,
    CTalkB,
    CQA
  }
};
</script>

<style scoped></style>
