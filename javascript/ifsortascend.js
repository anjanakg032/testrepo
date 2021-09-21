//...hw
// var num1=1,num2=5,num3=1;
// if((num1<num2)&(num1<num3)){
//     //num1 is largest, second possibility num2 or num3
//     if(num2<num3){
//       console.log(`${num1}<${num2}<${num3}`);
//     }
//     else if(num3<num2){
//         console.log(`${num1}<${num3}<${num2}`);
//     }
//     else{
//         console.log(`${num1}<${num2}=${num3}`);
//     }
// }
// else if((num2<num1)&(num2<num3)){
//     if(num1<num3){
//         console.log(`${num2}<${num1}<${num3}`);
//       }
//       else if(num3<num1){
//           console.log(`${num2}<${num3}<${num1}`);
//       }
//       else{
//           console.log(`${num2}<${num1}=${num3}`);
//       }
// }
// else if((num3<num1)&(num3<num2)){
//     if(num1<num2){
//         console.log(`${num3}<${num1}<${num2}`);
//       }
//       else if(num3<num1){
//           console.log(`${num3}<${num2}<${num1}`);
//       }
//       else{
//           console.log(`${num3}<${num1}=${num2}`);
//       }
// }
// else{
//     console.log(`${num1}=${num2}=${num3}`);





var num1=10,num2=20,num3=30;
if ((num1>num2)&(num1>num3)){
    //largest number num1
    if(num2>num3){
        console.log(num1,num2,num3);
    }
    else{
        console.log(num1,num3,num2);
    }

}
else if ((num2>num1)&(num2>num3)){
    //largest number num2
    if(num1>num3){
        console.log(num2,num1,num3);
    }
    else{
        console.log(num2,num3,num1);
    }

}
else if((num3>num2)&(num3>num1)){
    //largest number num3
    if(num2>num1){
        console.log(num3,num2,num1);
    }
    else{
        console.log(num3,num1,num2);
    }

}
