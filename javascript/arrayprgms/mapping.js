var arr=[2,3,4,6,7,8] //op[1,2,3,7,8,9]
//if num<5 mapp into num-1 else num>5 map num+1

// for(let num of arr){
//     if (num<5){
//         console.log(num-1);
//     }
//     else{
//         console.log(num+1);
//     }    
// }
// console.log(arr);
var op=[]
for(let num of arr){
    if (num<5){
         op.push((num-1))
    }
    else{
       op.push((num+1));
    }    
}
console.log(op);

//5 is there
var arr1=[2,3,4,6,5,7,8]  //op=[1,2,3,5,7,8,9]
var op1=[]
for(let num of arr1){
    if (num<5){
         op1.push((num-1))
    }
    else if(num>5){
       op1.push((num+1));
    }  
    else{
        op1.push(num)
    }  
}
console.log(op1);

//ternary operator
for (let num of arr1){
    num<5? op.push(num-1):num>5? op.push(num+1):op.push(num)
}
console.log(op1);
    



