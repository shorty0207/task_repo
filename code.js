


function getAll() {
    fetch("http://167.99.138.67:1111/getallposts")
        .then(res => res.json())
        .then(data => console.log(data))
}

getAll()


function createUser() {
    let user = {
        name: "Lebron",
        passwordOne: "beardMan",
        passwordTwo: "2325698"
    }

    fetch("http://167.99.138.67:1111/createAccount", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content - Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json()).then(data => console.log(data))
}
createUser()