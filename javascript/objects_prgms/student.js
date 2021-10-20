var student={
    roll:100,
    name:"nikhil",
    course:"bca",
    total:750
}
//here student is an object

// print name of student and course
console.log(student.name);
console.log(student.course);

//....update total to 800
student.total=800;

//.... check grade key present or not
console.log("grade" in student);

//add new key value pair (grade,A+)
student["grade"]="A+"
//student.grade="b"
console.log(student);

//...add 20 marks of bouns
student.total+=20
console.log(student);




var studentt={
    roll:1000,
    student_name:"ram",
    course:"MEARN STACK"
}

//.....check batch key is present or not, if not add batch mearnstack aug
if("batch" in studentt){
    console.log("true");
}
else{
    studentt.batch="mearnstack_aug"
}

//another mthd
if(! ("batch" in studentt)){
    studentt.batch="mearnstack_aug"
}
console.log(studentt);

//iteration
for(let key in student){
    console.log(key);
    console.log((student[key]));
}