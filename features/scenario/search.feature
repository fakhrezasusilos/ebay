Feature: eBay Search Functionality

  Scenario Outline: Search for items on eBay
    Given the user is on the eBay homepage
    When the user enters "<searchTerm>" in the search bar
    And clicks on the search button
    Then the user should see search results for "<searchTerm>"

  Examples:
    | searchTerm         |
    | laptop             |
    | gaming console     |
    | vintage watch      |
    | action figures     |
    | smartphone         |

  Scenario: No results found for nonexistent item
    Given the user is on the eBay homepage
    When the user enters "asdkjfhqwe" in the search bar
    And clicks on the search button
    Then the user should see a message indicating no results found

  Scenario: Check search suggestion
    Given the user is on the eBay homepage
    When the user enters "smartphone" in the search bar