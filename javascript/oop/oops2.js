class Person{   //created a "class" named person
    setPerson(name,gender,age) {  // created 3 "attributes" name,gender,age
    this.name=name;
    this.gender=gender;
    this.age=age;
    }
    printPerson(){  //created 2 "mthds" seetPerson and printPerson
      console.log(this.name,this.gender,this.age);
    }
}
 //create a object for the class. refferance is needed for object. exact copy of class is get in the object
  //var ref1=classname()
  var obj1=new Person();
  obj1.setPerson("ram","male",25) //will go to class setperson
  obj1.printPerson()

  var obj2=new Person()
  obj2.setPerson("arjun","male",26)
  obj2.printPerson();

  //...access obj1 attribute outside class
  //*** referance name used.  */
  //**to acess inside class this is used */

  //***this.age,this.gender,this.name  ==>instance variables(variables used by object)
  //***age,name,gender ==.local variable
  //***this keyword ==>used to point instant variables inside current class
 //***duty of setPerson()==.> initializing instance variables
  var obj3=new Person()
  obj3.setPerson("aru","female",26)
  obj3.printPerson();
  console.log(obj1.name,obj1.age,obj1.gender);



  //....student setStudent(rol,course,stud_name) printStudent
  class Student{
      setStudent(rol,course,stud_name){
          this.rol=rol;
          this.course=course;
          this.name=stud_name;
      }
      printStudent(){
          console.log(this.rol,this.course,this.name);
      }
  }

  var obj1=new Student();
  obj1.setStudent(001,"btech","manu")
  obj1.printStudent()

  var obj2=new Student();
  obj2.setStudent(002,"btech","sanu")
  obj2.printStudent()

  //**constructor ==> initialising instant variables */
  //              ==> constuctor is a mthd
  //              ==>keyword is constructor itself
  //              ==>no need of invoking(calling)constructor seperatly
  //              ==> constructor is invoked automaticaly when an object is created

  class Student{
    constructor(rol,course,stud_name){
        this.rol=rol;
        this.course=course;
        this.name=stud_name;
    }
    printStudent(){
        console.log(this.rol,this.course,this.name);
    }
}
  var obj=new Student("ram","female",32)
  obj.printPerson()
