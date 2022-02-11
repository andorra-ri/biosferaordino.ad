<template>
  <nav class="locale-nav" tabindex="1">
    <span>{{ locale }}</span>
    <ul class="dropdown">
      <li v-for="(name, code) in locales" :key="code" :class="{ active: code === locale }">
        <a :href="`#${code}`" @click.prevent="changeLocale(code)">{{ name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n';
import useCookies from '/@/cookies';
import { locales } from '/@/config.yaml';

export default {
  name: 'NavLocale',
  setup() {
    const { locale } = useI18n();
    const { saveCookie, readCookie } = useCookies();

    const saved = readCookie('locale');
    if (saved) locale.value = saved;

    const changeLocale = code => {
      locale.value = code;
      saveCookie('locale', code, '12m');
    };

    return { locales, locale, changeLocale };
  },
};
</script>

<style lang="scss" scoped>
.locale-nav {
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5em;
  outline: none;
  cursor: pointer;

  span {
    display: block;
    text-transform: uppercase;
    font-size: 0.9em;
  }

  &::after {
    content: '';
    display: block;
    height: 0.3em;
    width: 0.3em;
    margin: 0 0.5em 0.25em;
    border: 1px solid currentColor;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }

  .dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    min-width: 100%;
    text-align: center;
    display: none;
    border: 2px solid currentColor;
    margin-top: 0.5rem;

    .scrolled & {
      background: #fff;
      border-color: #fff;
    }

    a {
      text-decoration: none;
      display: block;
      padding: 0.25em 1em;

      &:hover { transform: scale(1.2); }
    }

    li:first-child a { padding-top: 1rem; }
    li:last-child a { padding-bottom: 1rem; }
  }

  &:focus-within .dropdown { display: block; }
}
</style>
