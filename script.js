

document.addEventListener("DOMContentLoaded",function(){

const numbers =document.querySelectorAll(".digit");
const display=document.querySelector(".clear");
let displayValue="";

numbers.forEach(button => {
    button.addEventListener("click",()=>{
    const num =button.textContent.trim();

    if(displayValue==="0"){
        displayValue=num;
    }
    else{
        displayValue += num;
    }
    display.textContent=displayValue;
        });
});


const  numberButton=document.querySelectorAll(".digit");
const clearButton=document.querySelector(".del");
const equalButton=document.querySelector(".eq");
const operatorButton=document.querySelectorAll(".op");

let firstNumber="";
let secondNumber="";
let currentOperator="";
let  isEnteringSecond=false;

clearButton.addEventListener("click",()=>{
    firstNumber="";
    secondNumber="";
        currentOperator="";
        isEnteringSecond=false;
    display.textContent=0;
});
numberButton.forEach(button=>{
    button.addEventListener("click",()=>{
        const v=button.textContent
        if(!isEnteringSecond){
        firstNumber +=v;
        display.textContent=firstNumber;
        }else{
            secondNumber += v;
            display.textContent =secondNumber;
        }
    })
})
operatorButton.forEach(button=>{
    button.addEventListener("click",()=>{
        currentOperator=button.textContent.trim();
        isEnteringSecond=true;
    })
})
    equalButton.addEventListener("click",()=>{
        display.textContent=operate(currentOperator,Number(firstNumber),Number(secondNumber));
    });
 operate=(operator, a, b) =>{
    if(operator==="+"){
        return add(a, b);
    }else if(operator==="-"){
return subtract(a, b);
    }else if(operator==="*"){
        return multiply(a, b); 
    }else if (operator==="/"){
 return divide(a, b);
    }else if(operator==="%"){
return a % b;
    }else{
return "SyntaxError";
    }
}
add=(a,b)=>{
    return a+b;
}
subtract=(a,b)=>{
    return a-b;
}
multiply=(a,b)=>{
    return a*b;
}
divide=(a,b)=>{
    if(b==0){
        return "error";
    }else{
 return a/b;
    }
}

});