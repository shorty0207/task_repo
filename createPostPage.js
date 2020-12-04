

function createPost() {
    let user = {
        title: document.getElementById("title").value,
        image: document.getElementById("image").value,
        description: document.getElementById("description").value,
        secretKey: sessionStorage.getItem('secretKey')

    }


    fetch("http://167.99.138.67:1111/createpost", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json()).then(data => {
        if (data.success) {
          window.location.href = '/task_repo/index.html'
        } else {
          document.getElementById('error').innerText = data.message
        }
    } )
}