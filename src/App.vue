<template>
  <nav-bar />
  <router-view />
  <page-footer />
  <cookies-banner />
</template>

<script>
import NavBar from '/@/components/NavBar.vue';
import PageFooter from '/@/components/PageFooter.vue';
import CookiesBanner from '/@/components/CookiesBanner.vue';

export default {
  name: 'App',
  components: { NavBar, PageFooter, CookiesBanner },
  setup() {
    return {};
  },
};
</script>
