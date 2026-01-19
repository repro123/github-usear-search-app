# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device’s screen size
- See hover states for all interactive elements
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- Automatically receive the correct theme based on their system preferences (prefers-color-scheme)
- See a default GitHub user (Octocat) on first page load
- See clear error feedback when a user is not found

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/github-user-search-app-using-vanilla-javascript-and-tailwind-css-aE0ISC4NLJ](https://www.frontendmentor.io/solutions/github-user-search-app-using-vanilla-javascript-and-tailwind-css-aE0ISC4NLJ)
- Live Site URL: [https://github-usear-search-app.vercel.app/](https://github-usear-search-app.vercel.app/)

## My process

### Built with

- Semantic HTML5
- Tailwind CSS
- Mobile-first workflow
- Vanilla JavaScript
- GitHub Users REST API
- CSS Grid & Flexbox
- LocalStorage (for theme persistence)

### What I learned

This project helped me strengthen several important frontend concepts:

- State management without frameworks
  I learned how to manage UI state (theme, errors, API responses) cleanly using vanilla JavaScript.

- Dark mode done properly
  I implemented dark mode using:
  - system preference detection (prefers-color-scheme)
  - a manual toggle
  - persistence with localStorage
  - a zero-FOUC (flash of unstyled content) approach

- Defensive UI updates
  I handled optional GitHub API fields safely (bio, location, website, company, twitter) without breaking the UI.

- Better validation & error handling
  Input validation and API errors are handled explicitly and surfaced clearly to the user.

### Continued development

Things I would like to improve or explore further:

- Improving accessibility (keyboard navigation and ARIA feedback)
- Adding loading states or skeleton UI
- Refactoring the JavaScript into smaller reusable utilities
- Improving error messaging based on specific API response codes

## Author

- Frontend Mentor - [repro123](https://www.frontendmentor.io/profile/repro123)
- Twitter - [Dr_Repro](https://www.twitter.com/Dr_Repro)
