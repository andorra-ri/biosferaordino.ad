<template>
  <details :open="open" class="dropdown">
    <summary>
      <span class="label">{{ label }}</span>
      <img src="/images/icons/arrow-down.svg" class="chevron">
    </summary>
    <div class="droppanel">
      <slot />
    </div>
  </details>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    label: { type: String, required: true },
    open: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  display: inline-block;

  summary {
    all: unset;
    display: flex;
    align-items: center;
    padding: 0.75rem;
    cursor: pointer;
    border-radius: 0.5rem;

    &::-webkit-details-marker { display:none; }

    &:hover { color: #000; }

    .label { margin-right: 2rem; }
    .chevron { margin: 0 0.25rem 0 auto; }
  }

  .droppanel {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 1;
    margin: 0.5rem 0;
    background: #fff;
    border-radius: 5px;
    min-width: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 1rem 0 #0002;

    &::before {
      content: '';
      display: block;
      border: 0.75rem solid transparent;
      border-bottom-color: #fff;
      position: absolute;
      bottom: 100%;
      right: 1rem;
    }
  }

  &[open] .chevron { transform: rotate(180deg); }
}
</style>
