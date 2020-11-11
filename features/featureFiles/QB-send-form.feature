@smoke
Feature: Send form check

    Scenario: Log in

        Given I am on QB homepage
        When enter "" in UserName field
        When enter "" in Password field
        Then I click on "Login" button
        Then I see welcoming "Hello, UserName" item

    Scenario: Send form

        Then I click on "?" button
        Then "Help" modal is opened
        When enter "Issue" in Subject field
        When enter "Description" in IssueDescription field
        When enter "" in YourContactEmail field
        Then I click on "Send" button

    Scenario: Logout
        Then I click on "Welcome Menu" button
        Then I click on "Logout" button
        Then I see QB homepage