# Tweeter (SPA) Project (Lighthouse Labs)

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Background

This four-day mini-project was completed as part of the Week-4 assignment.

### Key Functionalities:
- Created UI/UX elements like -> toggling of compose and scroll up buttons, reseting the text counter, clearing the input area and displaying appropriate error/success messages. 
- The form data/user input is validated on the client side using jQuery and posted to the server using an AJAX call.
- The tweets are refetched on submission and dynamically sent to DOM without requiring a page refresh.
- The application is tested to prevent cross-site scripting(XSS) by sanitizing input/form data before it is sent to DOM using various jQuery methods.


## Final Product - Project Screenshots

* [Tweeter - Home Page](https://github.com/ChaiUrs/tweeter/blob/master/docs/1.%20tweet-compose.png)
! [Tweeter - Home Page, when compose button is clicked => new tweet form slides down with textarea in focus.](https://github.com/ChaiUrs/tweeter/blob/master/docs/1.%20tweet-compose.png)



## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. 
4. The app will be served at <http://localhost:8080/>.


## Dependencies

* [Express](http://expressjs.com/) - Web application server framework
* [Node 5.10.x or above](https://github.com/nodejs/node#current-and-lts-releases) - Node.js is a JavaScript runtime.
* [body-parser](https://github.com/expressjs/body-parser#readme) - Node.js body parsing middleware
* [Chance](http://chancejs.com/) - Generator of random strings and numbers
* [MD5](https://github.com/pvorb/node-md5#readme) - JavaScript function for hashing messages
* [mongodb](https://github.com/mongodb/node-mongodb-native) - MongoDB driver for Node.js


## Dev Dependencies

* [nodemon](https://nodemon.io/) - A utility to monitor for any changes in the source and automatically restarts the server.
