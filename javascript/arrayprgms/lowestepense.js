// print lowest expense
var expenses=[10000,12000,20000,17000,22000,14000,12000,13000]
let low_exp=expenses[0];
for (let amount of expenses){
    if(low_exp>amount){//10000>10000 10000>12000,10000>20000 10000>7000,7000>22000,7000>4000,4000>12000
         low_exp=amount//low_exp=7000,4000
    }
}
console.log(low_exp)

//print height expense
let high_exp=expenses[0]
for (let amount of expenses){
    if(high_exp<amount){//10000<10000 10000<12000,12000<20000
         high_exp=amount//low_exp=12000
    }
}
console.log(high_expenses);


//find average
var total_exp=0;
for(let amount of expenses){
    total_exp+=amount;
}
console.log(toal);

