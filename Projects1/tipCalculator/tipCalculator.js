const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()

const input = parseFloat(document.querySelector('#bill').value)
const tip = parseFloat(document.querySelector('#tip').value)


const result = document.querySelector('#result');

if(input < 0 || isNaN(input)){
    alert("please enter a valid Bill Amount!!!")
    document.querySelector('#bill').value =``
    return;
}

else if(tip < 0 || isNaN(tip)){
    alert("please enter a valid tip!!!")
    document.querySelector('#tip').value =``
    return;
}

else{
    const answer = input+(input*(tip/100));
    result.innerHTML = `<span>Total: </span> $${answer.toFixed(2)}`;
    document.querySelector('#bill').value =``
    document.querySelector('#tip').value =``
}

})