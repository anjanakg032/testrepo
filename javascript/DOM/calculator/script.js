// function displayValue(num){
//     let res=document.querySelector("#result")
//     result.value+=num   //result id  of textbox
// }     
// expect c and = all other buttons displayvalue should be called
var displayValue=(num)=>result.value+=num

// //fn for clear
// function clearbox(){
//  result.value=""
// }
var clearbox=()=>result.value=""


// function evaluateExpression(){
//     let expr=result.value //1-2-3+5
//     let out=eval(expr)  //eval function used in javascript to evaluate valid expression
//     result.value=out
// }
var evaluateExpression=()=>result.value=eval(result.value)