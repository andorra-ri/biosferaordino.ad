<template>
  <nav-bar />
  <router-view />
  <page-footer />
</template>

<script>
import NavBar from '/@/components/NavBar.vue';
import PageFooter from '/@/components/PageFooter.vue';

export default {
  name: 'App',
  components: { NavBar, PageFooter },
  setup() {
    return {};
  },
};
</script>
