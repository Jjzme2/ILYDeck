<template>
  <BaseView :includeGoHomeButton="false">
    <template #default>
      <h1>Welcome to ILYDeck</h1>
      <section>
        <p>ILYDeck is an innovative web application that brings the joy of card games to life. Play a variety of classic and custom card games, designed and curated for endless entertainment. Whether you're mastering familiar favorites or exploring unique new creations, ILYDeck offers a versatile, engaging platform for card game enthusiasts.</p>
      </section>
      <section>
        <router-link to="/games">
          <button class="cta-button">Play Now</button>
        </router-link>
      </section>
      <section>
        <h2>Popular Games</h2>
        <ul>
          <li>Game 1</li>
          <li>Game 2</li>
          <li>Game 3</li>
        </ul>
      </section>
    </template>
  </BaseView>
</template>
<script>
import BaseView from './BaseView.vue'

export default {
  name: 'HomeView',
  components: {
    BaseView
  },
  data() {
    return {
      appName: import.meta.env.VITE_APP_NAME
    }
  }
}
</script>
