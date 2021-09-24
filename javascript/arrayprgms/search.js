arr=[10,11,12,15,13,14,15,11]
// search for 15, array element found or not found:-

var a=0
for(let num of arr){
a=num==15? a+=1:a;
}
console.log(a>0? "array element found":"array element not found");



//annother way by sir
var element=13,flag=0;
for(let num of arr){
    if(num==element){
       flag+=1
        break
    }
}
if(flag==0){
    console.log("element not found");
}
else{
    console.log("element found");
}

//above types of search is called LINEAR SEARCH
//elements not arranged in order. al elements are compared one by one
// this search is not efficient (every items need to be searched to get the answer) 
//complexity is more (time and search is wasting)


//BINARY SEARCH ALGORITHM
var arr=[10,11,13,14,12,15]
var element=13;
arr.sort((num1,num2)=>num1-num2)
var low=0, upp=arr.length-1;

flag=0
while(low<=upp){

mid=Math.floor((low+upp)/2);

if(element<arr[mid]){
    upp=mid-1;

}
else if(element>arr[mid]){
    low=mid+1

}
else if(element==arr[mid]){
    flag=1;
    break
}
}
console.log(flag==0?"element not found":"element found");