// NESTED ARRAY

var accounts=[
    [1000,"ram",15000,"savings"],
    [1001,"ravi",25000,"savings"],
    [1002,"akhil",30000,"current"],
    [1003,"nkhil",35000,"current"],
]

// print ac_names
for(let account of accounts){
    console.log(account[1]);
    
}

//print names whose ac_type=savings
for(let account of accounts){
    if(account[3]=="savings"){
        console.log(account[1]);
    }
}

//print names whose balance >20000
for(let account of accounts){
    if(account[2]>20000){
        console.log(account[1]);
    }
}