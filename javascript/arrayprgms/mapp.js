var arr=[2,4,6,3] //op [13,11,9,12]

var total=0;
for(let num of arr){
    total+=num
}
// total=15 15-2=13 15-4=11 15-6=9  15=2=12
var op=[]
for(let num of arr){
    let res=total-num
    op.push(res)
}
console.log(op);


