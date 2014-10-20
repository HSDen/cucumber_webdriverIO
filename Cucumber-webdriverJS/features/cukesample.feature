Feature: Test the angular js website
  Scenario: Verify the operations like click a link goto page and other element related functions
    Given I navigate to angular documents page
    Then  I click on angular link on the page
    Then I check the core page title "AngularJS: API: ng"
    Then I check the presence on the landing page
  Scenario: Verify the functions using page object model
     Given I navigate to angular documents page
     Then  I check for the title of the documents page
     Then I check for the presence of doc element on that page





