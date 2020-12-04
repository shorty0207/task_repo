
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
    }).then(res => res.json()).then(data => {
        if (data.success){
            window.location.href = '/task_repo/index.html'
        }else{
            document.querySelector('.errorRegister').innerText = data.message
        }
    })
}