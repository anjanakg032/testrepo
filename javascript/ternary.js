var num=5;
// print num is +ve or -ve
if(num>0){
    console.log("+ve");
}
else if(num<0){
    console.log("-ve");
}
else{
    console.log("zero");
}

// ternary mthd
var res=num>0? "+ve":num<0? "-ve":"zero"
console.log(res);