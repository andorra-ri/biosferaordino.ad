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

    <!-- Galleries -->
    <article id="galleries" class="streaked">
      <div class="container grid grid--2 grid--center">
        <ul class="gallery gallery--one">
          <li v-for="i in 5" :key="i">
            <img :src="`/images/gallery/${i}.png`">
          </li>
        </ul>
        <section id="ordino">
          <h2>{{ t('reserva_biosfera_ordino') }}</h2>
          <p>{{ t('home.in_ordino') }}</p>
        </section>
        <section id="history">
          <h2>{{ t('home.history') }}</h2>
          <p>{{ t('home.our_history') }}</p>
        </section>
        <ul class="gallery gallery--two">
          <li v-for="i in 5" :key="i">
            <img :src="`/images/gallery/${i + 5}.png`">
          </li>
        </ul>
      </div>
    </article>

    <!-- Images Compare -->
    <image-compare
      id="ordino-compare"
      before="/images/compare/before.jpg"
      after="/images/compare/after.jpg">
      <template #before>
        <i18n-t tag="h2" keypath="home.compare.before">
          <template #em>
            <em>{{ t('home.compare.before_em') }}</em>
          </template>
        </i18n-t>
      </template>
      <template #after>
        <i18n-t tag="h2" keypath="home.compare.after">
          <template #em>
            <em>{{ t('home.compare.after_em') }}</em>
          </template>
        </i18n-t>
      </template>
    </image-compare>

    <!-- Goals -->
    <article id="goals">
      <div class="container">
        <h2>{{ t('home.goals') }}</h2>
        <ul class="list">
          <li v-for="goal in goals" :key="goal">
            <h3>{{ t(`home.our_goals.${goal}.name`) }}</h3>
            <p>{{ t(`home.our_goals.${goal}.goal`) }}</p>
          </li>
        </ul>
      </div>
    </article>

    <!-- Tasks -->
    <article id="tasks" class="streaked">
      <div class="container">
        <h2 class="center">{{ t('home.tasks') }}</h2>
        <ul class="cards">
          <li v-for="task in tasks" :key="task" class="card">
            <img :src="`/images/${task}.png`">
            <h3>{{ t(`home.our_tasks.${task}.name`) }}</h3>
            <p>{{ t(`home.our_tasks.${task}.task`) }}</p>
          </li>
        </ul>
      </div>
    </article>

    <!-- Logo anatomy -->
    <article id="logo-anatomy">
      <div class="container center">
        <h2>{{ t('home.logo') }}</h2>
        <div class="mapper">
          <img src="/images/logo.svg" alt="Logotip" class="logo">
          <span
            :data-tooltip-left="t('home.logo_shape')"
            class="marker"
            style="--top: 23%; --left: 23%;" />
          <span
            :data-tooltip-right="t('home.logo_corners')"
            class="marker"
            style="--top: 50%; --left: 72%;" />
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import ImageCompare from '/@/components/ImageCompare.vue';
import { home } from '/@/config.yaml';

export default {
  name: 'Home',
  components: { ImageCompare },
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

#galleries {
  position: relative;
  margin-top: -7.25rem;
  padding-top: 0;

  &::before {
    content: '2020';
    position: absolute;
    left: 50%;
    transform: translate(-50%, 00%);
    bottom: 0;
    font: 35vw 'Viga', Arial, sans-serif;
    line-height: 0.5;
    color: #fff;
    z-index: 0;
  }
}

#ordino { margin: 8rem 0 2rem; }
#history { margin: 2rem 0 8rem; }

#logo-anatomy {
  background: #0001;
  margin: 0;
  padding: 10rem 0;

  .mapper { margin: 4rem auto 0; }
  .logo { height: 15rem; }
}
</style>
