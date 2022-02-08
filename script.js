"use strict";

const inputText = document.querySelector("#input_text");
const outputText = document.querySelector("#output_text");
const operator = document.querySelector("#operator");
const generatorBtn = document.querySelector("#generate");

window.addEventListener("DOMContentLoaded", start);

function start(){
    console.log("clickGenerator");
    generatorBtn.addEventListener("click", generatorClick);
}

function generatorClick() {
    console.log("selector"); 
    let selectedOption = operator.value;
    let input = inputText.value

    if (selectedOption === "0"){
        outputText.value = input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
    }
    else if (selectedOption === "1"){
        outputText.value = input.substring(input.indexOf("0"), input.indexOf(" "));
    }
    else if (selectedOption === "2"){
        outputText.value = input.substring(input.indexOf("0"), input.indexOf(" ")).length + " letters";
    }
    else if (selectedOption === "3"){
        outputText.value = " startPosition: " + (input.indexOf(" ") + 1) + ", endPosition: " + (input.lastIndexOf(" ") - 1) + ", middleName: " + (input.substring(input.indexOf(" "), input.lastIndexOf(" ")));
        
    }
    else if (selectedOption === "4"){
        // outputText.value =
    }
    else if (selectedOption === "5"){
        // outputText.value =
    }
    else if (selectedOption === "6"){
        // outputText.value =
    }
    else if (selectedOption === "7"){
        // outputText.value =
    }
}
