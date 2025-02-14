

let currentPlayer = "X"

let arr = Array(9).fill(null)

const cell = document.querySelectorAll('.box')

const restart = document.querySelector('#restart')


restart.addEventListener('click', ()=>{
    arr = Array(9).fill(null)

    cell.forEach(cells => {
         cells.innerText = ""
    });
    const existingMessage = document.querySelector('#para');
    if (existingMessage) existingMessage.remove(); 

    const drawMessage = document.querySelector('#para1');
    if (drawMessage) drawMessage.remove(); 

    currentPlayer = "X";
})

function checkWinner(){
    if( arr[0] !== null && arr[0]==arr[1] && arr[1] == arr[2] ||
        arr[3] !== null && arr[3]==arr[4] && arr[4] == arr[5] ||
        arr[6] !== null && arr[6]==arr[7] && arr[7] == arr[8] ||
        arr[0] !== null && arr[0]== arr[3] && arr[3] == arr[6] ||
        arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7] ||
        arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8] ||
        arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8] ||
        arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6]
    ){
        
        document.body.style.backgroundColor = "#212121";
       const p = document.createElement('p')
       p.id = "para"
       p.classList.add("title")
       p.textContent = `${currentPlayer} is Winner`;
       document.body.appendChild(p)
        return
    }

    if(!arr.includes(null)){
        document.body.style.backgroundColor = "#212121";
        const p1 = document.createElement('p')
        p1.id = "para1"
        p1.classList.add("title")
        p1.textContent = `Game Draw`;
        document.body.appendChild(p1)
        return
    }
}

function handleClick(e) {
    const id = Number(e.id)
    
    if(arr[id] !== null) {
        return
    }
    arr[id] = currentPlayer;
    e.innerText = currentPlayer
 
    
    checkWinner();
    currentPlayer = currentPlayer === "X" ? "0" : "X"
    
    
    
    
}