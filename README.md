# WriteE-react-app

| Contents
|---
| [About](#about)
| [Technologies](#technologies)
| [Hosting solutions](#hosting-solutions)
| [Features and Implementations](#features-and-implementations)
| - [Registration and Login](#registration-and-login)
| - [Header](#header)
| - [Home](#home)
| - [Profile](#profile)
| - [Search](#search)
| - [Chat](#chat)
| - [Create, Edit, Delete and View Post](#create,-edit,-delete-and-view-post)
| - [Not Found](#not-found)
| [Further](#further)

## About

This is **fullstack app**, focused mainly on the frontend with modern React, therefore some of the other elements in it are pretty basic - the backend is a dummy api created for educational purposes, used html and css are from free social-network theme, etc...

**Note:** The latest stable version of the application can be found at the following [address](https://capable-crumble-2a2ca0.netlify.app).

**The backend is hosted on free thier Heroku service**, so if the app doesn't receive any traffic in one hour goes to sleep and this causes a short delay for this first request, but subsequent requests will perform normally.

## Technologies

- [react](https://www.npmjs.com/package/react)
- [webpack](https://www.npmjs.com/package/webpack)
- [axios](https://www.npmjs.com/package/axios)
- [use-immer](https://www.npmjs.com/package/use-immer)
- [react-transition-group](https://www.npmjs.com/package/react-transition-group)
- [socket.io-client](https://socket.io/docs/v4/client-initialization/)
- [react-tooltip](https://www.npmjs.com/package/react-tooltip)
- [react-markdown](https://www.npmjs.com/package/react-markdown)

## Hosting solutions

- [heroku](heroku.com) backend
- [netlify](netlify.com) frontend
- [mongodb Atlas](https://www.mongodb.com) db

## Features and Implementations

### Registration and Login

Registration and Login share a common Home section for not logged in users. Implemented front-end validation for the registration form:

- username must be between 3 and 30 characters
- username can only contain letters and numbers
- username must be unique
- email must be a valid email address (simple regex)
- email must be unique
- password must be between 12 and 50 characters
- checking for empty fields

The final value of each field is taken 800 milliseconds delay after the last change. If errors occur, an red message is rendered above the field in question through CSSTransition. Checking first if submitted data meets all the listed conditions before sending a request to the backend server. Implemented cleanup functions for all used useEffects. If the registration is successful the user is logged in automatically, redirected to home (for logged usres) and global flash message appears.

### Header

Implemented conditional rendering whether the user is logged in or not - which fields and buttons are available to the user.

### Home

Implemented conditional rendering whether the user's feed is empty or the people he follows have written new posts. If there are a generic post component is used to render them. On slow connection and delay server response the system will render loading dots css animation. Implemented cleanup function for used useEffect (requests for followings posts).

### Profile

Its main purpose is to render the user's own posts, followers and followings in different tabs. If the user has written posts a generic post component is used to render them. This component is shared between Home, Profile and Search. Conditional rendering whether the user is their author or not. Followers and followings as total count, usernames and links to thier profils are rendered when clicking on the corresponding tab. Implemented cleanup functions for all used useEffects (requests for posts, followers and followings). Added tooltip rendering when hovering over the icon in the header (the icon is not large enough to include his name).

### Search

The Search is located outside the main routes and this architectural decision does make him a good component for lazy loading (no need this code to be loaded with the main js bundle). The opening and closing of this component is implemented by a boolean variable in the main Context of the app. Implemented fade animations through CSSTransition. The function itself is implemented via checking that the input field is not empty, request to the back end with the search terms and rendering the results. Cleanup functions for all used useEffects in case the component is unmounted before server response. Added tooltip rendering when hovering over the icon in the header (the icon is not large enough to include his name).

### Chat

Similar to the Search component and this functionality should not be loaded with the main js bundle. Implemented lazy loading. The function itself is implemented via socket.io-client. Implemented functionality to display a number in red on the chat icon if there are unread messages when the user is logged in. Due to the limited capabilities of the backend, messages to offline users are not saved. For the same reason, chat communication is only carried out between users who follow each other. Conditional rendering whether the user is author of the message or not. The socket is closed with cleanup function. Added tooltip rendering when hovering over the icon in the header (the icon is not large enough to include his name).

### Create, Edit, Delete and View Post

Standard CRUD operations. Implemented check if the user has the necessary authorization to edit or delete them - conditional rendering of the Edit and Delete buttons and checking if it is their author in case trying to access these functionalities directly through the url.

### Not Found

Generic component rendered on unhandled errors, etc...

## Further

You may create [file an issue](https://github.com/Antonov-S/WriteE-react-app/issues/new), regarding missing, incorrect or incomplete information, regarding the use of this service. Any contribution is welcome!
