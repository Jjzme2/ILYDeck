import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

const app = createApp(App);

const appName = import.meta.env.VITE_APP_NAME || "ILYDeck";

const globalErrorHandler = (error, vm, info) => {
  console.error(`Error: ${error.toString()}\nInfo: ${info}`);
};

const validateRouteParams = (params) => {
  if (!params || typeof params !== 'object') {
    throw new Error('Invalid route parameters');
  }
};

app.config.errorHandler = globalErrorHandler;

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || appName; // Set the title from the route meta or use a default title

  // Validate route parameters
  try {
    validateRouteParams(to.params);
  } catch (error) {
    console.error('Route parameter validation error:', error);
    next({ name: "NotFound" });
    return;
  }

  // Check that the route exists, otherwise redirect to the 404 page
  if (!to.matched.length) {
    next({ name: "NotFound" });
  }
  next();
});

router.onError((error, to, from) => {
  const errorMessage = `There was an error loading the page ${to.name} from ${from.name}: ${error.message}`;
  console.error(errorMessage, error);
});

// Use Pinia, Vue Router, and mount the application
app.
use(createPinia())
.use(router)
.mount("#app");
