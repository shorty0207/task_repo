const registerCardOuter = document.querySelector('#registerCardOuter')
let modalEditing = document.querySelector("#modalEditing")

function editPost(event) {
    const data = {
        title: document.getElementById("title").value,
        image: document.getElementById("image").value,
        description: document.getElementById("description").value,
        secretKey: sessionStorage.getItem('secretKey'),
        id: event.target.dataset.id
    }

    fetch("http://167.99.138.67:1111/updatepost", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
        if(data.success){
            window.location.href = `/task_repo/singlePostPage.html?id=${event.target.dataset.id}&author=${sessionStorage.getItem('currentUser')}`
        }else {
            document.querySelector('.editingPageError').innerText = data.message
        }
    } )
}

function loadData() {
    const urlParams = new URLSearchParams(window.location.search);

    fetch("http://167.99.138.67:1111/getsinglepost/" + urlParams.get('username') +'/' + urlParams.get('id') )
        .then(res => res.json())
        .then(data => {
            registerCardOuter.innerHTML += `
        
            <div id="registerCardInner">
            <p class="textCenter bestFont fontSize30 marginTop60 colorGreen">Edit your post</p>

            <div class="textCenter d-flex flexColumn cCenter">
                <label for="title"></label>
                <input type="text" id="title" class="nameInput" value="${data.data.title}" placeholder="Title">

                <label for="image"></label>
                <input type="text" id="image" class="nameInput" value="${data.data.image}" placeholder="Image">

                <label for="description"></label>
                <input type="text" id="description" class="nameInput" value="${data.data.description}" placeholder="Description">
                
                <span class="editingPageError"></span>

                <button id="signUp" data-id="${data.data.id}" onclick="openEditPostModal(event)" >Update Post</button>
                
                
            </div>

        </div>
            
            `
        } )
}
function openEditPostModal(event){


    modalEditing.innerHTML += `
            <div class="editModal">
                    <div class="modalText">Are you sure you want to update this post?</div>
                    <div class="d-flex">
                    <button class="btnYes" data-id=${event.target.dataset.id} onClick=editPost(event)>Yes</button>
                    <button class="btnNo" onclick="stayOnEditingPage(event)">NO</button>
                    </div>
                </div>
    `
}

function stayOnEditingPage(event){
    modalEditing.innerHTML = ''
}
// editPost(event)
loadData()