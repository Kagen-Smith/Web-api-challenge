import { redirectPage } from './utils';
// TODO: Create a variable that selects the main element
// Remove the unused variable
// const mainBody = document.querySelector('main');

// Remove the unused function
// function buildAndAppendDOM(tagName, textContent, parentSelector) {
//   const element = document.createElement(tagName);
//   element.textContent = textContent;
//   const parentElement = document.querySelector(parentSelector);
//   parentElement.appendChild(element);
// }

// Remove the unused function
// function nullBlog() {
//   const mainBody = document.querySelector('main');

//   const blogPosts = localStorage('blogPosts');

//   if (!blogPosts || blogPosts.length === 0) {
//     const messageElement = document.createElement('p');
//     messageElement.textContent = 'No Blog posts yet...';
//     mainBody.appendChild(messageElement);
//   }
// }
// TODO: Create a function that reads from local storage and returns the data
function localStorage(key) {
  const data = localStorage.getItem(key);

  return JSON.parse(data);
}
// TODO: Call the function to render the list of blog posts
function renderBlogPosts() {
  const blogPosts = localStorage('blogPosts');

  const mainBody = document.querySelector('main');

  if (blogPosts && blogPosts.length > 0) {
    blogPosts.forEach(post => {

      const article = document.createElement('article');
      const h2 = document.createElement('h2');
      const blockquote = document.createElement('blockquote');
      const p = document.createElement('p');
      h2.textContent = post.title;
      p.textContent = post.content;
      article.appendChild(h2);
      blockquote.appendChild(p);
      article.appendChild(blockquote);
      mainBody.appendChild(article);
    });
  } else {
    const messageElement = document.createElement('p');
    messageElement.textContent = 'No Blog posts yet...';
    mainBody.appendChild(messageElement);
  }
};

backButton.addEventListener('click', function () {
  // redirect to first page if button clicked
  redirectPage('./index.html')
});
renderBlogPosts();
