let imgLinks = "";
const imgContainer = document.querySelector('#cards');
const addBtn = document.querySelector('#newImg');
const removeBtn = document.querySelector('#deleteImg');
const inputUrl = document.querySelector('#imgurl');
const alert = document.querySelector('#alert')
let imgs;
let imgArray = new Array;

const createImg = () => {
  const newDiv = document.createElement('div');
  newDiv.className = 'img_wrapper'
  imgContainer.appendChild(newDiv)
  

  const closeButton = document.createElement('img');
  closeButton.src = "https://www.seekpng.com/png/small/52-521758_open-close-button-png-white.png";
  closeButton.width = '50';
  closeButton.className = 'close';
  closeButton.addEventListener('click', (e) => {
    deleteExactImg(e)
  })


  const newImg = document.createElement('img');
  newImg.src = imgLinks;
  newImg.className = 'realImg'
  newDiv.appendChild(newImg);

  newDiv.appendChild(closeButton);


  imgs = document.querySelectorAll('.realImg');
  imgArray = Array.from(imgs);
  buttonProperties()
}

const deleteImg = () => {
  imgArray.pop().remove()
  buttonProperties()
}

const deleteExactImg = (e) => {
  e.target.parentNode.remove()
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
