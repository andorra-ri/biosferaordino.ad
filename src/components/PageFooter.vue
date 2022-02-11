<template>
  <footer class="container">
    <div class="grid grid--2">
      <div id="join">
        <h2>{{ t('footer.tagline') }}</h2>
        <p>{{ t('footer.get_in_touch') }}</p>
        <ul class="contact">
          <li class="email">
            <img v-svg-inline src="/images/icons/mail.svg" class="icon">
            <a href="mailto:biosfera@ordino.ad">biosfera@ordino.ad</a>
          </li>
          <li class="phone">
            <img v-svg-inline src="/images/icons/phone.svg" class="icon">
            <a href="tel:+376878100">+376 878 100</a>
          </li>
        </ul>
      </div>
    </div>
    <section id="credits">
      <p class="logos">
        <img
          src="/images/ordino.png"
          alt="Comú d'Ordino"
          title="Comú d'Ordino">
        <img
          src="/images/logo.svg"
          alt="Ordino, Reserva de la Biosfera"
          title="Ordino, Reserva de la Biosfera">
      </p>
      <p>
        &copy; 2021 &middot; Comú d'Ordino &middot;
        <router-link to="/privacy">{{ t('cookies.policy') }}</router-link>
      </p>
      <p>
        Disseny d'<a href="https://www.arcalaska.co/" target="blank">arcalaska.co</a>
        i codi d'<a href="https://www.ari.ad" target="blank">Andorra Recerca + Innovació</a>
        &middot; Imatges cedides per <a href="https://www.instagram.com/ordinoesviu" target="blank">@ordinoesviu</a>, <a href="https://www.instagram.com/guillemcasalf" target="blank">@guillemcasalf</a> i <a href="https://www.instagram.com/montpackers" target="blank">@montpackers</a>
      </p>
    </section>
  </footer>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
  name: 'PageFooter',
  setup() {
    const { t } = useI18n();
    return { t };
  },
};
</script>

<style lang="scss" scoped>
footer {
  border-top: 2px solid #f5f5f5;
  padding: 10rem 3rem 0;
}

ul.contact {
  margin: 2rem 0;

  li {
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
  }

  .icon {
    margin-right: 0.5rem;
    height: 1.5rem;
  }

  .email .icon { color: #9d1d96; }
  .phone .icon { color: #ff9e18; }
}

#credits {
  margin: 2rem;
  color: #0005;
  text-align: center;

  p { font-size: 0.75rem; }

  .logos img {
    height: 4rem;
    filter: brightness(0);
    opacity: 0.25;
    margin: 0.5rem;
  }
}
</style>
