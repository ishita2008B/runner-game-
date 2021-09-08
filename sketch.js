class Student 
{
  constructor(name,age,grade){
    this.name = name 
    this.age = age
    this.grade = grade
  }
 display(){
   console.log(this.name)
   console.log(this.age)
   console.log(this.grade)
 } 
}
var S1;
var S2;

function setup() {
  createCanvas(400,400);
  S1 = new Student("john",12,6)
  S1.display();
  S2 = new Student ("ishita",13,7)
  S2.display();

}

function draw() 
{
  background(30);
  
}