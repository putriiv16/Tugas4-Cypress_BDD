const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
    specPattern: "**/*.feature",
    baseUrl: "https://www.saucedemo.com"
  }
};