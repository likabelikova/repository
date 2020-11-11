@smoke
Feature: Checkbox check



    Scenario: Log in

        Given I am on QB homepage
        When enter "" in UserName field
        When enter "" in Password field
        Then I click on "Login" button
        Then I see welcoming "Hello, UserName" item

   Scenario: Checkbox check

        Then I click on "Setup" button
        Then I see "Account Information" page title
        When I check "International (Non-USA)" Checkbox
        Then "International (Non-USA)" Checkbox is checked
    
    Scenario: Logout
           Then I click on "Welcome Menu" button
           Then I click on "Logout" button
           Then I click on "Exit" button
           Then I see QB homepage