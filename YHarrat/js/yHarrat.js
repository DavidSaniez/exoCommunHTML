
let concertArray = []

init = ()=>{
    fetch('assets/concerts.json')
    .then( resp => resp.json())
    .then(data => {
        data.forEach(concert => {
            concertArray.push(concert)

        });

        fillConcertsList()
    })
}



// Get Concert List
let cList = document.querySelector('#concertsList')

fillConcertsList = ()=>{
    concertArray.forEach( concert =>{
        let elem = document.createElement('li')

        //create a card Concert
        let card = document.createElement('div')
        card.classList = "card"

        let cardHeader = document.createElement('p')
        cardHeader.textContent = concert.name;
        cardHeader.style.color = "goldenrod"

        let cardBody = document.createElement('h4')
        cardBody.innerHTML = "City: "+concert.where+"<br>  Prévu le "+concert.prevu+" places restantes: "+concert.places;

        //appending to card
        card.appendChild(cardHeader)
        card.appendChild(cardBody)

        elem.appendChild(card)        
        elem.classList ="concert"
        // When the user clicks on a concert, open the modal
        elem.addEventListener('click', (event)=>{
            modal.style.display = "block"
        })
        cList.appendChild(elem)
    })
} 

// Get the modal
var modal = document.querySelector("#myModal");

// Get the button that opens the modal
// var btn = document.querySelector("#myBtn");

// Get the Concerts that opens the modal
let concerts = document.querySelectorAll('#concertsList>li')
console.log(concerts)


// When the user clicks on the button, open the modal
/*
btn.onclick = function() {
  modal.style.display = "block";
}
*/

// Get the <span> element that closes the modal
var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 

init()