<template>
  <div class="view-home">
    <header class="hero">
      <div class="video">
        <iframe
          :src="`https://player.vimeo.com/video/${video}?background=1&muted=1`"
          allow="autoplay; fullscreen"
          frameborder="0" />
      </div>
      <div class="container">
        <h1>{{ t('reserva_biosfera_ordino') }}</h1>
      </div>
    </header>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { home } from '/@/config.yaml';

export default {
  name: 'Home',
  setup() {
    const { t } = useI18n();
    const { video } = home;
    return { t, video };
  },
};
</script>
