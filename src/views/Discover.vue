<template>
  <div class="view-discover">
    <header class="hero">
      <img src="/images/covers/discover.jpg" class="cover">
      <div class="container">
        <h1>{{ t('reserva_biosfera_ordino') }}</h1>
      </div>
    </header>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'Discover',
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>
