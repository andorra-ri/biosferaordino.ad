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

    <!-- Introduction -->
    <article id="intro">
      <div class="container grid grid--2x1 grid--center">
        <section class="definition">
          <h2>{{ t('home.what_is') }}</h2>
          <p>{{ t('home.definition') }}</p>
          <p>{{ t('home.objectives') }}</p>
          <p>{{ t('home.acknowledgement') }}</p>
        </section>
        <section id="unesco">
          <img src="/images/unesco.svg" alt="UNESCO" class="logo">
          <ul>
            <li v-for="(link, name) in unesco" :key="name">
              <a :href="link" target="blank">{{ t(`home.unesco.${name}`) }}</a>
            </li>
          </ul>
        </section>
      </div>
    </article>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { home } from '/@/config.yaml';

export default {
  name: 'Home',
  setup() {
    const { t } = useI18n();
    return { t, ...home };
  },
};
</script>

<style lang="scss" scoped>
#unesco {
  display: flex;

  .logo {
    height: 6.5rem;
    margin-right: 1.75rem;
  }

  a {
    display: block;
    color: #117bd2;
    margin-bottom: 0.75em;
  }
}
</style>
