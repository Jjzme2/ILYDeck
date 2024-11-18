<template>
  <div class="main-layout">
    <header class="header" v-if="showHeader && $slots.header">
      <layoutHeader></layoutHeader>
    </header>

    <main class="body">
      <slot></slot>
    </main>

    <footer v-if="$slots.footer">
      <layoutFooter></layoutFooter>
    </footer>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import layoutHeader from '@/components/app/layoutElements/LayoutHeader.vue'
import layoutFooter from '@/components/app/layoutElements/LayoutFooter.vue'

export default {
  name: 'LayoutMain',
  components: {
    layoutHeader,
    layoutFooter
  },
  setup() {
    const showHeader = ref(false)

    const handleScroll = () => {
      showHeader.value = window.scrollY > 100
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      showHeader
    }
  }
}
</script>
