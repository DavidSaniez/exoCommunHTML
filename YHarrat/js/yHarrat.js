
let concertArray = [
  {
    "id": 1,
    "name": "Tournée en France",
    "prevu": "18/11/20",
    "places": 100,
    "where": "Paris"
    },
    {
        "id": 3,
        "name": "Tournée du Nord",
        "prevu": "20/11/20",
        "places": 20,
        "where": "Dunkerque"
    },
    {
        "id": 2,
        "name": "Tournée du Soleil Levant",
        "prevu": "19/11/20",
        "places": 5,
        "where": "Tokyo"
    }
]


/**
 * Bloc de code prêt pour l'extension au back: fetch pseudo-fonctionnel avec un fichier externe
 */
// init = ()=>{
//     fetch('assets/concerts.json')
//     .then( resp => resp.json())
//     .then(data => {
//         /*
//         data.forEach(concert => {
//            // concertArray.push(concert)
//         });
//         */
//         concertArray = Array.from(data)
//         fillConcertsList()
//     })
// }

init = ()=>{
  fillConcertsList()
}


// Get Concert List
let cList = document.querySelector('#concertsList')

fillConcertsList = ()=>{
  //vider la cList
  cList.innerHTML = "";
  
    concertArray.forEach( concert =>{
        
          let elem = document.createElement('li')

          //create a card Concert
          let card = document.createElement('div')
          card.classList = "card"
          card.style.backgroundColor= "white"
          card.style.width = "fit-content"
          card.style.margin = "1vw"
          card.style.border = "solid goldenrod 1px"
  
          let cardId = document.createElement('p')
          cardId.textContent = concert.id
          cardId.style.display = "none"
  
          let cardHeader = document.createElement('p')
          cardHeader.textContent = concert.name;
          cardHeader.style.color = "goldenrod"
  
          let cardBody = document.createElement('h4')
          cardBody.innerHTML = "City: "+concert.where+"<br>  Prévu le "+concert.prevu+" places restantes: "+concert.places;
  
          //appending to card
          card.appendChild(cardId)
          card.appendChild(cardHeader)
          card.appendChild(cardBody)
  
          elem.appendChild(card)        
          elem.classList ="concert"
          // When the user clicks on a concert, open the modal
          elem.addEventListener('click', (event)=>{
              modal.style.display = "block"
              modal.children[0].children[2].lastElementChild.addEventListener('click', (event)=>{  
                // update places value
                concertArray.filter(c => c.id==elem.children[0].children[0].textContent)[0].places--;
                fillConcertsList()
                
                //redisplay updated info
                
              })
          })
          cList.appendChild(elem)
    })
  
 
} 



// Get the modal
var modal = document.querySelector("#myModal");




// Get the button that opens the modal
// var btn = document.querySelector("#myBtn");




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
//window.addEventListener('load',fillConcertsList())
