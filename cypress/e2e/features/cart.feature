Feature: Cart Functionality

  Scenario: Add item to cart
    Given I am logged in
    When I add a product to the cart
    Then I should see the product in the cart

  Scenario: Remove item from cart
    Given I have a product in my cart
    When I remove the product from the cart
    Then My cart should be empty
