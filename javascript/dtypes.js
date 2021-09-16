var age=25;//.......integer
var average=10.5;//..float
var c_name="ltb";//..string
var is_active=true;//boolean
//datatypes in javascript
// number, string, boolean, undefined, null
//typeof(variable_name)
console.log(typeof(age)); //number
console.log(typeof(average));//number
console.log(typeof(c_name));//string
console.log(typeof(is_active));//boolean


var num1=10;
var num2="10";
console.log(num1==num2?"both are same":"not same"); // both are same
if(num1===num2){//== content comparison  ....strict match ===
    console.log("both are same")
}
else{
console.log("both are not same")
}