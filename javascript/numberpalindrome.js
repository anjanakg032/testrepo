// 123
// modulus
// floor

var num=123;
while(num!=0){//123 !=10  12!=10 1!=10 0!=0
    // mod
    var digit=num%10;//digit=3 2 1
    console.log(digit);//3 2 1
    num=Math.floor(num/10)//12 1 0

}

var num=123;
var res=" ";
while(num!=0){
    let digit=num%10;//digit=3 2 1
    res+=digit;//3 2 1
    num=Math.floor(num/10)//12 1 0

}
console.log(res);

var num=123;
var res=0;
while(num!=0){
    let digit=num%10;//digit=3 2 1
    res=res*10+digit;//3 2 1
    num=Math.floor(num/10)//12 1 0

}
console.log(res);