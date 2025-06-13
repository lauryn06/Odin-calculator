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
operate=(operation,a,b)=>{
if(operation==="+"){
   return  add(a,b);
}
else if(operation==="-"){
   return subtract(a,b);
}
else if(operation==="*"){
    return multiply(a,b);
}
else if(operation==="/"){
     return divide(a,b);

}else{
    return "error";
}

}
console.log(operate("+",4,6));
console.log(operate("-",4,6));
console.log(operate("/",4,6));
console.log(operate("*",4,6));

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
});

