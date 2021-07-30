import { createI18n } from 'vue-i18n';

import ca from '/@/locales/ca.yaml';

const messages = { ca };

export default createI18n({
  locale: 'ca',
  fallbackLocale: 'ca',
  messages,
});
