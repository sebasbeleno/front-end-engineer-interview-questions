# Prompt
Create a shopping list application that allows a user to search for an item, add items, check them off, and delete them

As the user starts typing, it should hit the endpoint and show a list of partial matches. Clicking an item should add it to the list.
![Link Name](https://frontendeval.com/images/shopping-list-1.png)

Added items can be checked off, unchecked again, and deleted from the list.

![Link Name](https://frontendeval.com/images/shopping-list-2.png)


# Requirements
Entering more than two characters in the input should show a list of partially matching items (starting with the same characters)
Clicking an item in the list of partially matching items should add it to the list

Adding the same item multiple times is allowed

Pressing the 'X' next to an item should delete it from the list
Pressing the '✓' next to an item should check it off (i.e. strikethrough text and partially grey out text/buttons)
Pressing the '✓' next to a checked-off item should uncheck it again

# API endpoints
## Find partially matching items

Method: GET
URL: https://api.frontendeval.com/fake/food/:food
Example request URL: https://api.frontendeval.com/fake/food/mi
Example response: ['milk', 'milkshake', 'mint', 'mixed herbs']
Notes: Only accepts items with a minimum of two characters (e.g. 'mi' is fine, 'm' will return an empty array')

# Important
When hitting the API endpoint, be sure to debounce your input. For example, if the user very quickly presses ten letters on the keyboard, you shouldn't make 10 API requests. Instead, you should have a slight delay (~500ms) after each keypress to make sure they do not press a key again. If the delay passes without a keypress, then make a request, otherwise reset the delay.