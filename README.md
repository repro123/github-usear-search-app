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

- Accessibility & UX Enhancements

This project goes beyond the basic requirements by incorporating several accessibility and usability improvements:

Accessibility

- Implemented semantic HTML landmarks (header, main, article, footer) to improve screen reader navigation.
- Used proper heading structure, ensuring the user’s name is announced as a heading.
- Replaced generic lists with description lists `<dl>` for key–value data such as repositories, followers, and profile metadata.
- Added ARIA live regions to announce:
- Theme changes (e.g. “Dark mode now active”)
- Search result updates (e.g. “Showing results for octocat”)
- Error messages when no user is found
- Ensured live regions are not hidden with display: none and that content is only injected when needed to prevent announcements on page load.

Improved form accessibility by:

- Using type="search"
- Programmatically associating error messages with the input via aria-describedby
- Icons used as labels include appropriate text alternatives, while decorative icons use empty alt attributes.
- Focus and hover states were reviewed to maintain sufficient color contrast.

Usability & UX

- Implemented URL search parameters using the URL and history APIs:
- Each search updates the ?user= query string

  ```js
  const url = new URL(window.location.href);
  url.searchParams.set("user", inputVal);
  history.pushState({}, "", url);
  ```

- Searches can be bookmarked and shared
- Browser back/forward navigation restores previous searches
  ```js
  window.addEventListener("popstate", function () {
    const url = new URL(window.location.href);
    const userFromUrl = url.searchParams.get("user");
    inputVal = searchInput.value = userFromUrl || "octocat";
    initApp();
  });
  ```

```

- On first page load, the app automatically displays the Octocat profile, as specified in the challenge requirements.

Theme preference is:

- Read from localStorage when available
- Otherwise derived from the user’s system preference using prefers-color-scheme

_What I Learned_

- How to correctly use ARIA live regions without causing unintended announcements
- Why large content containers should not be marked as live regions
- How small accessibility enhancements can significantly improve UX for screen reader users
- How syncing UI state with the URL improves navigation, shareability, and user confidence

### Continued development

Things I would like to improve or explore further:

- Improving accessibility (keyboard navigation and ARIA feedback)
- Adding loading states or skeleton UI
- Refactoring the JavaScript into smaller reusable utilities
- Improving error messaging based on specific API response codes

## Author

- Frontend Mentor - [repro123](https://www.frontendmentor.io/profile/repro123)
- Twitter - [Dr_Repro](https://www.twitter.com/Dr_Repro)
```
