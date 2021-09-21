function secondLargestAmongThree(num1,num2,num3){
    if((num1>num2)&(num1>num3)){
        return num2>num3? num2:num3;
    }
    else if((num2>num3)&(num2>num1)){
        return num1>num3? num1:num3;
    }
    else if((num3>num1)&(num3>num2)){
        return num1>num2? num1:num2;
    }
    else{
        return "not sure"
    }
}
console.log(secondLargestAmongThree(35,35,20));