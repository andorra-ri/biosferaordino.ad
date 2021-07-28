<template>
  <header class="navbar">
    <div class="container">
      <img src="/images/logo.svg" class="logo">
      <nav class="main-nav">
        <ul>
          <li><router-link to="/">Index</router-link></li>
          <li><router-link to="/descobreix">Descobreix</router-link></li>
          <li><router-link to="/projectes">Projectes</router-link></li>
          <li><router-link to="/recursos">Recursos</router-link></li>
          <li><a href="#footer" class="cta">Participa</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TopBar',
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  padding: 1rem 0;
  color: #fff;
  transition: all 0.75s ease;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    height: 6rem;
    filter: brightness(0) invert(1);
    transition: all 0.75s ease;
  }

  .main-nav {
    display: flex;
    margin-left: auto;

    ul {
      margin: 0 1rem;
      display: inline-flex;
    }

    a {
      display: block;
      padding: 0.75rem 1rem;
      text-decoration: none;
      border-bottom: 2px solid transparent;

      &.router-link-active { border-color: currentColor; }
    }
  }
}
</style>
