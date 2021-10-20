var test="hhaaii hhooww haaii"   //print hai how hai
var splits=test.split(" ")

console.log(splits);
var st=new Set()
//for(let n=0;n<=splits.length;n++){
st.add(test)
//}
console.log(splits);

//split word with space
//add to set so no duplicates will be there



//*** SET
//       ==> duplicate elements cannot be there in the array (unique elements)
//       ==> in set elements are accepted as array
//       ==> any number of elements can be added
//       ==> st  => indicate set  
//          ex:  st.add()

// has ==> to check whether a value present in the set
//clear
//delete
//add

// for adding elements to the set  .... this interface alrdy present inside
// class Set{
//     add(object){   //for adding values to the set

//     }
//     has(){

//     }....
// }

// var st=new Set()
// st.add(10)  //  only one argument can be given @ a time
// st.add(30)
// st.add(10)
// st.add("hello")
// console.log(st);  //ot put will be 10 30  hello



// function set(...args){  //... is spread operator 
//     console.log(args);
// }
// set(10,20,30,40,50)


// //....to print sum of set
// function add(...args){  //spread operator
//     return args.reduce((num1,num2)=>num1+num2)
// }
// console.log(add(10,20,60,40,50));

// //...to check 10 present in set
// console.log(st.has(10));    // out put will be boolean fn


// //....output should be heighest value
// function getMax(...args){
//     return args.reduce((num1,num2)=>num1>num2?num1:num2)

// }
// console.log(getMax(10,11,12,13,14))


