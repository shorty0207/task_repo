


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
            if(data.success) {
                sessionStorage.setItem('secretKey', data.secretKey)
                sessionStorage.setItem('currentUser', user.name)
                window.location.href = '/task_repo/index.html'
            } else {
                document.querySelector('.loginError').innerText = data.message
            }
        }
    )
}