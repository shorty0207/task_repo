let wrapper= document.querySelector(".wrapper")

getUserPosts()

function getUserPosts() {
    const urlParams = new URLSearchParams(window.location.search);

    fetch("http://167.99.138.67:1111/getuserposts/" + urlParams.get('author'))
        .then(res => res.json())
        .then(data => {
            showAllPosts(data.data)

        } )
}

function showAllPosts(usersArray) {


    wrapper.innerHTML = ''

    usersArray.map(item =>{
        const date = new Date(item.timestamp)
        const dateString = date.toDateString()
        wrapper.innerHTML +=`
             <div class="particularPageContainer">
                <div>
                    <img src="${item.image}" alt="">
                </div>
            
                <div class="pPgDesc">
                    <div class="d-flex sBtw padding50">
                        <h4>${dateString}</h4>
                        
                        <h2> ${item.username}</h2>
                        
                    </div>
                    <div>
                        <h2 class="pPgTitle">${item.title}</h2>
                    </div>
                    <div>
            
                    <p class="colorGrey bestFont padding50">${item.description}</p>
                </div>
                <span class="d-flex cCenter">
                         <button class="visitBtn"><a href="singlePostPage.html?id=${item.id}&author=${item.username}" >Visit Post</a></button>
                 </span>
            </div>
        `
    })
}

