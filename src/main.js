import { createApp } from 'vue';
import InlineSvg from 'vue-svg-inline-plugin';
import SmoothScroll from 'vue3-smooth-scroll';
import { VueCookieNext } from 'vue-cookie-next';
import router from './router';
import i18n from './i18n';
import App from './App.vue';

import 'reset-css';
import './styles/main.scss';

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(InlineSvg);
app.use(SmoothScroll, {
  duration: 2500,
  updateHistory: false,
});

app.use(VueCookieNext);

app.mount('#app');
