<template>
  <div>
    <div class="container v-small no-border no-shadow" style="float: left">
      <img src="/images/logo.png" alt="logo" class="icon" />
    </div>

    <button @click="toggleNav" class="button primary no-padding" style="float: right; width: 15%">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        class="bi bi-list"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
        />
      </svg>
    </button>
  </div>

  <div :class="{ 'is-visible': isNavVisible }">
    <navigationPanel v-if="isNavVisible" :routes="customRoutes"></navigationPanel>
  </div>

  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/games">Games</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script>

export default {
  name: 'LayoutHeader',
  data() {
    return {
      isNavVisible: false,
    }
  },
  methods: {
    toggleNav() {
      this.isNavVisible = !this.isNavVisible
    }
  }
}
</script>
