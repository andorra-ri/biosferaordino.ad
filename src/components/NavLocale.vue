<template>
  <nav class="locale-nav">
    <span>{{ locale }}</span>
    <ul class="dropdown">
      <li v-for="(name, code) in locales" :key="code" :class="{ active: code === locale }">
        <a :href="`#${lcode}`" @click.prevent="locale = code">{{ name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { useI18n } from 'vue-i18n';
import { locales } from '/@/config.yaml';

export default {
  name: 'NavLocale',
  setup() {
    const { locale } = useI18n();
    return { locales, locale };
  },
};
</script>

<style lang="scss" scoped>
.locale-nav {
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5em;

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
    border-radius: 5px;
    padding-top: 5px;

    li {
      padding: 0.25em 1em;
      background: #fff;
      color: #000;

      &:first-child {
        border-top-left-radius: 0.5em;
        border-top-right-radius: 0.5em;
        padding-top: 1em;
      }

      &:last-child {
        border-bottom-left-radius: 0.5em;
        border-bottom-right-radius: 0.5em;
        padding-bottom: 1em;
      }
    }

    a {
      text-decoration: none;
      display: block;
    }
  }

  &:hover .dropdown { display: block; }
}
</style>
