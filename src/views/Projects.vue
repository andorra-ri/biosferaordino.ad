<template>
  <div class="view-projects">
    <header class="hero">
      <img src="/images/covers/projects.jpg" class="cover">
      <div class="container">
        <h1>{{ t('projects.tagline') }}</h1>
      </div>
    </header>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'Projects',
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
