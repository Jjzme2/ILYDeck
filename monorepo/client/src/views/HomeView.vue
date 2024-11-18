<template>
  <BaseView :includeGoHomeButton="false">
    <template #default>
		<h1>Welcome to ILYDeck</h1>
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
