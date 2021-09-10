var num1=10,num2=20;
if(num1>num2){
    console.log('is largest');
}
else if(num2>num1){
    console.log('num2 is largest');
}
else{
    console.log('both number is equal');
}

// among 3 numbers
var num1=10,num2=20,num3=30;
if((num1>num2)&(num1>num3)){
    console.log(`${num1} highest`);
}
else if((num2>num1)&num2>num3){
    console.log(`${num2} highest`);
}
else if((num3>num1)&(num3>num2)){
console.log(`${num3} highest`);
}
else{
    console.log('all are equal');
}