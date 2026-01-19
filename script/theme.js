const html = document.querySelector("html");

const preferredTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("prefers-color-scheme: dark").matches
  ) {
    return "dark";
  }
  return "light";
};

console.log(preferredTheme());

html.classList.add(preferredTheme());
