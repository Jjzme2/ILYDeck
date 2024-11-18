<template>
  <div>
    <h2>Game Library</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';
import { useGameStore } from '@/stores/gameStore';

export default defineComponent({
  name: 'GameLibrary',
  setup() {
    const gameStore = useGameStore();
    const games = ref([]);

    const fetchGames = async () => {
      await gameStore.fetchGames();
      games.value = gameStore.items;
    };

    onMounted(() => {
      fetchGames();
    });

    return {
      games
    };
  }
});
</script>

<style scoped>
/* Add styles for the game library here */
</style>
