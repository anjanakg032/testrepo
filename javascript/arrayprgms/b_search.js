var arr=[10,11,13,14,12]
var arr2=[10,11,13,14,12,100]
var arr1=[10,11,13,14,12,2,100,200]
arr1.sort()
arr2.sort()
arr.sort()
console.log(arr);
console.log(arr2);
console.log(arr1);


var arr3=[12,11,13,14,12,100,2,3,200]
//sort in ascending order 10=num1;11=num2 ==>num1-num2
//sort in descending order 10=num1;11=num2 ==>num2-num1
//here 10 and 11 taken as an object.

arr3.sort((num1,num2)=>num1-num2)
console.log(arr3);
