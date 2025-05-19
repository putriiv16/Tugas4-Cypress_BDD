const {Given, When, Then} = require("cypress-cucumber-preprocessor/steps");

Given("I am logged in", () => { 
  cy.visit("/");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain", "Products");
});

Given("I have a product in my cart", () => {
  cy.visit("/");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
    cy.get(".title").should("contain", "Products");
    cy.get(".inventory_item").first().find("button").click();
    cy.get(".shopping_cart_link").click();
});

When("I add a product to the cart", () => {
  cy.get(".inventory_item").first().find("button").click();
});

When("I remove the product from the cart", () => {
  cy.get(".shopping_cart_link").click();
  cy.get(".cart_item").first().find(".cart_button").click();
});

Then("I should see the product in the cart", () => {
  cy.get(".shopping_cart_link").click();
  cy.url().should("include", "/cart.html");
  cy.get(".cart_item").should("have.length", 1);
  cy.get(".cart_item").first().find(".inventory_item_name").should("be.visible");
});

Then("My cart should be empty", () => {
  cy.get(".shopping_cart_link").click();
  cy.url().should("include", "/cart.html");
  cy.get(".cart_item").should("not.exist");
});