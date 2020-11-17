//Carousel

//Selection des elements du DOM
const img_container     = document.querySelector('#img-con');
const nextButton        = document.querySelector('#next');
const prevButton        = document.querySelector('#prev');

// Tableaux d'images
const images = ['slide.jpg','slide1.jpg', 'slide2.jpg', 'slide3.jpg', 'slide4.jpg']

// on stock le tableaux d'image dans une variable
let i = images.length; 

// fonction le boutton "next"
nextButton.onclick = () => {
    i = (i<images.length) ? (i = i+1) : (i=1);
    img_container.innerHTML = "<img class='img' src=media/"+images[i-1]+">";
}

// fonction le boutton "prev"
prevButton.onclick = () => {
    i = (i<images.length +1 && i>1) ? (i = i-1) : (i = images.length);
    img_container.innerHTML = "<img class='img' src=media/"+images[i-1]+">";
}



//Reseaux social
(function(){

    var popupCenter = function(url, title, width, height){
        var popupWidth = width || 640;
        var popupHeight = height || 320;
        var windowLeft = window.screenLeft || window.screenX;
        var windowTop = window.screenTop || window.screenY;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
        var windowHeight = window.innerHeight || document.documentElement.clientHeight;
        var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2 ;
        var popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
        var popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
        popup.focus();
        return true;
    };

    document.querySelector('.share_facebook').addEventListener('click', function(e){
      e.preventDefault();
      var url = this.getAttribute('data-url');
      var shareUrl = "https://www.facebook.com/sharer/sharer?u=" + encodeURIComponent(url);
      popupCenter(shareUrl, "Partager sur facebook");
    });

    document.querySelector('.share_gplus').addEventListener('click', function(e){
        e.preventDefault();
        var url = this.getAttribute('data-url');
        var shareUrl = "https://plus.google.com/share?url=" + encodeURIComponent(url);
        popupCenter(shareUrl, "Partager sur Google+");
    });

    document.querySelector('.share_linkedin').addEventListener('click', function(e){
      e.preventDefault();
      var url = this.getAttribute('data-url');
      var shareUrl = "https://www.linkedin.com/shareArticle?url=" + encodeURIComponent(url);
      popupCenter(shareUrl, "Partager sur Linkedin");
    });

})();