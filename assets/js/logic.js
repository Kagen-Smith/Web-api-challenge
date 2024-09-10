// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
const toggle = document.getElementById("toggle");
const page = document.getElementById("page");

let mode = readMode() || "light";

saveMode();
writeMode();

toggle.addEventListener("click", function () {
  mode = mode === "light" ? "dark" : "light";
  saveMode();
  writeMode();
});

function saveMode() {
  localStorage.setItem("mode", mode);
}

function readMode() {
  return localStorage.getItem("mode");
}

function writeMode() {
    page.className =  mode; 
    toggle.textContent = mode === "light" ? "🌙" : "☀️"

};


// TODO: Create a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
function readLocalStorage() {
  return JSON.parse(localStorage.getItem("blogs") || "[]");
}

// TODO: Create a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage(blog) {
  let blogs = readLocalStorage();
  blogs.push(blog);
  localStorage.setItem("blogs", JSON.stringify(blogs));
}

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = 'blog.html';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};