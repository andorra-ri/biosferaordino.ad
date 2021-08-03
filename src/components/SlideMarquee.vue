<template>
  <ul :id="id" class="slide-marquee" :style="`--speed:${speed}s`">
    <li v-for="(item, i) in current" :key="`${item[key]}.${i}`">
      <slot :item="item" />
    </li>
  </ul>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'SlideMarquee',
  props: {
    id: { type: String, default: Math.random().toString(36).substr(2, 5) },
    key: { type: String, default: '_id' },
    items: { type: [Object, String], required: true },
    speed: { type: Number, default: 5 },
  },
  setup(props) {
    const current = ref(props.items);

    const pushToEnd = () => {
      const { children } = document.getElementById(props.id);
      children[0].addEventListener('animationend', () => {
        current.value.push(current.value.shift());
        setTimeout(pushToEnd, 100); // Hack to assign listener after elements are redrawn
      }, { once: true });
    };

    onMounted(() => pushToEnd());

    return { current };
  },
};
</script>

<style lang="scss">
.slide-marquee {
  display: flex;
  align-items: center;
  overflow: hidden;

  li {
    animation: evade var(--speed) linear;
  }
}

@keyframes evade {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}
</style>
