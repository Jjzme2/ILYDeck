<template>
  <div>
    <h2>Game Library</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, ref } from 'vue';
import { useGameStore } from '@/stores/games';

export default defineComponent({
  name: 'GameLibrary',
  setup() {
    const gameStore = useGameStore();
    const games = ref([]);

    const fetchGames = async () => {
      await gameStore.fetchAll();
      games.value = gameStore.items;
    };

    onBeforeMount(() => {
      fetchGames();
    });

    return {
      games,
    };
  }
});
</script>

<style scoped>
/* Add styles for the game library here */
</style>
