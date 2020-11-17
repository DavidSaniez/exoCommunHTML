
    const colpick = document.querySelectorAll('.colpick');
    const rightCol = document.querySelector('#rightCol');
    const leftCol = document.querySelector('#leftCol');

    // colpick.addEventListener('input', () => { 
    //     console.log('jj');
    //    rightCol.style.backgroundColor = colpick[2].value; 
    // });


  colpick.forEach(element => {
        element.addEventListener('input',()=>{
            element.parentElement.style.backgroundColor = element.value; 
        })
    });
    