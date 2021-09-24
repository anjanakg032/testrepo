//hollow pyramid

for(let row=0;row<4;row++){
    let str=" "
    for(let col=0;col<7;col++){
        if(row==3){
            str+="*"
        }
        else if(col+row==3){
            str+="*"
        }
        else if(col-row==3){
            str+="*"
        }
        else{
            str+=" "
        }
        
    }
    console.log(str);
}