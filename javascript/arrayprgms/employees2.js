var employees=[
    [1000,"ram",15000,"hour",1990,2000],
    [1001,"ravi",25000,"hour",1989,2005],
    [1002,"akhil",30000,"developer",2000,2010],
    [1003,"nkhil",35000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010]
]

//print name of all employees
var employee_names=employees.map(emp=>emp[1])
console.log(employee_names);
