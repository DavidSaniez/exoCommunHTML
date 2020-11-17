let imgLinks = "";
const imgContainer = document.querySelector('#cards');
const addBtn = document.querySelector('#newImg');
const removeBtn = document.querySelector('#deleteImg');
const inputUrl = document.querySelector('#imgurl');
const alert = document.querySelector('#alert')
let imgs;
let imgArray = new Array;

const createImg = () => {
  const newImg = document.createElement('img');
  newImg.src = imgLinks;
  imgContainer.appendChild(newImg);
  imgs = document.querySelectorAll('img');
  imgArray = Array.from(imgs);
  buttonProperties()
}

const deleteImg = () => {
  imgArray.pop().remove()
  buttonProperties()
}

const isUrl = (url) => {
  if(url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)){
    alert.style.display = 'none'
  imgLinks = url  
  createImg()
  }
  else{
    alert.style.display = 'block'
  }
}

const buttonProperties = () => {
  if(imgArray.length < 1){
    removeBtn.disabled = true;
  }else{
    removeBtn.disabled = false;
  }
}

const init = () => {
  buttonProperties()

  addBtn.addEventListener('click', () => {
    isUrl(inputUrl.value)
  })

  removeBtn.addEventListener('click', deleteImg)
}

window.addEventListener('load', init)
