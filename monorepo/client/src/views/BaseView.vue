<template>
  <mainLayout>
    <template #header v-if="includeHeader"></template>

    <template #default>
      <div>
        <goBackButton v-if="includeGoHomeButton" :destination="targetDestination" />
        <slot></slot>
      </div>
    </template>

    <template #footer v-if="includeFooter"></template>
  </mainLayout>
</template>

<script>
import mainLayout from '@/components/app/layoutElements/LayoutMain.vue'
import goBackButton from '@/components/app/mainElements/common/buttons/GoToButton.vue'


export default {
  name: 'BaseView',
  components: {
    mainLayout,
    goBackButton
  },
  props: {
    includeHeader: {
      type: Boolean,
      default: true
    },
    includeFooter: {
      type: Boolean,
      default: true
    },
    includeGoHomeButton: {
      type: Boolean,
      default: true
    },
    targetDestination: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>
