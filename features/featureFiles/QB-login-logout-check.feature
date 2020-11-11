@smoke
Feature: Login / Logout check

    Scenario: Login

        Given I am on QB homepage
        When enter "" in UserName field
        When enter "" in Password field
        Then I click on "Login" button
        Then I see welcoming "Hello, UserName" item
    
    Scenario: Logout
           Then I click on "Welcome Menu" button
           Then I click on "Logout" button
           Then I see QB homepage
