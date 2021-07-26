////////// INCREMENT //////////
////////// INCREMENT //////////
////////// INCREMENT //////////
function incrementButton(){
    var element = document.getElementById('counterText');
    var value = element.innerHTML;

    ++value;

    console.log(value)
    document.getElementById('counterText').innerHTML = value;
}

////////// REDUCTION //////////
////////// REDUCTION //////////
////////// REDUCTION //////////
function reductionButton(){
    var element = document.getElementById('counterText');
    var value = element.innerHTML;

    --value;

    console.log(value)
    document.getElementById('counterText').innerHTML = value;
}

////////// RESTART //////////
////////// RESTART //////////
////////// RESTART //////////
function restartButton(){
    var element = document.getElementById('counterText');
    var value = element.innerHTML;

    console.log(value)
    document.getElementById('counterText').innerHTML = 0;
}