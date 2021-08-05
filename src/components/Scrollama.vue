<template>
  <div class="scrollama">
    <slot />
  </div>
</template>

<script>
import { onMounted, onUnmounted } from 'vue';
import scrollama from 'scrollama';

export default {
  name: 'Scrollama',
  props: {
    step: { type: String, required: true },
    offset: { type: Number, default: 0.5 },
    progress: { type: Boolean, default: false },
    threshold: { type: Number, default: 4 },
    order: { type: Boolean, default: true },
    once: { type: Boolean, default: false },
    debug: { type: Boolean, default: false },
  },
  emits: ['progress', 'enter', 'exit'],
  setup(props, { emit }) {
    const scroller = scrollama();
    onMounted(() => {
      scroller
        .setup(props)
        .onStepProgress(res => emit('progress', res))
        .onStepEnter(res => emit('enter', res))
        .onStepExit(res => emit('exit', res));

      document.addEventListener('resize', scroller.resize());
    });

    onUnmounted(() => {
      document.removeEventListener('resize', scroller.resize());
    });
    return {};
  },
};
</script>
