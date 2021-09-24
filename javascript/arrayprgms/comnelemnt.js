var arr1=[10,11,12,20,21,40]
var arr2=[20,21,22,23,40]
//find common element

var count=0;//to check number of iterations
for(let num1 of arr1){
    //10
    for(let num2 of arr2){
        //20
        if(num1==num2){
            console.log("common element",num1);
        } 
        count++;//works n2 times 
    }
}
console.log(count);
// complexity is more here(time complexity is more)
//space complexity

arr1.sort((no1,no2)=>no1-no2)
arr2.sort((no1,no2)=>no1-no2)

var pos1=0,pos2=0;
var count=0;

while((pos1<arr1.length)/(pos2<arr2.length)){
    if(arr1[pos1]==arr2[pos2]){
        console.log(arr1[pos1]);
        pos1++
        pos2++
    }
    else  if(arr1[pos1]<arr2[pos2]){
        pos1++
    }
    else  if(arr1[pos1]>arr2[pos2]){
        pos2++
    }
    count++
}
console.log("iteration",count);