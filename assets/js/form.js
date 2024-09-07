import { localStorage } from 'window';
// TODO: Create a variable that selects the form element
const error = document.getElementById('error')
const usernameId = document.getElementById('username')
const titleId = document.getElementById('title')
const bodyId = document.getElementById('bodyContent')
const submitId = document.getElementById('submit')
const blogRedirect = document.getElementById('back')

// set the url to blank. Define the storage
let redirectURL = '';
let infoStorage = [];

// initilize at page startup. Keeps infostorage from being overwritten to be blank
function initilize (){
  if (JSON.parse(localStorage.getItem('pageInformation')) !== null){
    console.log("Information inside")
    infoStorage = JSON.parse(localStorage.getItem('pageInformation'));
  };
  
  return infoStorage
};

function formSubmission(){
  let tempPageStorage = {username: usernameId.value, title: titleId.value, body: bodyId.value}
  infoStorage.push(tempPageStorage)

  // sends the collected information to local storage
  localStorage.setItem('pageInformation', JSON.stringify(infoStorage));
}

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

blogRedirect.addEventListener('click', function(){
  // redirect to the blog page if button pressed
  redirectPage('./blog.html')
});

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form values
  var username = document.getElementById('username').value;
  var title = document.getElementById('title').value;
  var content = document.getElementById('content').value;
  var errorElement = document.getElementById('error');

  // Check if any field is empty
  if (username === '' || title === '' || content === '') {
      errorElement.textContent = "Please complete the form.";
  } else {
      errorElement.textContent = ""; // Clear any previous error message
      // Proceed with form submission or other actions
  }
});

//initialize page. Prepare everything at page startup
initilize()