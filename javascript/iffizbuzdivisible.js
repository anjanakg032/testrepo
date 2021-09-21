// var num=0;
// if(num==0){
// console.log('');
// }
// else if(num%15==0){
//     console.log('FizzBuzz');
// }
// else if(num%3==0){
//     console.log('Fizz');
// }
// else if(num%5==0){
//     console.log('Buzz');
// }

var num=5
var res=""//initialise the string
 
if(num%3==0){
    res+="fizz";//res=res+fizz
}
if(num%5==0){
    res+="buz"
}
console.log(res);