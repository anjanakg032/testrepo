alert("hello world")

//...list items color to red color
var liitems=document.getElementsByTagName("li") //selected in the form of object
for(let item of liitems){
    item.style.color="red"
}

// h2 element style to green color
var hthrees=document.getElementsByTagName("h2") // consist of more than one object
for(let tag of hthrees){
    tag.style.color="green"
}