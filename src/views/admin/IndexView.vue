<template>
  <div v-if="visible">
    <CAdminNavbar />
    <RouterView />
  </div>
</template>

<script>
import axios from "axios";
import CAdminNavbar from "@/components/admin/CAdminNavbar.vue";

export default {
  data() {
    return {
      visible: false,
    };
  },
  components: {
    CAdminNavbar,
  },
  methods: {
    async checkLogin() {
      const hextoken = document.cookie.replace(
        /(?:(?:^|.*;\s*)hextoken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      if (!hextoken) {
        this.$router.push("/login");
        return;
      }
      axios.defaults.headers.common["Authorization"] = hextoken;
      await axios({
        method: "post",
        url: `${import.meta.env.VITE_BASE_URL}/v2/api/user/check`,
      }).catch((error) => {
        const errorMessage = error.response.data.message;
        alert(errorMessage);
        document.cookie = "hextoken=;expired=";
        this.$router.push("/login");
      });
      this.visible = true;
    },
  },
  async mounted() {
    await this.checkLogin();
  },
};
</script>

<style scoped></style>
