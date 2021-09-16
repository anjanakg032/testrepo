var num=2,low=8,upp=27;
//1........upp
for(let i=1;i<=upp;i++){//i=2 3 4 5 6
    //1**2
    //2**2
    //3**2
    let res=i**num;//1**2=1 res=4 9 16 25 36
    if(res>upp){
        break;
    }
    if((res>=low)&(res<=upp)){
        console.log(i);//3 4 5 
    }
}


