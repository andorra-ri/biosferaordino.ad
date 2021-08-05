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
            <router-link :to="path">{{ t(`nav.${name}`) }}</router-link>
          </li>
          <li><a v-smooth-scroll href="#join" class="cta">{{ t('join') }}</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import Scrolled from '/@/utils/directive.scrolled';
import { nav } from '/@/config.yaml';

export default {
  name: 'TopBar',
  directives: { Scrolled },
  setup() {
    const { t } = useI18n();
    const open = ref(false);
    return { t, open, nav };
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

  .container {
    display: flex;
    align-items: center;
    padding: 1rem;
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
      position: relative;

      &.router-link-active { border-color: currentColor; }
    }
  }

  &.scrolled {
    background: #fff;
    color: #000;

    .logo {
      height: 3rem;
      filter: brightness(0);
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
      padding: 8rem 2rem 4rem; // Must leave space for logo
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

      .logo { filter: brightness(0); }
      .main-nav ul { display: flex; }
    }
  }
}
</style>
