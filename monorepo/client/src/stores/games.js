import { defineStore } from 'pinia';
import { baseApi } from '@/api/baseApi';

export const useGameStore = defineStore('gameStore', {
  state: () => ({
    items: []
  }),
  actions: {
    async fetchAll() {
      try {
        const link = 'api/games'
        const data = await baseApi.getResponse(link);
		if(data.length === 0){
			console.log('No games found');
			return;
		}
        this.items = data;
      } catch (error) {
        console.error('Error fetching games:', error);
      }
    }
  }
});
