let input = document.querySelector("input")


function addValue(element){

    input.value += element;

}

function clearValue(){
    input.value = "";
}

function deleteCharacter(){
    input.value = input.value.slice(0,input.value.length-1)
}

function evaluateValue(){
    input.value = eval( input.value) ;
}