var employees=[
    [1000,"ram",15000,"hour",1990,2000],
    [1001,"ravi",25000,"hour",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nkhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010]
]

//....print name of all employees
var employee_names=employees.map(emp=>emp[1])
console.log(employee_names);


//....print develpoer details
var developers=employees.filter(employ=>employ[3]=='developer')
console.log('details of develpoer',developers); //*** entire array or entire object is returned while using filter***

var emp_name=employees.map(employ=>employ[3]=='developer')
console.log('details of develpoer',emp_name); // *** only name of developers are printed as a array when map is used***
                                              // output [false,false,true,true,false,false,false]


// *** reduce - used when the given array is iterated and result is a single value  (ex:- heighest value, lowest value, sum of values)*** 



//....print names of ba  
//var analyst =employees.filter(emp=>emp[3]=='ba')  //output will be 2 arrays of tom and jack
var analyst =employees.filter(emp=>emp[3]=='ba').map(emp=>emp[1]) // output [tom, jack]
console.log('names of ba',analyst);


//....developer names
var developer_name=employees.filter(emp=>emp[3]=='developer').map(emp=>emp[1]) 
console.log('names of developer',developer_name);


//....print developer names whose exp> 6 yrs
var devel_name=employees.filter(emp=>emp[3]=='developer').filter(emp=>(emp[5]-emp[4]>6)).map(emp=>emp[1])
console.log("developers above 6 yrs exp",devel_name);



//....add bonus of 5000 rs to all developers

employees.filter(emp=>emp[3]=='developer').map(emp=>emp[2]+5000)
console.log(employees);  //value is not changing

var bonus=employees.filter(emp=>emp[3]=='developer').map(emp=>emp[2]+5000)
console.log(bonus);
console.log(employees);//value changed


//sort

//....sort employee with respect of experience in ascending order and descending order
employees.sort((emp1,emp2)=>(emp2[5]-emp2[4])-(emp1[5]-emp1[4]))
console.log(employees);
// asecnding order
employees.sort((emp1,emp2)=>(emp1[5]-emp1[4])-(emp2[5]-emp2[4]))
console.log(employees);

// sort emploee with respcet to salary(ascending)
employees.sort((emp1,emp2)=>emp2[2]-emp1[2])
console.log(employees);

// // sort developers with respect to salary
var emp=employees.filter(emp=>emp[3]=='developer').sort((emp1,emp2)=>emp1[2]-emp2[2])
console.log(emp);
