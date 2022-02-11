import { ref, readonly, watch } from 'vue';
import { useCookie } from 'vue-cookie-next';
import { useState } from 'vue-gtag-next';

const allowCookies = ref(false);

export const useConsent = () => {
  const { isCookieAvailable, getCookie, setCookie } = useCookie();
  const { isEnabled } = useState();

  const acceptCookies = () => {
    allowCookies.value = true;
    setCookie('consent', 'true', { expire: '12m' });
  };

  watch(allowCookies, allow => {
    isEnabled.value = allow;
  });

  allowCookies.value = isCookieAvailable('consent') && getCookie('consent') === 'true';

  return {
    allowCookies: readonly(allowCookies),
    acceptCookies,
  };
};

export default () => {
  const { isCookieAvailable, getCookie, setCookie } = useCookie();

  const saveCookie = (name, value, expire = '1d') => {
    if (allowCookies.value) setCookie(name, value, { expire });
  };

  const readCookie = name => isCookieAvailable(name) && getCookie(name);

  return { saveCookie, readCookie };
};
