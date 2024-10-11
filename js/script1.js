const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("#posts-container");


function sendHTTPRequest(method, url, data) {
    try{
  return fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
} catch(error) {
    console.log(error);
}
}

async function fetchPosts() {
    const responseData = await sendHTTPRequest("GET", "https://jsonplaceholder.typicode.com/posts");
    const listOfPosts = responseData;
    for (const post of listOfPosts) {
       const postContainer =  document.createElement("article");
       postContainer.id = post.id
       postContainer.classList.add("post-item");

       const postTitle = document.createElement("h2");
        postTitle.textContent = post.title;

       const postBody = document.createElement("p");
        postBody.textContent = post.body;

       const postButton = document.createElement("button");
       postButton.textContent = "DELETE Content"

       postContainer.append(postTitle);
       postContainer.append(postBody);
       postContainer.append(postButton);

       postList.append(postContainer);
    }
}

fetchButton.addEventListener("click", fetchPosts);