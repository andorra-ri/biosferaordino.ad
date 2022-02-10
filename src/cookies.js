import { ref, readonly } from 'vue';
import { useCookie } from 'vue-cookie-next';

const allowCookies = ref(false);

export default () => {
  const { isCookieAvailable, getCookie, setCookie } = useCookie();

  const acceptCookies = () => {
    allowCookies.value = true;
    setCookie('consent', 'true', { expire: '12m' });
  };

  allowCookies.value = isCookieAvailable('consent') && getCookie('consent') === 'true';

  return {
    allowCookies: readonly(allowCookies),
    acceptCookies,
  };
};
