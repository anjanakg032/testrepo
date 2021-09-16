var num=123;
var res=0;
while(num!=0){
    let digit=num%10;//digit=3 2 1
    res=res+(digit**3);//3 2 1
    num=Math.floor(num/10)//12 1 0

}
console.log(res);