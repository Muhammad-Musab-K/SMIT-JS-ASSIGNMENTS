// Q no 1

let studentData = {
    Name:"Musab",
    Class: 13,
    Field: "computer science",
    Student_Id : 129353
}
alert(studentData.Name)

// Q no 2

let name = prompt("Enter Your  name ")
let age = +prompt("Enter your age")
let obj = {
    studentName : name,
    StudentAge: age
}
if(obj.StudentAge <= 20 ){
    alert(obj.studentName + " is egligible for Module A")
}
else{
    alert(obj.studentName + " is not egligible for Module A")
}

// Q no 3



let Student_One  ={

Student_Name :"Zia Khan",

Student_ID : "J30052425300",

Subject_HTML : 80,

Subject_CSS : 90,

Subject_JS : 90,

Subject_BT :  70,

Total_Marks : 400

 }

let Student_Two = {

Student_Name : "Jamal",

Student_ID : "J30052425390",

Subject_HTML : 30,

Subject_CSS : 80,

Subject_JS : 75,

Subject_BT:  50,

Total_Marks : 400

 }

 function percentage(h1,h2,h3,h4){
    return (h1+h2+h3+h4)*100/400
 }
  let first = percentage(Student_Two.Subject_HTML ,Student_Two.Subject_CSS,Student_Two.Subject_JS,Student_Two.Subject_BT)

 let sec = percentage(Student_One.Subject_HTML ,Student_One.Subject_CSS,Student_One.Subject_JS,Student_One.Subject_BT)

 if(first < sec){
    alert("Student name : "+Student_One.Student_Name + " is egligible for scholarship")
 }
else{
    alert("Student name : "+Student_Two.Student_Name + " is egligible for scholarship")
}

// Q no 4

var arr = [
    {name: 'Asher', age: 22},
    {name: 'Zubair', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 17},
    {name: 'Hanzala', age: 28}
    ]
    
    // i) Replace the 3rd index with {name: 'Siddiq', age: 23}
    // ii) Push {name: 'Umair', age: '23'} from the end
    // iii) Remove the first element
    // iv) Add a field createdAt: new Date() with each through loop.

    //1)
      for(let i=0;i<arr.length;i++){
       if(arr[i].name === 'wasif'){
        arr[i].name='siddiq'
        arr[i].age=23
       }
    }
    console.log(arr)

    //2)
    arr.push({name: 'Umair', age: '23'})
    console.log(arr)

    //3)
     arr.shift()
     console.log(arr)

    //4)
    
    for(let i=0;i<arr.length;i++){
        arr[i].date = new Date()
        
    }
    console.log(arr)

    
// Q no 5
var arr = [
    {name: 'Asher', age: 22},
    {name: 'Zubair', age: 20},
    {name: 'Kashif', age: 23},
    {name: 'Wasif', age: 18},
    {name: 'Hanzala', age: 28}
    ]
    arrTwo = []
for(let i=0;i<arr.length;i++){
    if(arr[i].age <=28 && arr[i].age>=18){
       if(arr[i].name.indexOf("f") != -1){
        arrTwo.push(arr[i].name)
       }
    }
    
}
console.log(arrTwo.toString())

// Q no 6

var students = [
{
_id: 'std1',
name: 'Bill Gates',
age: 30
}
,
{
_id: 'std2',
name: 'Steve Jobs',
age: 30
},
{
_id: 'std3',
name: 'Suzanne Collins',
age: 30
}];

var courses = [
    {
    name: 'Maths',
    std_id: ['std3', 'std1']
    },
    {
    name: 'Computer Science',
    std_id: ['std3', 'std2']
    },
    {
    name: 'Commerce',
    std_id: ['std1']
    },
    ]

// for(let i=0;i<students.length;i++){
//     if(students[i]._id == 'std1' || students[i]._id == 'std3'){
//         students[i].courses = "Maths"
//     }
//     if(students[i]._id == 'std2' || students[i]._id == 'std3'){
//         students[i].courses = "Computer Science"
//     }
//     if(students[i]._id == [i'std1'){
//         students[i].courses = "Commerce"
//     }
// }



// we can also do this by this method 


for(let i =0;i<students.length;i++){
    students[i].courses = []
    for(let j=0;courses.length;j++){
        if(students[i]._id == courses[j].std_id.includes(students[i]._id)){
          students[i].courses.push(courses[j].name)
        }
    }
}
console.log(students)