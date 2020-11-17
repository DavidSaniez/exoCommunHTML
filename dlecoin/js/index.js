const imgLinks = "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg";
const imgContainer = document.querySelector('#cards');

const createImg = () => {
  const newImg = document.createElement('img');
  newImg.src = imgLinks;
  imgContainer.appendChild(newImg);
}

const displayImg = (n) => {
  for (let i = 0; i < n; i++) {
    createImg()
  }
}

window.addEventListener('load', () => {
  displayImg(9)
})
