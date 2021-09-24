arr1=[10,20,21,22] 
arr2=[11,12,20,21]
// print common elements from this array

for(let num1 of arr1){
    for(let num2 of arr2){
        if(num2==num1){
            console.log(num2);
        }
    }
}

//ternary mthd
// for(let num1 of arr1){
//     for(let num2 of arr2){
//         console.log(num2==num1? num2:'');
//     }
// }