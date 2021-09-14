<template>
  <div
    class="image-compare"
    :style="`--x:${xMask}`"
    @mouseenter="bindMouse"
    @mouseleave="unbindMouse"
    @touchmove="onMove">
    <div class="before">
      <webp-image :src="before" class="cover" />
      <slot name="before" />
    </div>
    <div class="after">
      <webp-image :src="after" class="cover" />
      <slot name="after" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import WebpImage from '/@/components/WebpImage.vue';

export default {
  name: 'ImageCompare',
  components: { WebpImage },
  props: {
    before: { type: String, required: true },
    after: { type: String, required: true },
  },
  setup() {
    const xMask = ref('50%');

    const onMove = event => {
      const { clientX } = event.touches?.[0] || event;
      xMask.value = `${clientX}px`;
    };

    const bindMouse = ({ target }) => {
      target.addEventListener('mousemove', onMove);
      target.addEventListener('touchmove', onMove);
    };

    const unbindMouse = ({ target }) => {
      target.removeEventListener('mousemove', onMove);
      target.removeEventListener('touchemove', onMove);
    };

    return { bindMouse, unbindMouse, onMove, xMask };
  },
};
</script>

<style lang="scss" scoped>
.image-compare {
  height: 80vh;
  position: relative;
  cursor: col-resize;

  .before,
  .after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    user-select: none;

    img {
      all: inherit;
      pointer-events: none;
    }
  }

  .before { clip-path: polygon(0 0%, calc(var(--x) - 1px) 0, calc(var(--x) - 1px) 100%, 0 100%); }
  .after { clip-path: polygon(100% 0%, var(--x) 0, var(--x) 100%, 100% 100%); }
}
</style>
