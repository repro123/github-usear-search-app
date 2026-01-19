"use strict";

const API = "https://api.github.com/users/";

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
