# MLB AM Take-Home Exercise

![Preview](/public/assets/preview.png "Preview")

###Getting Started
  
  1. Install dependencies:

    `npm install`

  2. Start server:

    `npm start`

  3. Go to:

    `http://localhost:3000`

  4. Controls:

| Key         | Action         |
|-------------|----------------|
| Left Arrow  | Move Left      |   
| Right Arrow | Move Right     |
| Up Arrow    | Increase Date  |
| Down Arrow  | Decrease Date  |
| Enter       | Toggle Overlay |

  5. Special Note: 

    - On webpage load, the current games are set to the original JSON data found in the instructions, 5/20/2016. I kept this data for initial loading since its no longer baseball season and would load an empty list if I used the current date. I figure it was best for demonstration purposes.

###To Run Unit Tests

  `npm test`

###Technical Challenges
  1. **Focus Element** - The way I handled this was by creating a focus index. That index would change depending on what keys were pressed. I had conditionals that would check for the start and end of the array to prevent having an index outside of the array. The list component would render a different component for the focus element and match its position in the array.

  2. **Scroll To View** - I had the focus element move properly on key press but it would go off screen. I had to find a way have the list scroll so the element stay on screen. I found the native Element.scrollIntoView which worked okay, but still had problems with the last element no scrolling completely into view. I found an npm package `scroll-into-view` that worked much better and would scroll the element as much to the center as possible.

  3. **Date Object** - When I added the functionality to make the date dynamic it opened up a lot of different challenges. One of those presented itself as a bug where when I passed the date object to the server, it the date plus one day. Apparently the date object can appear differently based on environment, so a date of 11/14/16 on the browser could actually be 11/15/16 on the server. I fixed the bug by instead of sending the date object, I sent a string back representing the date I wanted.

  4. **Image Errors** - I ran into a few errors with thumbnails either having image url's that were not available, the game object didn't have thumbnails, and sometimes having different sized images. I had a replacement image that would swap the image on error or if the object didn't have a thumbnail. I also styled all the images to have a standard size.

###Technical Considerations
  1. **Debouncing** - Since the user is able to change the date, we are only concerned with the date the user stops on. By using debouncing we can prevent unnecessary http requests. I used the Underscore library to implement this.

  2. **Cache** - Since the user is able to go back and forth between dates. It makes sense to have a cache to return previous http requests, so we don't send multiple requests for the same data. I set a object literal that acted as a rudimentary cache on the server.

  3. **Concurrency** - The user can possibly trigger multiple asynchronous https requests for different dates. However, we are only concerned about the latest date, so it makes sense to cancel any pending requests. I used Redux Sagas to handle concurrency.

  4. **Responsiveness** - I wanted the app to look the same on multiple screens, so I used responsive CSS styling such as flexbox to achieve this.

  5. **Loading Spinner** - I wanted to have some user feedback when fetching data for games and the loading spinner really helped visualize that processes are working. 

###Tech Stack

  - React
  - Redux
  - Redux-Thunk
  - Redux-Saga
  - ES2015
  - Node
  - Express
  - Babel
  - Webpack
  - Bootstrap
  - Jquery
  - Underscore