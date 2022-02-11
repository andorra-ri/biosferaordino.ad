<template>
  <div class="view-discover">
    <header class="hero hero--small">
      <webp-image src="/images/covers/silhouette" class="cover" />
    </header>
    <article class="legal-notice">
      <div class="container">
        <component :is="`legal-${locale}`" />
      </div>
    </article>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import WebpImage from '/@/components/WebpImage.vue';
import legal from './legal';

export default {
  name: 'PrivacyPolicy',
  components: { WebpImage, ...legal },
  setup() {
    const { locale } = useI18n();
    return { locale };
  },
};
</script>
