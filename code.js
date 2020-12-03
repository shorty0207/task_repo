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
        } )
}


function getUserSinglePost(event) {
    fetch("http://167.99.138.67:1111/getsinglepost/" + event.target.dataset.author + "/" + event.target.dataset.postId)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            createSinglePost(data.data)
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
    }).then(res => res.json()).then(
        data => {
          sessionStorage.setItem('secretKey', data.secretKey)
          sessionStorage.setItem('currentUser', user.name)
          window.location.href = '/task_repo/index.html'
        }
    )
}

function showAllPosts(usersArray) {
    wrapper.innerHTML = ''
    usersArray.map(item =>{

        wrapper.innerHTML +=`
             <div class="card">
                    <div><img src=${item.image} alt=${item.title}></div>
                  
                        <span class="goToBloggerPage">Go to the blogger page <i class="fas fa-long-arrow-alt-right"></i></span>
                            <span class="userName"><a href="particularUserPage.html?author=${item.username}" >${item.username}</a></span>
                   
                    <span class="d-flex cCenter">
                         <button class="visitBtn"><a href="singlePostPage.html?id=${item.id}&author=${item.username}" >Visit Post</a></button>
                       
                    </span>
             </div>
             <span></span>
  
        `
        // onClick="getUserPosts(event)">${item.username}

        // data-post-id=${item.id} data-author=${item.username} onclick="getUserSinglePost(event)"
    })
}
function createSinglePost(item){
    wrapper.innerHTML = ''

        wrapper.innerHTML +=`
             <div class="card">
                    <div><img src=${item.image} alt=${item.title}></div>
                    <div class="userName" onClick="getUserPosts(event)">${item.username}</div>
                    <div class="textCenter bestFont">${item.title}</div>
                    <div class="d-flex cCenter">
                        <button data-post-id=${item.id} data-author=${item.username} onclick="getUserSinglePost(event)">Visit Post</button>
                    </div>
             </div>
             <div></div>
        `

}
