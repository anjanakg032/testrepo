function primenumber(low, upp){
for(let i=low; i<=upp; i++){
    let t=0;
    for(let j=2;j<i; j++){
        if(i%j==0){
            t+=1;
            break;
        }

    }
    console.log(t==0?i:" ");
    //return t==0? i:" " //only first prime number printed
}
}
console.log(primenumber(2,10));