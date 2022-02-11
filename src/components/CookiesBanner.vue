<template>
  <div v-if="!allowCookies" class="cookies-banner">
    <p>
      <i18n-t tag="span" class="notice" keypath="cookies.consent">
        <template #policy>
          <router-link to="/privacy">{{ t('cookies.policy') }}</router-link>
        </template>
      </i18n-t>
      <button class="cta" @click="acceptCookies">
        {{ t('cookies.accept') }}
      </button>
    </p>
  </div>
</template>

<script>
import { useConsent } from '/@/cookies';
import { useI18n } from 'vue-i18n';

export default {
  name: 'CookiesBanner',
  setup() {
    const { t } = useI18n();
    return { t, ...useConsent() };
  },
};
</script>

<style lang="scss" scoped>
.cookies-banner {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #000b;
  padding: 0.5rem;
  box-sizing: border-box;
  color: #fff;

  .cta { margin-left: 1em;}
}
</style>
