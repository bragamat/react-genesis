import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: ['cypress/**/*spec.ts'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
