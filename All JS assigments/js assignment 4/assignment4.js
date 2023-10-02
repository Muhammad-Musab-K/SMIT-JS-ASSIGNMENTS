// Assignment 4 of JS

// Qno1
let num = prompt("Enter the number and check either it divivsible by 3 or not")
if (num % 3 == 0) {
    alert("THe number is divisible by 3")
}
else if (num % 3 != 0) {
    alert("This number is not didvisible by 3")
}
else {
    alert("Invalid Number")
}

//Qno2

let numb = prompt("Ener the number and check it's either even or odd")
if (numb % 2 == 0) {
    alert("This number is an even number")
}
else if (numb % 2 != 0) {
    alert("This number is an odd number")
}
else {
    alert("Invalid number")
}

//qNO 3


let age = prompt("Enter your age!")
if (age < 18) {
    alert("You are too young dude!")
}
else if (age > 18) {
    alert("Old enough bro!")
}
else {
    alert("Invalid number")
}


// Q no 4

let name = prompt("Enter your name")
let myName = "Musab Khan"
if (name == myName) {
    alert("welcome to SMIT MUSAB KHAN !")
}

// Q no 5
let n = prompt("enter a numbr")
n = Number.parseInt(n)
switch (n % 3) {
    case 0:
        alert("This number is divisible by 3")
        break

    default:
        alert("This number is not divisible by three")

}


//Q no 6

const chars = prompt("Enter")
const asciiCode = chars.charCodeAt(0)
alert(chars + " = " + asciiCode)

// Qno 7

let numbr1 = prompt("Enter a First number")

let numbr2 = prompt("Enter a Second number")

let operator = prompt("What you like to do (+ , - , / , % , x)")

switch (operator) {

    case '+':
        alert(+numbr1 + " + " + +numbr2 + " = " + (+numbr1 + +numbr2))
        break
    case '-':
        alert(numbr1 + " - " + numbr2 + " = " + numbr1 - numbr2)
        break
    case 'x':
        alert(numbr1 + " x " + numbr2 + " = " + numbr1 * numbr2)
        break
    case '/':
        alert(numbr1 + " / " + numbr2 + " = " + numbr1 / numbr2)
        break
    case '%':
        alert(numbr1 + " % " + numbr2 + " = " + numbr1 % numbr2)
        break
    default:
        alert("try again")
}

//Qno 8

let time = prompt("What time is it? Write in clock format like 1900 = 7pm")

if (time >= '0000' && time < '1200') {
    alert("Good Morning!")
}
else if (time >= '1200' && time < '1700') {
    alert("Good Afternoon!")
}
else if (time >= '1700' && time < '2100') {
    alert("Good Evening!")
}
else if (time >= '2100' && time < '2359') {
    alert("Good night!")
}
else ("try again")

//Qno 9

let year = prompt("Enter a year (YYYY):")
if (year % 4 == 0 && year % 100 == 0 || year % 400 == 0) {
    alert(year + " is a leap year ")
}
else {
    alert(year + " is not leap year")
}

//Qno10

let pass = "Musab123"
let inPass = prompt("Enter your Password")
if (inPass === pass) {
    alert("Correct! The password you entered matches the original password")
}
else {
    alert("Enter a correct password")
}


//Qno11

var firstName = "Ali";
if (firstName === "Fahad") {
    alert("Hello Fahad!");
}
else {
    alert("You are not Fahad")
}

//Qno12
var greeting;
var hour = prompt("Enter an hour")
if (+hour < 18) {
    greeting = "Good day";
}
else {
    greeting = "Good evening";
}


//Qno 13

let integer1 = prompt("Enter a first integer")
let integer2 = prompt("Enter a second integer")

if (integer1 > integer2) {
    alert(integer1 + " is greater than " + integer2)
}
else if (integer1 < integer2) {
    alert(integer2 + " is greater than " + integer1)
}
else if (integer1 === integer2) {
    alert(integer2 + " is equal to " + integer1)
}

//Qno14

let inputNum = prompt("Enter a number")
if (inputNum > 0) {
    alert("The number you entered is Positive")
}
else if (inputNum < 0) {
    alert("The number you entered is Negitive")
}
else if (inputNum == 0) {
    alert("The number you entered is Zero")
}

// Q no 15

let hour = prompt("Enter Current time ")
let zone = prompt("AM or PM")

if (hour >= 6 && hour <= 9 && zone == "am") {
    alert("Breakfast is served")
}
else if (hour = 11 && zone == "am" || hour == 12 && zone == "pm" || hour == 1 && zone == "pm") {
    alert("Time for lunch")
}
else if (hour >= 5 && hour <= 8 && zone == "pm") {
    alert("Dinner time!")
}
else {
    alert("Sorry, you'll have to wait, or go get a snack.")
}

//Q no16

let value = 32
alert("The value you store is a " + typeof value)
let value2 = "Musab"
alert("The value you store is a " + typeof value2)
let value3 = true
alert("The value you store is a " + typeof value3)
let value4
alert("The value you store is a " + typeof value4)


//Qno 17

let vowel = prompt("Enter only one vowel")

if (vowel == 'a' || vowel == 'e' || vowel == 'i' || vowel == 'o' || vowel == 'u') {
    alert("ture")
}
else if (vowel == 'A' || vowel == 'E' || vowel == 'I' || vowel == 'O' || vowel == 'U') {
    alert("ture")
}
else {
    alert("False")
}

//Qno18

10 != 8

// Qno 19

let month1 = prompt("Enter the number of the month")

switch (+month1) {
    case 1: {
        alert("The month number you enter is Jan")
    }
        break
    case 2: {
        alert("The month number you enter is Feb")
    }
        break
    case 3: {
        alert("The month number you enter is March")
    }
        break
    case 4: {
        alert("The month number you enter is April")
    }
        break
    case 5: {
        alert("The month number you enter is May")
    }
        break

    case 6: {
        alert("The month number you enter is June")
    }
        break
    case 7: {
        alert("The month number you enter is July")
    }
        break
    case 8: {
        alert("The month number you enter is August")
    }
        break
    case 9: {
        alert("The month number you enter is Spetember")
    }
        break
    case 10: {
        alert("The month number you enter is October")
    }
        break
    case 11: {
        alert("The month number you enter is November")
    }
        break
    case 12: {
        alert("The month number you enter is December")
    }
        break
    default: {
        alert("Invalid Month")
    }


}

//Qno20

let umar = prompt("Enter your age")

alert(umar < 18 ? "Too Young" : "Old enough")
