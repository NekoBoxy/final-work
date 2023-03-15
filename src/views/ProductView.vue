<template>
  <CNavbar></CNavbar>
  <div></div>
  <CFooter></CFooter>
</template>

<script>
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';

export default {
  components: {
    CNavbar,
    CFooter,
  },
  data() {
    return {
      id: "",
    }
  },
  methods: {

  },
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
  },
};

</script>