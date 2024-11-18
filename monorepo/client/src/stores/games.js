import { defineStore } from 'pinia';
import { baseApi } from '@/api/baseApi';

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    items: []
  }),
  actions: {
    async fetchGames() {
      try {
        const link = 'api/games'
        const data = await baseApi.getResponse(link);
        this.items = data;
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }
  }
});
