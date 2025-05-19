Feature: Checkout Functionality

  Scenario: Checkout with valid payment
    Given I have a product in my cart
    When I proceed to checkout
    And I enter valid payment information
    Then I should see a confirmation message

  Scenario: Checkout with invalid payment
    Given I have a product in my cart
    When I proceed to checkout
    And I enter invalid payment information
    Then I should see an error message on checkout page
