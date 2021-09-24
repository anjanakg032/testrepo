var employees=[
    [1000,"ram",15000,"hour",1990,2000],
    [1001,"ravi",25000,"hour",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nkhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010]
]

//print number of employees
console.log(employees.length);


//print number of develpoer
var developer_count=0
for(let employee of employees){
 if(employee[3]=="developer"){
     developer_count+=1;
 }
}
console.log("developers =", developer_count);


//print experience of each employee
for(let employee of employees){
    console.log("exp",employee[5]-employee[4]);
}


//print height salary
var a=0;
for(let employee of employees){
    if(employee[2]>a){
        a=employee[2]
    }
}
console.log("highest salary =",a);


//print lowest salary
var lowest_salary=employees[0][2]
for(let employee of employees){
    if(lowest_salary>employee[2]){
        lowest_salary=employee[2]

    }
}
console.log("lowest salary ",lowest_salary);


//print name of emoloyee who is taking highest salary
var a=0,n="";
for(let employee of employees){
    if(employee[2]>a){
        a=employee[2]
        n=employee[1]
    }
    
}
console.log(n);


//print name of develpoer who is making heighest salary
var a=0;
for(let employee of employees){
    if(employee[3]=="developer"){
        if(employee[2]>a){
            a=employee[2]
            n=employee[1]
         }
    }
}
console.log("name of developer with high salary", n);


//print name of highst exp employee
var a=0,b=0,c=""
for(let employee of employees){
    a=employee[5]-employee[4]
    if(a>b){
        b=a;
        c=employee[1]
    }
}
console.log("name of high exp employee",c);



//print total sum of salary group by developers
var a=0;
for(let employee of employees){
 if(employee[3]=="developer"){
     a+=employee[2]
 }
}
console.log("sum of salary of developer",a);


