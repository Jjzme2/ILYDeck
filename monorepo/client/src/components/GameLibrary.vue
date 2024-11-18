<template>
  <div>
    <h2>Game Library</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <h3>Deck of Cards</h3>
    <ul>
      <li v-for="card in deck" :key="card.getCardName()">{{ card.getCardName() }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import { useGameStore } from '@/stores/gameStore';
import StandardPlayingDeck from '@/models/standardPlayingDeck';

export default defineComponent({
  name: 'GameLibrary',
  setup() {
    const gameStore = useGameStore();
    const games = ref([]);
    const deck = ref([]);

    const fetchGames = async () => {
      await gameStore.fetchGames();
      games.value = gameStore.items;
    };

    const createDeck = () => {
      const newDeck = new StandardPlayingDeck();
      newDeck.createDeck();
      deck.value = newDeck.cards;
    };

    onMounted(() => {
      fetchGames();
      createDeck();
    });

    return {
      games,
      deck
    };
  }
});
</script>

<style scoped>
/* Add styles for the game library here */
</style>
