function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPost(data))
}

function displayPost(posts){
    const postContainer = document.getElementById('posts-container')

    for(const post of posts){
        const postDiv = document.createElement('div');

        postDiv.classList.add('post')

        console.log(post)

        postDiv.innerHTML= `
            <h4>User-${post.userId}</h4>
            <h5>Post: title-${post.title}</h5>
            <p>Post Description -${post.body}</p>
        `;
        postContainer.appendChild(postDiv);
}
   
}
/*
1. get the container element where you want to add the new elements
2. create child element
3. set innerText or innerHTML
4. appendChild
*/

loadPost();

function deletePost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'DELETE',
    })
}

// function pathcApost(){
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'PATCH',
//         body: JSON.stringify({
//             title: 'foo',
//         }),
//         headers: {
//             'content-type' : 'application/json; charset=UTF-8',
//         }
//     }
// }

function crateAPost(){
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
}