<template>
  <header v-scrolled:80="'scrolled'" class="navbar">
    <div class="container" :class="{ open }">
      <img src="/images/logo.svg" class="logo">
      <nav class="main-nav">
        <label class="burger">
          <input v-model="open" type="checkbox">
        </label>
        <ul>
          <li v-for="(path, name) in nav" :key="name">
            <router-link :to="path" @click="closeNav">{{ t(`nav.${name}`) }}</router-link>
          </li>
          <li>
            <a
              v-smooth-scroll
              href="#join"
              class="cta"
              @click="closeNav">
              {{ t('join') }}
            </a>
          </li>
        </ul>
        <nav-locale />
      </nav>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Scrolled from '/@/utils/directive.scrolled';
import NavLocale from './NavLocale.vue';
import { nav } from '/@/config.yaml';

export default {
  name: 'TopBar',
  directives: { Scrolled },
  components: { NavLocale },
  setup() {
    const { t } = useI18n();
    const open = ref(false);
    const closeNav = () => { open.value = false; };
    return { t, open, closeNav, nav };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  color: #fff;
  transition: all 0.75s ease;
  z-index: 2;
  padding: 1rem 0;

  .container {
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }

  .logo {
    height: 6rem;
    filter: brightness(0) invert(1);
    transition: all 0.75s ease;
  }

  .main-nav {
    display: flex;
    margin-left: auto;

    ul {
      margin: 0 1rem;
      display: inline-flex;
    }

    a {
      display: block;
      padding: 0.75rem 1rem;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      text-align: center;
      position: relative;

      &.router-link-active { border-color: currentColor; }

      &.cta { margin-left: 1rem; }
    }
  }

  &.scrolled {
    background: #fff;
    color: #000;
    padding: 0.75rem 0;

    .logo {
      height: 3.5rem;
      filter: none;
    }
  }

  .burger { display: none; }
}

@media only screen and (min-width: 320px) and (max-width: 768px) {
  .navbar {
    .burger { display: block; }

    .main-nav ul {
      flex-direction: column;
      justify-content: space-evenly;
      position: absolute;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      margin: 0;
      padding: 8rem 2rem 6rem; // Must leave space for logo
      background: #fff;
      z-index: -1;
      box-sizing: border-box;
      font-size: 1.5rem;
      display: none;

      a.router-link-active {
        border: 0;

        &::before {
          position: absolute;
          top: 0;
          left: 0;
          content: '';
          display: block;
          height: 100%;
          width: 4px;
          background: #ff9f1b;
          border-radius: 4px;
        }
      }
    }

    .open {
      color: #000;

      .logo { filter: none; }
      .main-nav ul { display: flex; }
    }
  }
}
</style>
