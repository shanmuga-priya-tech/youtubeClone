# YouTube Clone

# Implementation :

- planning the app
- structuring the app

  - app
    - header
      - hamburger menu,logo,search,usericon & so on.
    - Body
      - sidebar(list of menus with icons)
      - mainContainer
        - filter buttons
        - video Container

- created app with create-react-app
- configured with Tailwind CSS
- creation of header,sidebar,filter button component

- installed redux-toolkit and react-redux for creating store
- created a store and appSlice
- implemented toggle functionality to toggle side bar

# Getting youtube API key

- cloud credentials => create api key => enable YouTube Data API v3 service.
- create a .env file and placed a youtube api and restart the application.

- building video Conatiner using the youtube api

- search functionality(debouncing)

# debouncing:

- Debouncing is a technique in programming that helps improve the performance of web applications by controlling the frequency at which time-consuming tasks are triggered.
- Debouncing can be used in search input fields to delay sending search queries to the server until the user has finished typing, reducing the number of unnecessary API requests.
  eg:debouncing with 200ms
  =>User presses a key → debounce timer starts (200ms countdown begins).
  =>If the user presses another key before 200ms, the timer resets and starts a new 200ms countdown.
  =>If the user stops typing and no further keys are pressed for 200ms, then the function executes (e.g., an API call).

# CACHING:

- caching is done to optimize the search result thus reducing the api call.
  eg: if india is already searched we store it in slice and we get the suggestion list for that search from the slice rather making an api call once again.

- CACHE STRUCTURE:
  {
  searchQuery:[suggestion list]
  "apple":["apple iphone","apple tree","apple garden","apple juice","apple fruit"]
  }

# N-Level Nested Comments:(array of obj with array of obj nested inside it)

- using recursion:
  - CommentContainer
  - CommentList
  - Comment
  - CommentList(used the same component recursively)

# Live Chat:(API polling)

- we use api polling because order doesn't matter.
- we keep certain amount of previous msgs in cache and delete the remaining previous msgs inorder to avoid page load and also to display some of the previous msgs when we scroll up.
