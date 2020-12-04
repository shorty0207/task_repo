let wrapper = document.querySelector(".wrapper")

getAll()

function getAll() {
    fetch("http://167.99.138.67:1111/getallposts")
        .then(res => res.json())
        .then(data => {
            showAllPosts(data.data)
         } )
}

function showAllPosts(usersArray) {
    wrapper.innerHTML = ''

    usersArray.map(item =>{
        wrapper.innerHTML +=`
             <div class="card">
                  <div>
                        <img src=${item.image} alt=${item.title}>
                  </div>
                  <div class="marginTop">
                         <span class="goToBloggerPage">Visit blogger page <i class="fas fa-long-arrow-alt-right"></i></span>
                         <span class="userName"><a href="particularUserPage.html?author=${item.username}">${item.username}</a></span>
                         <span class="d-flex cCenter">
                         <button class="visitBtn"><a href="singlePostPage.html?id=${item.id}&author=${item.username}" >Visit Post</a></button>
                         </span>
                    
                   </div>
                        
             </div>
        `
    })
}

