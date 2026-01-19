"use strict";

const API = "https://api.github.com/users/";

const html = document.documentElement;

const form = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchInputMsg = document.querySelector("#search-error-msg");
const successDiv = document.querySelector("#success-div");
const errorDiv = document.querySelector("#error-div");

const githubProfileImage = document.querySelector("#github-profile-image");
const githubName = document.querySelector("#name");
const githubUserName = document.querySelector("#user-name");
const githubJoinedDate = document.querySelector("#joined-date");
const githubBio = document.querySelector("#bio");
const githubRepos = document.querySelector("#repositories");
const githubFollowers = document.querySelector("#followers");
const githubFollowing = document.querySelector("#following");
const githubLocation = document.querySelector("#location");
const githubTwitterLink = document.querySelector("#twitterLink");
const githubWebsite = document.querySelector("#website");
const githubCompany = document.querySelector("#company");

const toggleModeBtn = document.querySelector("#toggleModeBtn");
let inputVal;

toggleModeBtn.addEventListener("click", function () {
  const currentTheme = html.classList.contains("dark") ? "dark" : "light";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.classList.remove("dark", "light");
  html.classList.add(newTheme);
  localStorage.setItem("theme", newTheme);
});

function validateInput() {
  let isValid = true;
  inputVal = searchInput.value.trim();
  searchInputMsg.textContent = "";
  searchInput.setAttribute("data-invalid", "false");

  if (!inputVal) {
    isValid = false;
    searchInput.setAttribute("data-invalid", "true");
    searchInputMsg.textContent = "Search input can not be empty";
  }

  return isValid;
}

searchInput.addEventListener("input", validateInput);
searchInput.addEventListener("blur", validateInput);

async function fetchData(username) {
  const res = await fetch(API + username);
  if (!res.ok) {
    throw new Error("No results");
  }
  const data = await res.json();
  return data;
}

async function initApp() {
  try {
    const data = await fetchData(inputVal);
    renderData(data);
  } catch (error) {
    console.error(error, error.message);
    searchInputMsg.textContent = error.message;
    searchInput.setAttribute("data-invalid", "true");
    showErrorUI(errorDiv, successDiv);
  }
}

async function renderData(data) {
  console.log(data);
  githubName.textContent = data.name || data.login;

  githubProfileImage.src = data.avatar_url;
  githubProfileImage.alt = data.name;

  githubUserName.textContent = `@${data.login}`;

  const joinedDate = new Date(data.created_at);

  githubJoinedDate.textContent = `Joined ${joinedDate.toLocaleDateString(
    "en-GB",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    },
  )}`;

  githubBio.textContent = data.bio || "This user has no bio";

  githubRepos.textContent = data.public_repos;
  githubFollowers.textContent = data.followers;
  githubFollowing.textContent = data.following;

  githubLocation.textContent = data.location || "Not available";
  githubLocation.classList.toggle("opacity-80", !data.location);

  githubTwitterLink.innerHTML = data.twitter_username
    ? `
    <a href="https://x.com/${data.twitter_username}" target="_blank" class="hover:underline inline-block w-full">https://x.com/${data.twitter_username}</a>
    `
    : `
    <span class="opacity-80">Not available</span>
    `;

  githubWebsite.innerHTML = data.blog
    ? `
    <a href="${data.blog}" target="_blank" class="hover:underline inline-block w-full">${data.blog}</a>
    `
    : `
    <span class="opacity-80">Not available</span>
    `;

  githubCompany.innerHTML = data.company
    ? `
    <a href="https://github.com/${data.company.slice(1)}" target="_blank" class="hover:underline inline-block w-full">https://github.com/${data.company.slice(1)}</a>
    `
    : `
    <span class="opacity-80">Not available</span>
    `;

  showSuccessUI(errorDiv, successDiv);
}

function showErrorUI(error, success) {
  error.classList.remove("hidden");
  error.classList.add("flex");
  success.classList.add("hidden");
  success.classList.remove("grid");
}

function showSuccessUI(error, success) {
  error.classList.add("hidden");
  error.classList.remove("flex");
  success.classList.remove("hidden");
  success.classList.add("grid");
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!validateInput()) return;

  console.log("form submitted");
  initApp();
});

searchInput.value = "octocat";
inputVal = "octocat";
initApp();
