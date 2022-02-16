Feature: Adding Products to been Approval

  Scenario: Should clean when the User add product
    Given I am on the products page
    And I do fill out product a product
    When I do click on "Ask Approval"
    Then I should see the fields on initial state