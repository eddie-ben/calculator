//Calculator Program

let display = document.getElementById("result");

const addToScreen = (value)=>{
    display.innerHTML = display.innerHTML + value
}

const calculate = ()=>{
    display.innerHTML = eval(display.innerHTML)
}

document.getElementById("btnce").addEventListener("click", ()=>{
    display.innerHTML = ""
})

// function clearDisplay(){
//     display.value = "";
// }


function backSpace() {
    display.innerHTML = display.innerHTML.slice(0, -1);
  }