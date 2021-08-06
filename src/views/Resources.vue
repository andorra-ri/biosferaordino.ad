<template>
  <div class="view-resources">
    <header class="hero">
      <img src="/images/covers/resources.jpg" class="cover">
      <div class="container">
        <h1>{{ t('resources.tagline') }}</h1>
      </div>
    </header>
  </div>
</template>
<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'Resources',
  setup() {
    const { t } = useI18n();

    return { t };
  },
};
</script>
