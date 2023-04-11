<template>
  <CNavbar />
  <div class="container d-flex justify-content-center">
    <div class="progress-container">
      <div id="progress" class="progress" :style="{ width: `${(currentStep - 1) * 33.3}%` }"></div>
      <div class="circle" :class="{ active: currentStep === step }" v-for="step in 4" :key="step">
        {{ step }}
      </div>
    </div>
  </div>
  <CFooter />
</template>

<script>
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';

export default {
  data() {
    return {
      currentStep: 3,
    }
  },
  components: {
    CNavbar,
    CFooter,
  },
  methods: {

  },
};

</script>

<style scoped>
/* * {
  box-sizing: border-box;
} */

body {
  margin: 0;
  padding: 0;
  display: flex;
  /*讓內容在viewport的中間*/
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

/* 主容器 */
.container {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}

/* 進度條容器 */
.progress-container {
  display: flex;
  justify-content: space-between;
  position: relative;
  /*可以針對progress-containe內部物件的位子去做調整*/
  margin-bottom: 30px;
  max-width: 100%;
  width: 350px;
}

/* 預設進度「線條」 */
.progress-container::before {
  content: "";
  background-color: #85A896;
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 3px;
  z-index: -1;
  transform: translateY(-50%);
  /*線條往上移動*/
}

/* 實際進度「線條」 */
div.progress {
  background-color: #326A4D;
  position: absolute;
  top: 50%;
  left: 0;
  /*一開始不會有進度，所以設0%*/
  height: 3px;
  z-index: -1;
  transform: translateY(-50%);
  /*線條往上移動*/
  transition: width 0.5s linear;
}

/* 步驟1、2、3、4 */
div.circle {
  color: white;
  background-color: #326A4D;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  /* 讓數字置中對齊 */
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border 0.5s linear;
}

/* 正在進行的步驟 */
div.circle.active {
  border: 3px solid #326A4D;
  background-color: #326A4D;
}

/*  */
div.circle.active~div {
  background-color: #85A896;
}
</style>