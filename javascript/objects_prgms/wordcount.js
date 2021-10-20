var text="hai hello hai hello"

// ...print word count  (hai:2,hello:2)
// to convert this to array split it 
var words=text.split(" ") //if this is not given each letter is checked and output will be {h:4,a:2,i:2,' ':3,e:2,l:4,o:2}
//console.log(words);
//   var words=["hai" "hello" "hai" "hello"] 
 var word_count={};
for (let word of text){
    if(word in word_count){
word_count[word]+=1
}
else{
word_count[word]=1  // word_count.word sometims shows undefined

}
}
console.log(word_count);


//another method
var word_count={}
text.split(" ").map(word=>word in word_count?word_count[word]+=1:word_count[word]=1)
console.log(word_count);