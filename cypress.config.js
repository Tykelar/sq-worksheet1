const { defineConfig } = require("cypress");

module.exports = defineConfig({

  projectId: "frrz5x",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
