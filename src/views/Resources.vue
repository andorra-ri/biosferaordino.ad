<template>
  <div class="view-resources">
    <header class="hero">
      <img src="/images/covers/resources.jpg" class="cover">
      <div class="container">
        <h1>{{ t('resources.tagline') }}</h1>
      </div>
    </header>

    <!-- Downloads -->
    <article class="fill">
      <div :class="`container grid grid--${sectionsCount}`">
        <section v-for="(documents, section) in resources" :key="section">
          <h3>{{ t(`resources.sections.${section}.name`) }}</h3>
          <p>{{ t(`resources.sections.${section}.text`) }}</p>
          <dropdown :label="t('resources.watch_documents')">
            <ul class="files">
              <li v-for="doc in documents" :key="doc.name">
                <a :href="documentURL(doc.file)" target="blank">
                  {{ doc[`name_${locale}`] }}
                </a>
              </li>
            </ul>
          </dropdown>
        </section>
      </div>
    </article>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import Dropdown from '/@/components/Dropdown.vue';
import api from '/@/api.service';

export default {
  name: 'Resources',
  components: { Dropdown },
  setup() {
    const { t, locale } = useI18n();
    const resources = ref({});

    const sectionsCount = computed(() => Object.keys(resources.value).length);

    const documentURL = files => {
      const file = files.find(({ filename }) => filename === locale.value);
      return file?.url || files[0].url;
    };

    onMounted(async () => {
      const docs = await api.getDocuments();
      resources.value = docs.reduce((acc, document) => {
        if (!acc[document.category]) acc[document.category] = [];
        acc[document.category].push(document);
        return acc;
      }, {});
    });

    return { t, locale, resources, sectionsCount, documentURL };
  },
};
</script>

<style lang="scss" scoped>
.files {
  padding: 0.5rem;

  a {
    display: flex;
    margin: 1rem 0.5rem;
    text-decoration: none;

    &:hover { text-decoration: underline; }

    &::before {
      content: '';
      display: block;
      height: 1.125rem;
      width: 1.125rem;
      background: url('/images/icons/download.svg') no-repeat;
      background-size: 100%;
      margin-right: 0.5rem;
    }
  }
}
</style>
