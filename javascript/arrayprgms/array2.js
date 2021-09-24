var arr=[2,3,4,5,6]

//..FILTER ..even number from this array (this is an condition)
//.....when we apply a condition over all elemnets in the array we can use FILTER

//print all numbers >2 (filter is used here, every element is checked whether it is >2 )

//print squares of each number in the array(no condition is used)- all objects coresponding output is printed- MAPPING is used
//print cubes of each number in the array(no condition is used)
// ..MAPPING.. with out checking condition, for every object  equvalent output is there it is called mapping

//print all employee names whose name starts with a (filter is used)
//print developer names only(filter applied)

//print all employee names (mapp)
//print bouns of 2000rs for all employees (mapping )
//add incentive of 5000rs for mrkt team(filter)
//experience of each employee(mapping)
//convert all emplyee name into capital letter(mapping)


var arr=[2,3,4,5,6]
//squares of each number in the array

var square=[]
for(let num of arr){
    square.push(num**2)
}
console.log(square);


//find square of one number
var squares=(num)=>num**2
//if one parameter is there no need to put bracket around num

//map(function)
var square=arr.map((num)=>num**2)
console.log(square);

//cube of array number
var cube=(num)=>num**3
var cubes=arr.map(cube)
console.log(cubes);

//another mthd
var cubes=arr.map((num)=>num**3)
console.log(cubes);

