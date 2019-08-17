# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

This repository is the starter code for the project: Students will fork and clone this repository, then build upon it to practice their HTML, CSS, JS, jQuery and AJAX front-end skills, and their Node, Express and MongoDB back-end skills.

## Background

This four-day mini-project was completed as part of Week-4 assignment.

## App functionality

* Single page app architecture.
* Use ajax to communicate w/ Tweeter backend server

Page Contains:

- Navbar
  - fixed to top
  - contains Compose button, which:
     - Toggles display of inline compose box
     - Auto-focuses the textarea in the compose box

- Tweet compose box
  - Contains form to submit tweet, above the tweets
  - Form contains:
      - validates input on submit
        + Indicates input errors
      - Character counter updates on keypress
        - Turn red (or similar) when count > 140 chars
      - Does not submit (alert feedback) if empty or count > 140
        + should be smart enough to catch empty spaces (" ") as text [minor]
      - refreshes tweet list when successfully submitted

- List of tweets
  - Order by post time descending (reverse chronological)


## Final Product


## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser
- chance
- md5
- MongoDB
