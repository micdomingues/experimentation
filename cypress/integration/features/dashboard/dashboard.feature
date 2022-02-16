Feature: Approving products

  Scenario: Should show products to approval
    Given I am on the dashboard page
    When I have some products to approval
    Then I should see some products to be approved

  Scenario: Empty list to be approved
    Given I am on the dashboard page
    When I do not have products to approval
    Then I should see empty message approval

  Scenario: Should not lost data when refresh
    Given I am on the dashboard page
    And I have some products to approval
    When I refresh page
    Then I should see some products to be approved

  Scenario: Should show pending message when approval all products
    Given I am on the dashboard page
    And I have some products to approval
    When I do click on "Approval" on every product
    Then I should see empty message approval


