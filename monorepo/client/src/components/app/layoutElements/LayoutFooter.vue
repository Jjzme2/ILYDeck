<template>
  <footer class="footer">
    <div class="footer-section">
      <div class="grid-container">
        <div
          class="grid-item"
          style="padding-left: 0px; padding-top: 0px; padding-bottom: 0px; padding-right: 0px"
        >
          <router-link to="/contact" aria-label="Contact Us for Feedback">Feedback</router-link>
          <br />
          <a href="?cky_preview=true">Privacy</a>
          <br />
          <router-link to="/terms" aria-label="Terms and Conditions">Terms and Conditions</router-link>
        </div>
        <div>
          <a href="https://www.facebook.com" target="_blank" aria-label="Facebook">
            <img src="/images/facebook-icon.png" alt="Facebook" />
          </a>
          <a href="https://www.twitter.com" target="_blank" aria-label="Twitter">
            <img src="/images/twitter-icon.png" alt="Twitter" />
          </a>
          <a href="https://www.instagram.com" target="_blank" aria-label="Instagram">
            <img src="/images/instagram-icon.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </div>

    <div class="footer-section">
      <strong>&copy; {{ yearTag }} ILYDeck.com. All rights reserved.</strong>
    </div>

    <div class="footer-section footer-brand">
      <p aria-label="Company name">ILYTAT</p>
    </div>
  </footer>
</template>

<script>

export default {
  data() {
    return {
      yearTag: new Date().getFullYear()
    }
  },
  components: {
  }
}
</script>
