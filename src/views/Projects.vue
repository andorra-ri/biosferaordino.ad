<template>
  <div class="view-projects">
    <header class="hero">
      <webp-image src="/images/covers/projects" class="cover" />
      <div class="container">
        <h1>{{ t('projects.tagline') }}</h1>
      </div>
    </header>

    <article class="fill">
      <div class="container">
        <h2 class="center">{{ t('projects.title') }}</h2>
        <p class="center">{{ t('projects.intro') }}</p>
        <template v-if="visibleProjects.length">
          <ul class="cards grid grid--2">
            <li v-for="project in visibleProjects" :key="project.name" class="card">
              <header>
                <figure class="cover rounded">
                  <img :src="project.cover[0].url">
                </figure>
              </header>
              <h3>{{ project[`name_${locale}`] }}</h3>
              <p>{{ project[`description_${locale}`] }}</p>
            </li>
          </ul>
          <p v-if="expandable" class="show-more">
            <label>
              <input v-model="showMore" type="checkbox">
              <span class="cta">{{ t(`projects.${showMore ? 'less' : 'more'}`) }}</span>
            </label>
          </p>
        </template>
        <p v-else class="loading">{{ t('projects.loading') }}</p>
      </div>
    </article>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import WebpImage from '/@/components/WebpImage.vue';
import api from '/@/api.service';

const DEFAULT_VISIBLE_PROJECTS = 4;

export default {
  name: 'Projects',
  components: { WebpImage },
  setup() {
    const { t, locale } = useI18n();
    const projects = ref([]);
    const showMore = ref(false);

    const expandable = computed(() => projects.value.length > DEFAULT_VISIBLE_PROJECTS);

    const visibleProjects = computed(() => (
      showMore.value ? projects.value : projects.value.slice(0, DEFAULT_VISIBLE_PROJECTS)
    ));

    const loadProjects = async () => {
      projects.value = await api.getProjects(locale.value);
    };

    watch(locale, loadProjects);

    onMounted(() => loadProjects());

    return { t, locale, visibleProjects, expandable, showMore };
  },
};
</script>

<style lang="scss" scoped>
.show-more {
  text-align: center;
  margin: 6rem 0 0;

  input { display: none; }
}
</style>
