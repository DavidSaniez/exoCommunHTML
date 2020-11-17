
let concertArray = []

init = ()=>{
    fetch('assets/concerts.json')
    .then( resp => resp.json())
    .then(data => {
        /*
        data.forEach(concert => {
           // concertArray.push(concert)
        });
        */
        concertArray = Array.from(data)
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
        card.style.backgroundColor= "white"
        card.style.width = "fit-content"
        card.style.margin = "1vw"
        card.style.border = "solid goldenrod 1px"

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
