let wrapper = document.querySelector(".wrapper")
let modalSpot = document.querySelector("#modalSpot")


getUserSinglePost()


function getUserSinglePost() {
    const urlParams = new URLSearchParams(window.location.search);

    fetch("http://167.99.138.67:1111/getsinglepost/" + urlParams.get('author') + "/" + urlParams.get('id'))
        .then(res => res.json())
        .then(data => {
            visitPost(data.data)
            wrapper.innerHTML += `
        
          
            `
        } )
}

function deleteButton(item) {
    if (item.username === sessionStorage.getItem('currentUser')) {
        return `<button class="myDeleteBtn" data-id=${item.id} onClick=openDeleteModal(event) >Delete</button>
<button class="myPostBtn" data-id=${item.id} onClick=window.location.href="/task_repo/pageForEditing.html?id=${item.id}&username=${item.username}">Edit Post</button>
`
    }
    else {
        return ''
    }
}

function deletePost(event) {
    const data = { secretKey: sessionStorage.getItem('secretKey'), id: event.target.dataset.id }

    fetch("http://167.99.138.67:1111/deletepost", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then(data => {
            window.location.href = '/task_repo/index.html'
        } )
}

function stayOnPage(event) {
    modalSpot.innerHTML = ''
}

function openDeleteModal(event) {
       modalSpot.innerHTML +=  `<div class="deleteModal">
                    <div class="modalText">Are you sure you want to remove this post?</div>
                    <div class="d-flex">
                    <button class="btnYes" data-id=${event.target.dataset.id} onClick=deletePost(event)>Yes</button>
                    <button class="btnNo" onclick="stayOnPage(event)">NO</button>
                    </div>
                </div>
`

}

function visitPost(item) {
    const date = new Date(item.timestamp)
    const dateString = date.toDateString()

    wrapper.innerHTML = ''

    wrapper.innerHTML +=`
             <main class="padding50 sPgMain">
        <div class="singlePageContainer d-flex">
            <div><img src="${item.image}" alt=""></div>
            <div class="sPgSideParagraph">
                <div>
                    <div><b>ABOUT ME</b></div>
                    <p class="colorGrey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ipsum quaerat quibusdam quod. </p>
                </div>
                <div><b>FOLLOW US</b></div>
                <div class="colorGrey">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eligendi .</div>
                <div class="d-flex flexColumn sPgSideButtons">
                    <a href="http://facebook.com" target="_blank"><button class="colorBlue">FACEBOOK</button></a>
                    <a href="http://twitter.com" target="_blank"><button class="colorIndigo">TWITTER</button></a>
                    <a href="http://instagram.com" target="_blank"><button class="colorSalmon">INSTAGRAM</button></a>
                    <a href="http://rs.com" target="_blank"><button class="colorOrange">RS</button></a>
                </div>
            </div>
        </div>
        <div class="d-flex">
            <div class="width900 lineUnder" >

                <div class="sPgText">
                    <span class="bestFont bold">${dateString}/</span>
                    <span class="colorFontBlue bold">${item.username}</span>
                </div>

                <div class="sPgText">
                    <h2 class="bestFont bold">${item.title}</h2>
                </div>

                <div class="sPgDescription">
                    <p class="colorGrey sPgText">${item.description}</p>
                </div>

                <div class="sPgText">
                    <h2 class="bestFont bold textCenter">Where do new ideas come from? The answer is simple: differences. Creativity comes from unlikely juxtapositions.</h2>
                </div>

                <div class="sPgDescription">
                    <p class="colorGrey sPgText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci aliquid consectetur eius facere fuga id ipsam itaque labore, laudantium officia, pariatur perspiciatis repudiandae. Alias, animi aperiam culpa dolorem ducimus error fugiat incidunt libero natus perferendis perspiciatis repudiandae sed veniam? Deserunt eius explicabo incidunt iure laboriosam libero modi, nobis repellat suscipit tenetur. Debitis expedita officia quidem. Ad asperiores, cumque deserunt dignissimos et expedita magnam maiores nemo, nihil nobis quas tempora voluptate voluptatem. Aut commodi dicta eaque error explicabo illum magnam placeat, quas sapiente voluptate. Assumenda atque consequuntur culpa delectus deleniti deserunt dignissimos doloremque dolores esse excepturi, exercitationem hic magni molestiae mollitia nulla officiis provident sapiente sit. Facere illum mollitia numquam provident qui quis sunt tempore? Accusantium aut culpa cupiditate enim est, et fugiat laudantium obcaecati officia porro quos sit tenetur?</p>
                </div>
                
                ${deleteButton(item)}
            </div>

            <div class="sPgSider">
                <div class="textCenter bold bestFont">LATEST POSTS</div>
                <div class="padding20 padding5 paddingTop20">
                    <a href="https://www.instagram.com/p/CCezOPBlLbw/" target="_blank"><img src="https://instagram.fvno2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/106720078_719904725515060_8683686061001631077_n.jpg?_nc_ht=instagram.fvno2-1.fna.fbcdn.net&amp;_nc_cat=104&amp;_nc_ohc=S3Uk7bTQexsAX_HsWoo&amp;tp=1&amp;oh=dc3f9e6f59a3dcc4ad99391819c7fa94&amp;oe=5FF14868" alt=""></a>
                    <a href="https://www.instagram.com/p/CBoZeDqF6JJ/" target="_blank"><img src="https://instagram.fvno2-1.fna.fbcdn.net/v/t51.2885-15/e15/104335204_257825965314069_3929317761000311739_n.jpg?_nc_ht=instagram.fvno2-1.fna.fbcdn.net&amp;_nc_cat=109&amp;_nc_ohc=_ot1EumgEswAX9mBZ-l&amp;tp=1&amp;oh=e1533e8e3e08c74ae1bd39c683228c0a&amp;oe=5FEFE630" alt=""></a>
                    <a href="https://www.instagram.com/p/CAgTU9jFHcd/" target="_blank"><img src="https://instagram.fvno2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/98330036_561009544593017_4597438676168452744_n.jpg?_nc_ht=instagram.fvno2-1.fna.fbcdn.net&amp;_nc_cat=105&amp;_nc_ohc=4VvJZ-tRxW8AX8QL8db&amp;tp=1&amp;oh=471ebed2bc697bec48d7a372af65c63a&amp;oe=5FF2B96B" alt=""></a>
                    <a href="https://www.instagram.com/p/B_XhsmmFz33/" target="_blank"><img src="https://instagram.fvno2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/94454827_835621676847174_8735538933968024920_n.jpg?_nc_ht=instagram.fvno2-1.fna.fbcdn.net&amp;_nc_cat=106&amp;_nc_ohc=aUmImJzXl_8AX8UwxtB&amp;tp=1&amp;oh=7a898ea8f7a3736df013f04996af6c66&amp;oe=5FF294B8" alt=""></a>
                    <a href="https://www.instagram.com/p/B-KUZk2HmiL/" target="_blank"><img src="https://instagram.fvno2-1.fna.fbcdn.net/v/t51.2885-15/e15/90718206_621142328468703_2095233350303260196_n.jpg?_nc_ht=instagram.fvno2-1.fna.fbcdn.net&amp;_nc_cat=103&amp;_nc_ohc=mB6iqeXfKWsAX_N9sDI&amp;tp=1&amp;oh=b0ecd0d6b29f2cbf1c0e71ef96ec6201&amp;oe=5FF2F527" alt=""></a>
                    <a href="https://www.instagram.com/p/B8ZHOiNDtgg/" target="_blank"><img src="https://instagram.fvno2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/84103089_185744909306264_1009187915742929198_n.jpg?_nc_ht=instagram.fvno2-1.fna.fbcdn.net&amp;_nc_cat=108&amp;_nc_ohc=KVz2EOy6NEgAX-5OH3_&amp;tp=1&amp;oh=4590b753c3feef79e0da6988dea740c3&amp;oe=5FF0D42C" alt=""></a>
                    <a href="https://www.instagram.com/p/B7bUm08lvS1/" target="_blank"><img src="https://instagram.fvno2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/81626799_163986158225786_5935984570975667267_n.jpg?_nc_ht=instagram.fvno2-1.fna.fbcdn.net&amp;_nc_cat=102&amp;_nc_ohc=w0bHbpaJD4QAX8t1Nca&amp;tp=1&amp;oh=12f2cf23d0a56ddf7800c59d12c486e7&amp;oe=5FF15EA3" alt=""></a>
                    <a href="https://www.instagram.com/p/B4ixKH1FPEX/" target="_blank"><img src="https://instagram.fvno2-1.fna.fbcdn.net/v/t51.2885-15/e15/73040687_248648196098501_1598392407970602764_n.jpg?_nc_ht=instagram.fvno2-1.fna.fbcdn.net&amp;_nc_cat=105&amp;_nc_ohc=bBpTgosoFjAAX9QZfEF&amp;tp=1&amp;oh=20d76476acde270bfbcea202b92812c7&amp;oe=5FF2818D" alt=""></a>

                </div>
            </div>
        </div>
    </main>
             
        `

}


