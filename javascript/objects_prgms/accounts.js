var accounts=[
    [1000,"ram","savings",50000,true],
    [1001,"ravi","current",40000,true],
    [1002,"nikil","savings",1000,false],
    [1003,"jain","current",34000,false],
    [1004,"ajesh","savings",55000,true]
]

// sort the users wrt balance
var bal=accounts.sort((num1,num2)=>num1[3]-num2[3])
console.log(bal);

// print details of acno=1004
var acc=accounts.filter(num=>num[0]==1004)
console.log(acc);

// is there any person with balance < 2000
var bal=accounts.filter(account=>account[3]<2000).map(account=>account[1])
console.log(bal);

// print name of users with in_active account
var acc=accounts.filter(acc=>acc[4]==false).map(acc=>acc[1])
console.log(acc);

// print details of user with max balance

// print details of users with acc_type as savings anad balance > 25000