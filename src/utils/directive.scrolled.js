export default {
  mounted(el, { value, arg = 80 }) {
    document.addEventListener('scroll', () => {
      if (window.scrollY > arg) el.classList.add(value);
      else el.classList.remove(value);
    });
  },
};
