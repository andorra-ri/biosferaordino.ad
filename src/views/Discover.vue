<template>
  <div class="view-discover">
    <header class="hero">
      <img src="/images/covers/discover.webp" class="cover">
      <div class="container">
        <h1>{{ t('reserva_biosfera_ordino') }}</h1>
      </div>
    </header>

    <!-- Heritage -->
    <article id="heritage" class="fill">
      <section v-for="scope in heritage" :key="scope.id">
        <div :class="['container', 'grid', 'grid--2x1', 'grid--center']">
          <section>
            <h2>{{ t(`discover.heritage.${scope.id}.name`) }}</h2>
            <p v-for="i in scope.text" :key="i">
              {{ t(`discover.heritage.${scope.id}.text.${i - 1}`) }}
            </p>
            <p>
              <a :href="scope.link" target="blank" class="cta">
                {{ t(`discover.heritage.${scope.id}.link`) }}
              </a>
            </p>
          </section>
          <div><img :src="scope.image"></div>
        </div>
      </section>

      <!-- Petals shape -->
      <svg width="0" height="0">
        <clipPath id="petal-right" clipPathUnits="objectBoundingBox">
          <path d="M.07.976C.032.249.928.022.928.022S.799.939.072.977zm-.725.468" />
        </clipPath>
        <clipPath id="petal-left" clipPathUnits="objectBoundingBox">
          <path d="M.93.976C.97.259.04.035.04.035H.04s.136.903.89.941H.93zm.753.462" />
        </clipPath>
      </svg>
    </article>

    <!-- Activities -->
    <div class="hero">
      <img src="/images/covers/activities.webp" class="cover">
      <div class="container">
        <h2>{{ t('discover.activities.tagline') }}</h2>
        <p><a href="#" class="cta">{{ t('discover.activities.link') }}</a></p>
      </div>
    </div>

    <!-- Responsibility -->
    <article id="responsibility">
      <div class="container">
        <h2>{{ t('discover.responsibility.title') }}</h2>
        <p>
          {{ t('discover.responsibility.us_all') }}
          <br>{{ t('discover.responsibility.follow_principles') }}
        </p>
        <ul class="list">
          <li v-for="principle in principles" :key="principle">
            <h3>{{ t(`discover.responsibility.principles.${principle}.name`) }}</h3>
            <p>{{ t(`discover.responsibility.principles.${principle}.text`) }}</p>
          </li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { discover } from '/@/config.yaml';

export default {
  name: 'Discover',
  setup() {
    const { t } = useI18n();
    return { t, ...discover };
  },
};
</script>

<style lang="scss" scoped>
#heritage {
  position: relative;
  overflow: hidden;

  img {
    display: block;
    margin: 0 auto;
    height: 400px;
    width: 100%;
    object-fit: cover;
    clip-path: url(#petal-right);
    max-width: 29rem;
  }

  section { position: relative; }
  section + section { margin-top: 5rem; }

  section:nth-child(2n) .grid {
    flex-direction: row-reverse;
    img { clip-path: url(#petal-left); }
  }

  &::before {
    content: '';
    display: block;
    height: 70vw;
    width: 70vw;
    border: 30vw solid #fff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
  }
}
</style>
