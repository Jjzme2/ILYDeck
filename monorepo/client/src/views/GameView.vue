<template>
  <BaseView>
    <template #default>
      <h1>Game Library</h1>
      <section>
        <p>Welcome to the game library. Here you can explore a variety of card games designed for endless entertainment.</p>
      </section>
      <section>
        <GameLibrary />
      </section>
      <section>
        <h3>Deck of Cards</h3>
        <ul>
          <li v-for="card in deck" :key="card.getCardName()">{{ card.getCardName() }}</li>
        </ul>
      </section>
    </template>
  </BaseView>
</template>

<script>
import BaseView from './BaseView.vue'
import GameLibrary from '../components/GameLibrary.vue'
import StandardPlayingDeck from '../../server/models/standardPlayingDeck.js'

export default {
  name: 'GameView',
  components: {
    BaseView,
    GameLibrary
  },
  data() {
    return {
      deck: []
    }
  },
  methods: {
    createDeck() {
      const newDeck = new StandardPlayingDeck();
      newDeck.createDeck();
      this.deck = newDeck.cards;
    }
  },
  created() {
    this.createDeck();
  }
}
</script>

<style scoped>
.game-interface {
  /* Add styles for the game interface here */
}
</style>
