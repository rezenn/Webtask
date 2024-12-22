const display = document.getElementById("display");
display.textContent = "";


function AddToDisplay(input){
    display.textContent += input;
}

function Clear(){
    display.textContent = "";
}
function Calculate(input){
    try{
        display.textContent = eval(display.textContent);
    }
    catch(error){
        display.textContent = "Error";
    }
}
function Remove() {
    display.textContent = display.textContent.slice(0, -1);
}
