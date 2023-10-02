// Assignment 5

// Qno1
var studentName = []


//Qno2

var names = {
    "StudentNames":[]
}

//Qno3

var breakfast = ['Milk','Bread','Eggs','Coffee','Juice']

//Qno 4 

var tableOfNine = [9,18,27,36,45,54,63,72,81,90]

//Qno 5

var boole = [true , true , false , false]

//Qno 6

var Data = ['Musab',20,'intermidiate','software engineer',true,'InshaAllah' ]

//Qno 7

var edu = 'Qualification:\n'

var depart = ['1) SSC\n'+'2) HSC\n'+'3) BSc\n'+'4) BS\n'+'5) BCOM\n'+'6) MS\n'+'7) M.PHIL\n'+'8) PHD\n']

alert(edu + '\n' + depart)

//Qno 8 

var stu = ['Haider','Shawaiz','Musab']
var score = [320,230,480]

alert(' Score of ' + stu[0] + ' is ' + score[0] + ' .Percentage ' + 320/500*100 + '\n Score of ' + stu[1] + ' is ' + score[1] + ' .Percentage ' + 230/500*100 + '\n Score of ' + stu[2] + ' is ' + score[2] + ' .Percentage ' + 480/500*100 )

//Qno 9 

var color = ['Black','Yellow','Blue','White','pink','Red','Green','Purple']
alert("List of colorn\n" +color)
//a
var colorBegi = prompt("Which color you want to add at beginning")
color.unshift(colorBegi)
alert(color)
//b
var colorEnd = prompt("Which color you want to add at end")
color.push(colorEnd)
alert(color),
//c
color.unshift('Voilet','Sky Blue')
alert(color)
//d
color.shift()
alert(color)
//e
color.pop()
alert(color)
//f
var colorIndex = prompt("At which index you want to add color")
var colorNam = prompt("color name please!")
color.splice(colorIndex,0,colorNam)
alert(color)
//g
var colorDel = prompt("From which index you want to delete color?")
var colorQuan = prompt("How many color you want to delete?")
color.splice(colorDel,colorQuan)
alert(color)

//Qno 10
var StudentScore = [320,200,199,430]
alert("Score of Students:\n" + StudentScore)
StudentScore.sort()
alert("Ordered Score:\n" + StudentScore)

//Qno 11
var cities = ['Karachi','Islamabad','Quetta','Peshawar','Lahore']
alert("Cities\n" + cities)
alert("Selected \n " +cities[0] , cities[2])


//Qno 12
var arri = ["This","is","my","cat"]
alert("From Arry \n" +arri + "\n \n" + "To string \n"+arri.join(" "))

//Qno 13
 var fifo = []
  fifo.push("Keyboard")
  fifo.push("Mouse")
  fifo.push("Printer")
  fifo.push("Monitor")
  

 alert("Devices \n"+  fifo + "\n \n Out: \n"+fifo[0] + "\n" +  "Out: \n"+fifo[1] + "\n" + "Out: \n"+fifo[2] + "\n" + "Out: \n"+fifo[3]  )


 //Qno 14

 fifo.reverse()

 alert("Devices \n"+  fifo + "\n \n Out: \n"+fifo[0] + "\n" +  "Out: \n"+fifo[1] + "\n" + "Out: \n"+fifo[2] + "\n" + "Out: \n"+fifo[3]  )



//Qno 15

var Mob = ['Samsung','Nokia','Apple','Motorola','One+','Oppo','Vivo']
document.write(Mob)



