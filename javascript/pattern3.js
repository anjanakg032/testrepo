for(let col=1; col<=4; col++){
    let str="";
    for(let row=1; row<=col; row++){
        str+=col;
    }
    console.log(str);
}


for(let i=1; i<=4; i++){
    let num=0;
    for (let j=1; j<=i; j++){
        num=num*10 + i;
    }
    console.log(num);
}