var num=29,c=0;
if(num>0){
    c=((num%10)*10)+c
    num=num/10;
    if(num>0){
        c=((num%10))+c
        num=num/10;
    }

}
console.log(c);