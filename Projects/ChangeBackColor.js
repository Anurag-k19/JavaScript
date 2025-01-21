const randomColor = () =>{
    const hex = '0123456789ABCDEF';
    let string = "#"

    for (let i = 0; i < 6; i++) {
        string += hex[Math.floor(Math.random()*16)]
        
    }
    return string
    
}

const start = document.getElementById('start')
const stop = document.getElementById('stop')

let IntervalID;
start.addEventListener('click',()=>{
    if(!IntervalID){
        IntervalID = setInterval(()=>{
            document.body.style.backgroundColor = randomColor()
        },1000)
    }
    
})

stop.addEventListener('click',()=>{
    clearInterval(IntervalID)
    IntervalID = null
})

