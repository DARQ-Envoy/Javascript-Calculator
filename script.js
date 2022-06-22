const input1 = document.querySelector(".input-1")
const input2 = document.querySelector(".input-2")
const  add = document.querySelector(".add")
const  minus = document.querySelector(".minus")
const  times = document.querySelector(".times")
const  divide = document.querySelector(".divide")
const  output = document.querySelector(".output")
const  note = document.querySelector(".note")


add.addEventListener("click", (event)=>{
    testingInput(event)
})
minus.addEventListener("click", (event)=>{
    testingInput(event)
})
divide.addEventListener("click", (event)=>{
    testingInput(event)
})
times.addEventListener("click", (event)=>{
    testingInput(event)
})

function testingInput(element){
    if(input1.value == ""){
        note.textContent="First input is empty"
        output.textContent=""
    }
    else if(input2.value == ""){
        note.textContent="Second input is empty"
        output.textContent=""
    }
    else if(isNaN(input1.value) || isNaN(input2.value)){
        note.textContent = "One or both of the inputed Values is not a number";
        console.log("Me")
        output.textContent=""
    }
    else{
        note.textContent= ""
        aritimetic(element)
    }

}
function aritimetic(evt){
    first = Number(input1.value)
    second= Number(input2.value)

    if(evt.target == add){
        output.textContent= first + second
    }
    else if(evt.target == minus){
        output.textContent= first - second
    }
    else if(evt.target == times){
        output.textContent= first * second
    }
    else if(evt.target == divide){
        output.textContent= first / second
    }


}