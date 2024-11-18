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
    </template>
  </BaseView>
</template>

<script>
import BaseView from './BaseView.vue'
import GameLibrary from '../components/app/mainElements/libraries/GameLibrary.vue'

export default {
  name: 'GameView',
  components: {
    BaseView,
    GameLibrary
  },
  data() {
  },
}
</script>
