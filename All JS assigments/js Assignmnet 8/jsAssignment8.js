// Aasignment 8

// Q no 1
let pi = +prompt("Enter the num ")
console.log(`Number   : ${pi}`)
console.log(`Round off value  : ${Math.round(pi)}`)
console.log(`floor value  : ${Math.floor(pi)}`)
console.log(`ceil value  : ${Math.ceil(pi)}`)

// Q no 2
let ni = +prompt("Enter the num ")
if(ni < 0){
console.log(`Number   : ${ni}`)
console.log(`Round off value  : ${Math.round(ni)}`)
console.log(`floor value  : ${Math.floor(ni)}`)
console.log(`ceil value  : ${Math.ceil(ni)}`)
}
// Q no 3

let nf = +prompt("Enter the Positive floating number ")

console.log(`Number   : ${nf}`)
console.log(`Round off value  : ${Math.round(nf)}`)
console.log(`floor value  : ${Math.floor(nf)}`)
console.log(`ceil value  : ${Math.ceil(nf)}`)

// Q no 4


let nn = +prompt("Enter the Negitive floating number ")
if(nn<0){
console.log(`Number   : ${nn}`)
console.log(`Round off value  : ${Math.round(nn)}`)
console.log(`floor value  : ${Math.floor(nn)}`)
console.log(`ceil value  : ${Math.ceil(nn)}`)
}

// Q no 5

let num = +prompt("Enter the any number to get the absolute value of it")
console.log(`The basolute value ${num} is ${Math.abs(num)}`)

// Q no 6
game = true
while(game){
let numb1 = Math.ceil(Math.random()*6)
let numb2 = Math.ceil(Math.random()*6)
console.log(`The dice 1 value is ${numb1}`)
console.log(`The dice 2 value is ${numb2}`)
game = confirm("Do you want to play again ?")
}

// Q no 7
let more = true
while(more){
    let num =  Math.ceil(Math.random()*2)
    if(num == 1){
        console.log(num)
        console.log(" the random coin value is Heads")
    }
    if(num == 2){
        console.log(num)
        console.log("the random coin value is tails")
    }
    
    more = confirm("do you want to play again?")
}

// Q no 8

let ran = Math.ceil(Math.random()*100)
console.log(`Random number between 1 to 100 is ${ran}`)

// Q no 9
let weight = prompt("What is your weight")
weight = Number.parseInt(weight)
console.log("The weight of the user is " + weight + " Kilograms")


// Q no 10 
let m = Math.floor(Math.random()*10)
let chances ;
while(m){
    chances++
    let guess = prompt("Guess the number")
    if(guess > m){alert("The number you enter is greater than guess number")
    }
    if(guess < m){alert("The number you enter is smaller than guess number")
}
    if(guess == m){
alert("Bingo your guess is correct")
break
    }
}
let score = chances - 100
alert("you took " + chances + " chances \n" + " Your score is " + score + " out of 100")

// Q no 11

let dat = new Date()
// let cDate = dat.getDay() +  "  "+  dat.getDate() + "-" + (dat.getMonth()+1) + "-" + dat.getFullYear()
// let time = dat.getHours()+ "/" + dat.getMinutes() + '/' + dat.getSeconds()
// console.log ( cDate +" " + time)
console.log(dat)


// Q no 12


let date = new Date()
let month = date.getMonth()+1
let mm ;
if(month === 1){
    mm = 'january'
}
if(month === 2){
    mm = 'Feburary'
}
if(month === 3){
    mm = 'March'
}
if(month === 4){
    mm = 'April'
}
if(month === 5){
    mm = 'May'
}
if(month === 6){
    mm = 'June'
}
if(month === 7){
    mm = 'July'
}
if(month === 8){
    mm = 'August'
}
if(month === 9){
    mm = 'September'
}
if(month === 10){
    mm = 'October'
}
if(month === 11){
    mm = 'November'
}
if(month === 12){
    mm = 'December'
}
console.log("The current month is : " + mm)

// Q no 13
let days =  [ 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' ,'Saturday' , 'Sunday'  ]
let d = new Date()
let today = d.getDay()
let day = days[d.getDay()].slice(0,3)
console.log("Today is " + day)

// Q no 14

if (today == 5 || d.getDay() === 6){
    console.log("Today is Fun Day")
}
if(today  == 4 ){
    console.log("Today is Afzal Day")
}

// Q no 15

let D = new Date()
let nDate = D.getDate()
if(nDate < 16){
    console.log("First Fifteen days of the month")
}
if(nDate > 16){
    console.log("Last Fifteen days of the month")
}

// Q no 16

let todayDate = new Date();
let Todaymilli = todayDate.getTime();
let todayMin = todayDate.getMinutes();
let diff = Todaymilli - todayMin;
let diffMin = diff/(1000*60*60);
let accurateMin = Math.floor(diffMin);
console.log("Elapsed Millisecond since Jan 1 1970:  " + Todaymilli)
console.log("Elapsed Minutes since Jan 1 1970:  " + accurateMin)

// Q no 17


let da = new Date()
let AmPm =da.getHours()
if(AmPm > 12){
    console.log("Its AM")
}
if(AmPm < 12){
    console.log("Its Pm")
}

// Q no 18


let last = new Date('December 31,2023 00:00:00')
console.log(last)


// Q no 19

let dateRamdan = new Date('04/20/2023')
let currentDate = new Date()
const time1 = dateRamdan.getTime()
const time2 = currentDate.getTime()
 const diffInTym = time2 - time1
const deff = Math.round(diffInTym / (1000*60*60*24))
console.log(deff + " days are passed")



// Q no 20 

let ref = new Date("01/01/2023")
let current = new Date()
let timeOne = ref.getTime()
let timeTwo = current.getTime()
let minus = timeTwo - timeOne
let seconds = Math.round(minus / (1000))
console.log(seconds+ " seconds")

// Qno 21

var CurrentDate = new Date()
var CurrentHours =  CurrentDate.getHours()
 CurrentDate.setHours( CurrentHours + 1)
console.log(CurrentDate)

// Q no 22

var cDate = new Date() 
var CYears = cDate.getFullYear()
cDate.setFullYear(CYears - 100)
console.log(cDate)

// Q no 23

let age = prompt("Enter your current age")
let Cdate = new Date()
let Cyear = Cdate.getFullYear()
console.log(Cyear)
let BirthYear = Cyear - age
console.log(`your age is ${age}`)
console.log(`Year of Birth is ${BirthYear}`)

// q no 24
function bill(){
let name = prompt("Enter your name")
let d = new Date()
let currentMonth = d.getMonth()
let units = 200
let charge = 55
let late = 200
return  `Name  = ${name} \n Month = ${currentMonth} \n Current Units = ${units} \n Charges per unit = ${charge} \n Bill(on due date ) = ${200*55} \n Late payment surcharge = ${late} \n Gross amount payable = ${(charge*units)+200} `
}
alert(bill())


