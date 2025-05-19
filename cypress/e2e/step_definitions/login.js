const { Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

Given("I open the login page", () => {
  cy.visit("/");
});

When("I enter valid credentials", () => {   
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
});

When("I enter invalid credentials", () => {
  cy.get("#user-name").type("invalid_user");
  cy.get("#password").type("invalid_password");
});

When("I click the login button", () => {    
  cy.get("#login-button").click();
});

Then("I should be redirected to the inventory page", () => {    
  cy.url().should("include", "/inventory.html");
  cy.get(".title").should("contain", "Products");
});

Then("I should see an error message", () => {
  cy.get(".error-message-container").should("be.visible");
  cy.get(".error-message-container").should("contain", "Username and password do not match any user in this service");
});