const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // baseUrl: "https://google.com",
  // viewportHeight: 200,
  // viewportHeight: 200,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
