let wrapper = document.querySelector(".wrapper")

getAll()


function getAll() {
    fetch("http://167.99.138.67:1111/getallposts")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showAllPosts(data.data)
         } )
}

function getUserPosts(event) {
    fetch("http://167.99.138.67:1111/getuserposts/" + event.target.innerText)
        .then(res => res.json())
        .then(data => {
            showAllPosts(data.data)
            wrapper.innerHTML += `
        
            <button class="backBtn" onclick="getAll()">Back</button>
            `
        } )
}


function getUserSinglePost(event) {
    fetch("http://167.99.138.67:1111/getsinglepost/" + event.target.dataset.author + "/" + event.target.dataset.postId)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            createSinglePost()
        } )
}

function createUser() {
    let user = {
        name: document.getElementById("name").value,
        passwordOne: document.getElementById("passwordOne").value,
        passwordTwo: document.getElementById("passwordTwo").value
    }

    fetch("http://167.99.138.67:1111/createAccount", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json()).then(data => console.log(data))
}

function loginUser() {
    let user = {
        name: document.getElementById("nameLogin").value,
        password: document.getElementById("passwordLogin").value,
    }

    fetch("http://167.99.138.67:1111/login", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json()).then(data => console.log(data))
}

function showAllPosts(usersArray) {
    wrapper.innerHTML = ''

    usersArray.map(item =>{
        wrapper.innerHTML +=`
             <div class="card">
                    <div><img src=${item.image} alt=${item.title}></div>
                    <div class="userName" onClick="getUserPosts(event)">${item.username}</div>
                    <div class="textCenter bestFont">${item.title}</div>
                    <div class="d-flex cCenter">
                        <button data-post-id=${item.id} data-author=${item.username} onclick="getUserSinglePost(event)">Visit Post</button>
                        <button>Delete</button>
                    </div>
             </div>
             <div></div>
        `
    })
}
function createSinglePost(usersArray){
    document.body.innerHTML = ''

    usersArray.map(item =>{
        wrapper.innerHTML +=`
             <div class="card">
                    <div><img src=${item.image} alt=${item.title}></div>
                    <div class="userName" onClick="getUserPosts(event)">${item.username}</div>
                    <div class="textCenter bestFont">${item.title}</div>
                    <div class="d-flex cCenter">
                        <button data-post-id=${item.id} data-author=${item.username} onclick="getUserSinglePost(event)">Visit Post</button>
                        <button>Delete</button>
                    </div>
             </div>
             <div></div>
        `
    })
}