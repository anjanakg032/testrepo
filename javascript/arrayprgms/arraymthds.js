


var arr=[2,3,4,5,6]

//..FILTER ..even number from this array (this is an condition)
//.....when we apply a condition over all elemnets in the array we can use FILTER

//print all numbers >2 (filter is used here, every element is checked whether it is >2 )

//print squares of each number in the array(no condition is used)- all objects coresponding output is printed- MAPPING is used
//print cubes of each number in the array(no condition is used)

// ....MAPPING.. with out checking condition, for every object  equvalent output is there it is called mapping../

//print all employee names whose name starts with a (filter is used)
//print developer names only(filter applied)

//print all employee names (mapp)
//print bouns of 2000rs for all employees (mapping )
//add incentive of 5000rs for mrkt team(filter)
//experience of each employee(mapping)
//convert all emplyee name into capital letter(mapping)


var arr=[2,3,4,5,6]

//....squares of each number in the array
var square=[]
for(let num of arr){
    square.push(num**2)
}
console.log(square);


//....find square of one number
var squares=(num)=>num**2
//if one parameter is there no need to put bracket around num

//....map(function)
var square=arr.map((num)=>num**2)
console.log(square);

//....cube of array number
var cube=(num)=>num**3
var cubes=arr.map(cube)
console.log(cubes);

//another mthd
var cubes=arr.map((num)=>num**3)
console.log(cubes);



var arr=[2,3,4,5,6,7]

//print even number from array
// var isEven=num=>num%2==0
// var evens=arr.filter(isEven)

//another easy mthd
var evens=arr.filter(num=>num%2==0)
console.log(evens); // output [2,4,6]

//output when map is used
var evens=arr.map(num=>num%2==0)
console.log(evens); //output [true,false,true,false,true]


//...//print all numbers greater than 3
var nums=arr.filter(num=>num>3)
console.log("greater than 3",nums);


//....print all names start with a
//var a_names=names.filter(name=>name[0]=='a')
//console.log('names start with a', a_names);


//....print all odd numbers
var odd_num=arr.filter(num=>num%2!=0) //num%2!==0 also correct
console.log('odd numbers',odd_num);


//....print squares of all even number
var sq_even=arr.filter(num=>num%2==0).map(num=>num**2)
console.log(sq_even);


//***SORT

//sort array
arr.sort((num1,num2)=>num1-num2)


//*** REDUCE */
// FINAL OUTPUT WILL BE A SINGLE VALUE

//....sum of this array
var total=arr.reduce((no1,no2)=>no1+no2)
console.log('sum of numbers',total);

//....maximum value OF array
var max=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(max);

//...min value
var min=arr.reduce((no1,no2)=>no1<no2?no1:no2)
console.log(min);


//*** FIND */
//TO SEARCH WHETHER A ELEMENT IS PRESENT IN THE ARRAY OR NOT 
//OCCURANCE OF A SINGLE OBJECT IS CHECKED

//** SOME */
//TO CHECK WHETHER THE CONDITION IS CORRECT OR NOT AND PRINT THE BOOLEAN VALUE(TRUE OR FALSE)

//** FOREACH */
//PRINT EACH ELEMENT WE NEED AS OUTPUT FROM EACH ARRAY
//NOT IN ARRAY FORMAT
//NO NEED OF ADDING NEW VARIABLE







