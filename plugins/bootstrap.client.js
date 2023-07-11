import * as bootstrap from "bootstrap"; // Global setup plugin

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(bootstrap);
});
