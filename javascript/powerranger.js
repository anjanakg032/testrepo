//power ranger
//num=2 (2+22) op=24
//num=3 (3+33+333) op=369

var num=4;
var res="",sum=0;
for(let i=1;i<=num;i++){
    res=res*10+num
    sum+=res
}
console.log(sum);


//evaluate a valid expression - eval
var expr="10+20-2*3/2"
console.log(eval(expr));
