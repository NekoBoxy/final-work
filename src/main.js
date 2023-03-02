import { createApp } from "vue";
import { createPinia } from "pinia";

// vee validate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import en from '@vee-validate/i18n/dist/locale/en.json';
import zh_TW from './i18n/zh_TW.json';

// Import all of Bootstrap's JS
// eslint-disable-next-line no-unused-vars
import * as bootstrap from "bootstrap";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";
// Import our custom CSS
import "./scss/styles.scss";

// vee-validate
Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({
    en,
    zh_TW,
  }),
  validateOnInput: true,
});

setLocale('zh_TW');

const app = createApp(App);

app.use(createPinia());
app.use(router); // 套用方法但沒套用元件,才需要在各頁import
// vee validate
app.component("v-form", Form);
app.component("v-field", Field);
app.component("error-message", ErrorMessage);


app.mount("#app");
