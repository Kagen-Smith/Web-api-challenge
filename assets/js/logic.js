const lightDarkToggle = document.querySelector("#toggle");
const lightDark = document.querySelector("#lightDark");

const storedToggle = getToggleLocalStorage('lightDark'); // Add 'const' keyword

// Remove the duplicate declaration of 'toggle' variable
// let toggle; 

// Checks if there is anything stored, otherwise it defaults to "light" mode

if (storedToggle !== null){
    toggle = storedToggle;
} else {
    toggle = "light";
}

updateLocalStorage();

// Add an eventlistener to the sun or moon button for light/dark toggling

lightDarkToggle.addEventListener('click', function(event){
    const element = event.target;
    if (element.matches('button')) {
        if (toggle === "dark") {
            toggle = "light";
            updateLocalStorage();
        } else {
            toggle = "dark";
            updateLocalStorage();
        }
    }
})

// Updates the page to be light or dark whenever the button is pressed or the page is opened

function updateLocalStorage(){
    if (toggle === "dark") {
        lightDark.setAttribute('class', "dark");
        lightDarkToggle.innerHTML = "🌒";
        setToggleLocalStorage("lightDark", toggle);
    } else {
        lightDark.setAttribute("class", "light");
        lightDarkToggle.innerHTML = "☀️";
        setToggleLocalStorage("lightDark", toggle);
    }
}

// Gets the local storage and returns it
function getToggleLocalStorage(element){
    const mode = localStorage.getItem(element);
    return mode;
}

// Sets the local storage
function setToggleLocalStorage(element, variable){
    localStorage.setItem(element, variable);
}

// Function for redirecting the URL
let redirectURL = '';

const redirectPage = function (url) {
  location.assign(url);
};