let wrapper= document.querySelector(".wrapper")

getUserPosts()

function getUserPosts() {

    const urlParams = new URLSearchParams(window.location.search);

    fetch("http://167.99.138.67:1111/getuserposts/" + urlParams.get('author'))
        .then(res => res.json())
        .then(data => {
            showAllPosts(data.data)
            wrapper.innerHTML += `
        
            <button class="backBtn" onclick="getAll()">Back</button>
            `
        } )
}

function showAllPosts(usersArray) {
    wrapper.innerHTML = ''

    usersArray.map(item =>{
        wrapper.innerHTML +=`
             <div class="card">
                    <div><img src=${item.image} alt=${item.title}></div>
                    <div class="userName"><a href="particularUserPage.html?author=${item.username}" >${item.username}</a></div>
                    <div class="textCenter bestFont">${item.title}</div>
                    <div class="d-flex cCenter">
                         <button><a href="singlePostPage.html?id=${item.id}&author=${item.username}" >Visit Post</a></button>
                        <button>Delete</button>
                    </div>
             </div>
             <div></div>
        `
        // onClick="getUserPosts(event)">${item.username}

        // data-post-id=${item.id} data-author=${item.username} onclick="getUserSinglePost(event)"
    })
}

function getAll() {
    fetch("http://167.99.138.67:1111/getallposts")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            showAllPosts(data.data)
        } )
}