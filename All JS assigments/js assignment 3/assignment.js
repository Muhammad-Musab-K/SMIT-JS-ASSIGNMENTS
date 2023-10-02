// Qno1 

let name = prompt("Enter your name ")
alert("Hi , " + name)

//Qno2

let num = prompt("Enter a number")

if (num === "") {
    num = 5
}
alert(num + " x 1 = " + num * 1)
alert(num + " x 1 = " + num * 2)
alert(num + " x 1 = " + num * 3)
alert(num + " x 1 = " + num * 4)
alert(num + " x 1 = " + num * 5)

// Qno3

let city = prompt("Enter city name")

if (city === "Karachi") {
    alert("Welcome to city of light")
}
else if (city) {
    alert("Welcome to  " + city)
}
else {
    alert("sorry")
}

//Qno4
let gender = prompt("Enter your gender")

if (gender === "male") {
    alert("Good Morning Sir!")
}
else if (gender === "female") {
    alert("Good Morning Ma'am!")
}
else {
    alert("please enter either in smallcase or correct so get you get greet ")
}

//Qno5

let light = prompt("Enter the color of traffic to know the meaning of color")

if (light === "red") {
    alert("Vehicle Must stop")
}
else if (light === "yellow") {
    alert("Vehicle should ready to move")
}
else if (light === "green") {
    alert("Vehicle should move now ")
} 
else{
    alert("Please enter color form red , yellow , green")
}

//Qn6

let maxAge = 50
let minAge = 18
let age = prompt("What's your age ?")

if (age<maxAge && age>minAge){
    alert("You are Welcome")
}
else if(age<minAge || age>maxAge){
    alert("You are not allowed")
}
else {
    alert("write your age in number")
}

//Qno7
let fuel = prompt("How much fuel is left in your car!")

if (fuel < 0.25){
    alert("Please refill the fuel in your car ! Thank You")
}
else if (fuel > 0.25){
alert("Enjoy driving")
}
else {
    alert("Please enter the quantity of the fuel left")
}

// Qno8
//  a  true
//  b false
//  c false, true , false , true
//  d true
//  e true , false , 
//  f true

//Qno9

let html = prompt("Marks in HTML")
let css = prompt("Marks in css")
let js = prompt("Makrs in JS")
let total = prompt("Total marks")
let obtainMarks = +html + +css + +js
let percentage = obtainMarks / total * 100

if (percentage >= 80){
    alert("Wow Excellent! You got A+ grade")
}
else if (percentage >= 70){
    alert("Wow Good! You got A grade")
}
else if (percentage >= 60){
    alert("Improve yourself! You got B grade")
}
else {
    alert("failed")
}



// Qno10

let priceOfTshirt = 1000
let usbPrice = 600
let tshirtQuantity = prompt("Enter the quantity of T-shirt")
let usbQuantity = prompt("Enter the quatity of USB")
let shippingCharges = 150
let totalAmount = 600 * usbQuantity + 1000 * tshirtQuantity + shippingCharges
if (totalAmount > 2000){
 let discount =     totalAmount- [totalAmount*10/100] 
 alert("The total cost is " + totalAmount + " with the discount of 10% = " + discount)
}
else {
    alert("The total cost is " + totalAmount)
}



//Qno11
let secretNum = prompt("Guess the secret number to win the prize")
if (secretNum == 6){
    alert("Bingo! You are correct")
}
else if (secretNum == 5 || secretNum == 7){
    alert("You are close enough but the correct answer is 6")
}
else{
    alert("Wrong Number")
}

// Qno12

let numb = 3
let divisible = prompt("Enter the number divisible by 3")
let division = divisible%numb
if (division == 0){
    alert("This number is divisible by 3")
}
else {
    alert("This number is not divisible by 3")
}


//Qno13

let teamA = prompt(" TeamA Name")
let scoreA = prompt("Score of team A")
let teamB = prompt("TeamB Name")
let scoreB = prompt("Score of team B")

if (scoreA > scoreB){
    alert(teamA + " won the match")
}
else if (scoreA < scoreB){
    alert(teamB + " won the match")
}
else if (scoreA = scoreB){
    alert("Match is tie")
}
else{
    alert("Write correct info")
}


//Qno14
let country = "Pakistan"
alert(country + " is a string")
let numbr = 92
alert(numbr + " is a number")
let boo = 100>10
alert(boo + " is aboolean")

//Qno 15

let x = prompt("Enter any number")
if (x % 2 == 0){
    alert(x + " is an even number")
}
else if (x % 2 != 0){
    alert(x + " is an odd number")
}
else {
    alert("It is not a number")
}

// Qno 16
let T = prompt("Enter temperature to know the current situation of weather")
T = Number.parseInt(T)
if (T > 40){
    alert("It is too hot don't go outside!")
}
else if (T > 30){
    alert("The is today is normal")
}
else if (T > 20){
    alert("Today's weather is cool")
}
else if (T > 10){
    alert("OMG! today's weather is so cool!")
}
else {
    alert("Its too cold ")
}

//Qno 17
let firstNumber = prompt("Enter 1st number")
let secondNumber = prompt("Enter 2nd number")
let operator = prompt ("What do you want ! (+,-,*,%,/)")

if (operator == "+"){
    alert(+firstNumber + +secondNumber)
}
else if (operator == "-"){
    alert(firstNumber - secondNumber)
}
else if (operator == "x"){
    alert(firstNumber * secondNumber)
}
else if (operator == "/"){
    alert(firstNumber / secondNumber)
}
else if (operator == "%"){
    alert(firstNumber % secondNumber)
}
else {
    alert("Input the given operator")
}



// Qno 18

let days = prompt("Enter a day ")
 if (days == "Monday" || days == "Tuesday" || days == "Wednesday" || days == "Thursday" || days == "Friday" ){
    alert("It is a week day")
 }
 else if (days == "Saturday"){
    alert("it is a weekend")
 }
 else if (days == "Sunday"){
    alert("Yeh! Its Holiday")
 }
 else{
    alert("Its not a day ")
 }

 //Qno 19

  let userScore = prompt("Enter your score out of 100")
  if (userScore >= 50) {
    alert("You are passed")
  }
  else{
    alert("Try again")
  }

  //Qno 20

  let lumber1 = prompt("enter Number")
  let lumber2 = prompt("enter Number")
  if (lumber1 > lumber2){
    alert("The greater number of " + lumber1 + " and " + lumber2 + " is " + lumber1)
  }
  else if (lumber1 < lumber2){
    alert("The greater number of " + lumber1 + " and " + lumber2 + " is " + lumber2)
  }
  else if (lumber1 == lumber2){
    alert("The number are equal")
  }else{
    alert("Error")
  }

  //Qno21
  let code = prompt("Enter language code")

  if (code == "iso"){
    alert("Selam dunya")
  }
  else if (code == "en"){
    alert("Hello World")
  }
  else if (code == "es"){
    alert("Hola Mundo")
  }
  else{
    alert("Hello World")
  }


  //Qno 22

  let numInp = prompt("Enter the number")

  if (numInp < 0){
    alert("The number you enter is Negative" )
  }
  else {
    alert("The number you enter is positive")
  }

//   Qno23

let petNum = prompt("Enter the number of pet you have")
let petName = prompt("Which pet you have")

alert(petNum + " " + petName)


//End

