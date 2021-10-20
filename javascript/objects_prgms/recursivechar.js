var pattern="ABCABB"

//...find  first recursive (repeated) character 
var  word_count={}
for(let char of pattern){
    if(char in word_count){
        console.log(char,"is the first recursive character");
        break
    }
    else{
        word_count[char]=1
    }
}



//....find duplicate elements
var arr=[10,11,10,20,21,21]
var duplicates={}
var dupli=[]

for(let num of arr){
    if(num in duplicates){
    duplicates[num]+=1
    if(!(num in dupli)){
        dupli.push(num)
     }
    }
    else{
        duplicates[num]=1
    }
    // if(duplicates[num]>=2){
    //     if(!(num in dupli)){
    //        dupli.push(num)
    //     }
    // }
}
console.log(dupli);