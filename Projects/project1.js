const button = document.querySelectorAll('.button')
const body = document.querySelector('body')


button.forEach(function(buttons){
    buttons.addEventListener('click',function(e){
        if(e.target.id === 'black'){
            body.style.backgroundColor = '#212121';
           }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            
        }
        if(e.target.id === 'purple'){
            body.style.backgroundColor = e.target.id;
            
        }
        if(e.target.id === 'orange'){
            body.style.backgroundColor = e.target.id;
            
        }
    })
})