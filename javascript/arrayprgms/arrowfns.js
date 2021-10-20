// ARROW FUNCTIONS 
//anoymous function (it will not have name)

//normal function
function add(num1,num2){
    return num1+num2
}


//ARROW FN
(num1,num2)=>{
    return num1+num2
}

(num1,num2)=>{
    return num1*num2
}


//
(num)=>{
    return num**3
}

//since all have one line curly brace is not needed retrun also no needed
(num1,num2)=> num1+num2
//(num)=> num**3

//addition
var add=(num1,num2)=>num1+num2
console.log(add(10,20));

//to find square
var square=(num)=>num**2

//cube
var cube=(num)=>num**3

//division
var div=(num1,num2)=>num1/num2
console.log(div(3,1));


var name="arun"
function isStartWithA(name){
    //return true if name strat with a else return false
    if(name[0]=="a"){
        return true
    }
    else{
        false
    }
}


var isStartWithA=(name)=>name[0]=="a"?true:false



//even number
var isEven=(num)=>num%2==0?true:false;
console.log(isEven(46));

//odd number
var isOdd=(num)=>num%2!=0?true:false



function sub(num1,num2){
    return num1-num2
}
console.log(sub(50,100));//-50
//return positive value

//....subtrcat heighest value from lowest value

function sub(num1,num2){
    if(num1>num2){
        return num1-num2
    }
    else{
        return num2-num1
    }
}
console.log(sub(50,100));

//arrowfn
var sub=(num1,num2)=>num1>num2? num1-num2:num2-num1
console.log(sub(50,100));


//largest among 2
var largestAmongTwo=(num1,num2)=>num1>num2?num1:num2
