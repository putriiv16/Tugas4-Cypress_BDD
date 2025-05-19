const {Given, When, Then} = require("cypress-cucumber-preprocessor/steps");

Given("I have a product in my cart", () => {
  cy.visit("/");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain", "Products");
    cy.get(".inventory_item").first().find("button").click();
    cy.get(".shopping_cart_link").click();
    cy.url().should("include", "/cart.html");
    cy.get(".cart_item").should("have.length", 1);
    cy.get(".cart_item").first().find(".inventory_item_name").should("be.visible");
});

When("I proceed to checkout", () => {
  cy.get(".checkout_button").click();
  cy.url().should("include", "/checkout-step-one.html");
  cy.get(".title").should("contain", "Checkout: Your Information");
});

When("I enter valid payment information", () => {
  cy.get("#first-name").type("John");
  cy.get("#last-name").type("Doe");
  cy.get("#postal-code").type("12345");
  cy.get("#continue").click();
  cy.url().should("include", "/checkout-step-two.html");
  cy.get(".title").should("contain", "Checkout: Overview");
cy.get('[data-test="finish"]').click();
});

When("I enter invalid payment information", () => {
  cy.get("#first-name").type("John");
  cy.get("#last-name").type("Doe");
  cy.get("#continue").click();
});

Then("I should see a confirmation message", () => {
  cy.get(".complete-header").should("contain", "Thank you for your order!");
  cy.get(".complete-text").should("contain", "Your order has been dispatched, and will arrive just as fast as the pony can get there!");
});

Then("I should see an error message on checkout page", () => {
  cy.get(".error-message-container").should("be.visible");
  cy.get(".error-message-container").should("contain", "Error: Postal Code is required");
});