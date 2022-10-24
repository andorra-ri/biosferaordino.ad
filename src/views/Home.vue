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
          <img src="/images/unesco.png" alt="UNESCO" class="logo">
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
            <webp-image :src="`/images/gallery/${i}`" class="rounded" />
          </li>
        </ul>
        <section id="ordino">
          <h2>{{ t('reserva_biosfera_ordino') }}</h2>
          <p>{{ t('home.in_ordino') }}</p>
        </section>
        <section id="history">
          <h2>{{ t('home.history') }}</h2>
          <p>{{ t('home.our_history') }}</p>
          <i18n-t keypath="home.history_updates" tag="p">
            <a
              href="https://www.mountainbiosphere.org/members-experiences/ordino-andorra/"
              target="blank">
              {{ t('home.biosphere_network') }}
            </a>
          </i18n-t>
        </section>
        <ul class="gallery gallery--two">
          <li v-for="i in 5" :key="i">
            <webp-image :src="`/images/gallery/${i + 5}`" class="rounded" />
          </li>
        </ul>
      </div>
    </article>

    <!-- Images Compare -->
    <image-compare
      id="ordino-compare"
      before="/images/compare/before"
      after="/images/compare/after">
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
        <ul class="cards grid grid--3">
          <li v-for="task in tasks" :key="task" class="card">
            <header>
              <webp-image :src="`/images/${task}`" class="cover rounded" :alt="task" />
            </header>
            <h3>{{ t(`home.our_tasks.${task}.name`) }}</h3>
            <p>{{ t(`home.our_tasks.${task}.task`) }}</p>
          </li>
        </ul>
      </div>
    </article>

    <!-- Zoning scrollama -->
    <article id="zoning" :class="zoning.active">
      <div class="container grid grid--2">
        <img id="zones-animation" v-svg-inline src="/images/reserve_zones.svg">
        <scrollama step=".step" @enter="zoning.change">
          <section
            v-for="zone in ['global', 'core', 'buffer', 'transition']"
            :key="zone"
            :data-zone="zone"
            class="step">
            <h2>{{ t(`home.zones.${zone}.name`) }}</h2>
            <p>{{ t(`home.zones.${zone}.desc`) }}</p>
          </section>
        </scrollama>
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
            style="--top: 29%; --left: 32%;">
            <em class="exploder" tabindex="1" />
          </span>
          <span
            :data-tooltip-right="t('home.logo_corners')"
            class="marker"
            style="--top: 58%; --left: 75%;">
            <em class="exploder" tabindex="1" />
          </span>
        </div>
      </div>
    </article>

    <!-- Management -->
    <article id="management">
      <div class="container grid grid--2 grid--center">
        <section class="description">
          <h2>{{ t('home.management') }}</h2>
          <p>{{ t('home.responsible') }}</p>
          <p>{{ t('home.commission') }}</p>
          <p>{{ t('home.citizens') }}</p>
        </section>
        <webp-image src="/images/participation" alt="Gestió" class="rounded" />
      </div>
    </article>

    <!-- Social media photos -->
    <article id="social-media" class="fill">
      <div class="container center">
        <h2>#biosferaordino</h2>
        <p>{{ t('home.social_photos') }}</p>
      </div>
      <slide-marquee v-if="socialPhotos.length" :items="socialPhotos" :speed="10">
        <template #default="{ item: photo }">
          <figure>
            <img :src="photo.image[0].url" alt="#biosferaordino">
            <figcaption>@{{ photo.username }}</figcaption>
          </figure>
        </template>
      </slide-marquee>
    </article>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import ImageCompare from '/@/components/ImageCompare.vue';
import Scrollama from '/@/components/Scrollama.vue';
import SlideMarquee from '/@/components/SlideMarquee.vue';
import WebpImage from '/@/components/WebpImage.vue';
import { home } from '/@/config.yaml';
import api from '/@/api.service';

export default {
  name: 'Home',
  components: { ImageCompare, Scrollama, SlideMarquee, WebpImage },
  setup() {
    const { t } = useI18n();
    const socialPhotos = ref([]);
    const zoning = ref({
      active: 'in-global',
      change: ({ element }) => {
        zoning.value.active = `in-${element.dataset.zone}`;
      },
    });

    onMounted(async () => {
      socialPhotos.value = await api.getSocialPhotos();
    });

    return { t, ...home, socialPhotos, zoning };
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
    color: #30659d;
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

#social-media {
  .slide-marquee {
    margin-top: 5rem;
  }

  figure {
    margin: 0 2rem;
    font-size: 0.75rem;
    line-height: 1.5;
    width: 15rem;
    color: #0003;

    img {
      max-height: 15rem;
      max-width: 100%;
      border-radius: 0.75rem;
    }
  }
}

#zoning {
  .step {
    padding: 5rem 0;
    margin: 5rem 0;
    position: relative;
    z-index: 1;
    text-shadow: 0 0 3rem #fff;
  }

  #zones-animation {
    height: 50vh;
    width: 100%;
    position: sticky;
    top: calc(50% - 25vh);
    z-index: 0;
  }
}
</style>
