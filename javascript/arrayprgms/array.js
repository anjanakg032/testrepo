//Datastructures
//.. Array is a datastructure
//it is possible to store same and different type of data/object
// size is not fixed
//inseration order is preserved;
// fetching array elements using its index (each element can be fetched seperatly with the help of index)
//array index starting from 0th index
//            0      1     2     3     4     5
var expenses=[10000,20000,30000,12000,34000,450000];
console.log(expenses);
var type=[10000,true,30000];
console.log(type);
//jan expense
console.log(expenses[1]);

// iterating through array
// for (let i=0;i<5;i++){
//     console.log(expenses[i]);//0.....5
// }
for (let i=0;i<expenses.length;i++){
    console.log(expenses[i]);//0.....5
 }


 var num=[2,5,6,9,4];
 console.log(num.length);

 // iterating in another way
 for(let amount of expenses){
     console.log(amount);
 }

 //find total expense
 var total=0;
 for(let amount of expenses){
     total+=amount;
 }
 console.log(total);

 //print all expenses <15000
 for(let amount of expenses){
     if(amount<15000){
         console.log(amount);
     }
 }

 // Add 300rs more with feb expense
 expenses[1]+=300;
 console.log(expenses);

 //inserting an element to end of the array
 expenses.push(22000)
 console.log(expenses);

 //remove an item from end
 expenses.pop()
 console.log(expenses);

 
