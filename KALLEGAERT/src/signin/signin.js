
let utilisateur = {

}

const myHeaders = new Headers()
myHeaders.append('Content-Type', 'application/json')
myHeaders.append('Access-Control-Allow-Origin', '*')

const send = (event) => {
    event.preventDefault()
    for (let i = 0; i <= 5; i++) {
        utilisateur[event.target[i].name] = event.target[i].value

    }
    fetch('https://198.168.99.101:5000/api/users/', {
        method: 'POST',
        body: JSON.stringify(utilisateur),
        headers: myHeaders
    })
        .then(res => res.json())
        .then(utilisateur => {
            console.log(utilisateur)
            window.alert("Utilisateur enregisté !")
        })


}

document.querySelector('#MonForm').addEventListener
    ('submit', send)




