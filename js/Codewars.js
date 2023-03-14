console.log("these nuts")

/*
/1/2/2023

C/reate a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings

*/

// THis is the solution 
function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
  }
  

console.log (areYouPlayingBanjo("dan")) 

console.log (areYouPlayingBanjo("rex")) 

console.log (areYouPlayingBanjo("ron")) 

console.log (areYouPlayingBanjo("paul")) 


/* As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

*/

function gimme(a) {
  return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
}



//Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
  // Code here
  return str.toUpperCase()
}
let a = "testingthefunction"
console.log(makeUpperCase(a))


/* You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.
*/



const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  
  if ((distanceToPump < (mpg*fuelLeft)) || (distanceToPump == (mpg*fuelLeft))){
    console.log ("rainbow friends forver! long live the king, we made it home")
  } else {
    console.log ("fin")
  }
};


let distToCheveron = 1000
let tank = 9000
let fordMpg= .3

console.log (zeroFuel(distToCheveron,fordMpg,tank))


 /*    1/06/2023
 JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given. */
 
 let randomnum = [1,2,3,4,5,6,5,4,5,6,7,8]

 function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy

}

getEvenNumbers(randomnum)
console.log(getEvenNumbers(randomnum))


/* Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false. */

function boolToWord( bool ){
  //...
  
  if (bool == true){
    return "Yes" }
  else {
    return "No"
  }
}


/* Convert a String to a Number!    Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7
 */  

const stringToNumber = function(str){
  // put your code here
  return Number(str);
}

/* Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
 */  

function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

/* Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.

*/

function getCount(str) {
  let count = 0
  let spread = str.split('')
  console.log(spread.length)
  console.log(spread)
  for(let i=0; i < spread.length;i++){
    if (spread[i] == "a" || spread[i] == "e" ||spread[i] == "i" ||spread[i] == "o" ||spread[i] == "u" ){
    count++
    } else {console.log("booo   am not a vowel") }
  
  }
    
    
    console.log (count)
    return count
    
  }

  /* Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

*/
function lovefunc(a, b){
  // moment of truth
  let c = a%2
  let d = b%2
  console.log(c)
  console.log(d)
  
  if ((c > d) ||  (c < d) ){
    return true
  } else {return false}  
}

  /* Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
function fakeBin(x){
  let spread = x.split('')
  let newarr = []
  let newnew= []
  let p = newnew
  for(let i = 0; i < spread.length ; i++) {
    if (spread[i] < 5){ 
      newnew.push("0")
      console.log(newnew)
    }else {
    newnew.push("1")
  }
    console.log(newnew)
    let p = newnew.join('')
    console.log(p)
   console.log(p)
   
  }
   return newnew.join('')
  }
/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function evenOrOdd(number) {
  if (number%2 == 0){
    return ("Even")
  }else {
    return ("Odd")
  }
}
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
 return l.filter(v => typeof v == "number")
}
/* Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally. Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead 

*/

function bump(x){
  let car = x.split('')
  let bumps = 0
  let safe = 0
  console.log(car)
  for (let i =0; i <car.length ;i++) {
    if (car[i]=="n"){
      bumps += 1
      console.log(bumps)
    } else {
      safe += 1
      console.log (safe)
    }
  }
    if(bumps <= 15) {
      return ("Woohoo!")
    } 
    else {
      return ("Car Dead")
    }
  }

  /*Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers){

  let sum = 0
  
  for (let i = 0; i < numbers.length; i++) {
    sum += (numbers[i] ** 2)
    console.log (sum)
  }
  return sum
}

 /*Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

(In this case, all triangles must have surface greater than 0 to be accepted). 
*/   function isTriangle(a,b,c)
{
  return a + b > c && a + c > b && c + b > a;
}



  /*Write a function which converts the input string to uppercase. 
*/

function makeUpperCase(str) {
  // Code here
  
  return str.toUpperCase()
}

/* Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck! */
function capitalize(s){
  let set= s.split('')
  let newset = []
  let altset = []
  for (let i = 0; i< set.length ;i++){
    if (i%2 == 0) {
      newset.push(set[i].toUpperCase())
      altset.push(set[i].toLowerCase())
    }
    else { newset.push(set[i].toLowerCase()) 
           altset.push(set[i].toUpperCase())
         }
       console.log(newset)
  }
  console.log(newset)
  return [newset.join(''),altset.join('')]
};

/* This code does not execute properly. Try to figure out why.  */
function multiply(a, b){
  return a * b
}


/* Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"  */

function reverseWords(str) {
  // Go for it
  let revphrase = str.split(' ')
  let final = []
  for(let i =0; i<revphrase.length; i++){
   final.push( revphrase[i].split('').reverse().join(''));
}
  





function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}

///Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given./

function booleanToString(b){
  return b ? 'true' : 'false';
}

/* Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source) asf

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA" */  

function DNAStrand(dna){
  //your code here
  let newword = []
  let spread = dna.split('')
  
  function DNAStrand(dna){
    //your code here
    let newword = []
    let spread = dna.split('')
    
    for ( let i=0;i<spread.length;i++ ){
      if (spread[i]=="T"){
        newword.push('A')
      }
      else if (spread[i]=="A"){
        newword.push('T')
      }
      else if (spread[i]=="G"){
        newword.push('C')
      }
      else if (spread[i]=="C"){
        newword.push('G')
      }
    }
    console.log (newword)
    return newword.join('')
  }}

 //  Write a function which converts the input string to uppercase.

 function qmakeUpperCase(str) {
  
  return str.toUpperCase()
 }

 /* Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples (input -> output)
6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello" */
function repeatStr (n, s){
  
  let car = []
for (let i = 0 ; i< n ; i++)
  {
    car.push(s)
  }
  return car.join("")
}
 
/* The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0  */

function checkExam(array1, array2) {
  // 4 points for each correct
 // -1 point for each incorrect answer
 //. 0 points for each blank ""
   
   let score = 0
   for (let i = 0; i < array1.length ; i++){
     
     if (array2[i]==""){
       console.log('blanky')
       score += 0
     }
     
     else if (array1[i] == array2[i]){
       console.log ('4 points for Griffindor')
       score += 4
     }
     
     else if (array1[i] !== array2 [i]){
       console.log('404 error')
       score += -1
     }
     
     
   }
   console.log (score)
   if (score < 0){return 0}
   
   if (score >= 0 ){return score}
     
 }

 /*The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0 */

function checkExam(array1, array2) {
  // 4 points for each correct
 // -1 point for each incorrect answer
 //. 0 points for each blank ""
   
   let score = 0
   for (let i = 0; i < array1.length ; i++){
     
     if (array2[i]==""){
       console.log('blanky')
       score += 0
     }
     
     else if (array1[i] == array2[i]){
       console.log ('4 points for Griffindor')
       score += 4
     }
     
     else if (array1[i] !== array2 [i]){
       console.log('404 error')
       score += -1
     }
   }}
     /* Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2  */
function digitalRoot(n) {
  let sum =0
  let newsum =0
 
   function attack(b) {
     sum = 0
     let arr1 = b.toString().split('')
     arr1 = arr1.map(Number)
    for(let i = 0; i < arr1.length;i++)
      {
        sum += arr1[i]
      }
    console.log (sum)
 newsum = sum
}
  attack(n)
  if (sum < 9){
    return sum
  }
  else {
    attack (newsum)  
  }
}

/* JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

The solution would work like the following:

getEvenNumbers([2,4,5,6]) // should == [2,4,6]
*/

function getEvenNumbers(numbersArray){
  return numbersArray.filter(function(num){return !(num % 2) })  // 0 is falsy
}

/* In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard".
Ready?

*/ 
function tiyFizzBuzz(sentence){
  
  
  const alphabet = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];
  const loweralphabet = alphabet.join('').toLowerCase().split('')
  const vowel = ["A","E","I","O","U"]
  const lowervowel = vowel.join('').toLowerCase().split('')
  let empty = []
  let arraySplit = sentence.split("");
  for (let i = 0; i < arraySplit.length; i++)
  {
    console.log(arraySplit)
    console.log (empty)
    
    if (alphabet.includes(arraySplit[i])) {
        empty.push("Iron")
        }
    
    
    else if (vowel.includes(arraySplit[i]))
            {
             empty.push("Iron Yard")
             }
    
     else if  (lowervowel.includes(arraySplit[i])) 
              {empty.push("Yard")}
   
 
      
       else {
      console.log("did nothing")
      empty.push(arraySplit[i])
    }
    
  
  
}
   console.log (empty)
  return empty.join('')
}


/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/

function reverseWords(str) {
  // Go for it
  let care = str.split(' ')
  let empty = []
  console.log (care)
  
  for (let i = 0; i < care.length; i++)
  {
    empty.push(care[i].split('').reverse().join(''))
  }
  console.log(empty) 
  return empty.join(' ')
}

/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

*/ 

function evenOrOdd(number) {
  
  if (number%2 == 0)
    {
      return "Even"
    }
  else 
    {
      return "Odd"
    }
  
}
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
 
  const vowel = ["a","e","i","o","u"]
  let vcount = 0
  let spread = str.split('')
  for (let i = 0 ; i < spread.length ; i++)
   {
     if (vowel.includes(spread[i]))
       {
         vcount += 1
       } 
   }
   return vcount
 }
// practice fibonacci's sequence
function fibo(n){
  let arry = [0,1]
  for (let i = 2 ; i < n ; i++)
  {
      arry[i]= arry[i-1]+arry[i-2]
  }
  console.log(arry)
}
// practice factorial dectrement 
function factorial (n)
{
    let car = 1
    for (let i = n ; i > 0 ; i--)
    {
        car *=i
    }
    console.log(car)
}

// super clean
function tiyFizzBuzz(sentence){
  
  /* BRUTE FORCE METHOD!
  Given a string, we need to change each character(there are 4 different scenarios) and return the new string
  
  We need to satisfy 4 different conditions. 
    1.) If a letter is a upper case consonants, replace that character with "Iron".
    2.)If a letter is a lower case consonants or a non-alpha character, do nothing to that character
    3.)If a letter is a upper case vowel, replace that character with "Iron Yard".
    4.)If a letter is a lower case vowel, replace that character with "Yard".
    
  */
   
  // First we need to create  different arrays to compare to (one for each condition/except for the last one since it is an "else")
  const alphabet = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];
  const vowel = ["A","E","I","O","U"]
  
 //Rather than hard code new arrays with all lowercase letters, we can use these methods so that we do not have to type it over and over again
  const loweralphabet = alphabet.join('').toLowerCase().split('')
  const lowervowel = vowel.join('').toLowerCase().split('')
 
  // as we iterate through the array, we can use .push() to add values such as "iron"/"iron yard"/'yard'
  let empty = []
  
  // .split() allows us to create an array from the input so that we can iterate through it using a for loop 
  let arraySplit = sentence.split("");
    
  // all our variables are ready to go, now we can start the loop and conditionals.
  for (let i = 0; i < arraySplit.length; i++) {
    
       console.log(arraySplit)
       console.log (empty)
    //  If a letter is a upper case consonants, replace that character with "Iron".
      if(alphabet.includes(arraySplit[i])) {
        empty.push("Iron");
        }
    
    // If a letter is a upper case vowel, replace that character with "Iron Yard". 
      else if(vowel.includes(arraySplit[i])){
        empty.push("Iron Yard");
        }
    //  If a letter is a lower case vowel, replace that character with "Yard".
      else if  (lowervowel.includes(arraySplit[i])){
        empty.push("Yard");
        }
    //If a letter is a lower case consonants or a non-alpha character, do nothing to that character
      else {
      console.log("did nothing")
      empty.push(arraySplit[i])
        }
    }
   console.log (empty)
  return empty.join('')
}

// continue to practive everything. Do not take a a day off


function highlight(code) {
  // Implement your syntax highlighter here
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  
  let spread = code.split('')
  for (let i = 0; i<spread.length;i++ )
     {
        if (spread[i]=="F")
          {
            spread[i]= ('<span style="color: pink">F</span>')
          }
        else if (spread[i]=="L")
          {
            spread[i]= ('<span style="color: red">L</span>')
          }
        else if (numbers.includes(spread[i]))
          {
            spread[i]= ('<span style="color: green">spread[i]</span>')
          }
        else if (spread[i]=="R")
          {
            spread[i]= ('<span style="color: green">R</span>')
          }
        else {
                console.log ('nothing') 
             }
  }
      
 /*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-35)

Note: The function accepts an integer and returns an integer.

Happy Coding! */ 
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
};


}
console.log('')




/* 
Introduction
A vending machine is a machine that dispenses items such as snacks and beverages to customers automatically, after the customer inserts currency or credit into the machine. The first modern vending machines were developed in England in the early 19th century and dispensed postcards. (Source Wikipedia)
Vending Machine
Task
In this simple Kata aimed at beginners your task is to recreate a vending machine. You will have to make a class called VendingMachine with at least one method called vend. On creation of a new instance of VendingMachine the items Array and Initial vending machine money is passed. The vend method should take two arguments 

1. Selection code of the item (not case sensitive) and 

2. Amount of money the user inserts into the machine.


1. If the money given to the machine is less than the item cost return "Not enough money!"

2. If the quantity is 0 for an item return "Item Name: Out of stock!". Where "Item Name" is the name of the item selected.

3. If an item is correctly selected return "Vending Item Name with 9.40 change.". Where "Item Name" is the name of the item and change if any given.

4. If an item is correctly selected and there is no change needed then return "Vending Item Name". Where "Item Name" is the name of the item.

5. If an invalid item is selected return "Invalid selection! : Money in vending machine = 11.20". Where 11.20 is the machines money float.

6. If a selection is successful then the quantity should be updated.

7. The vending machine never runs out of money for simplicity however you will need to keep track of the amount of money in the machine at anytime (this is not tested in any of the test cases)

8. Change is always given to 2 decimal places ie 7.00


*/


let changeBack = 0


function VendingMachine(items, money) {
  // Code Here
   changeBack = (money - items.price).toFixed(2)

// first check if enough money was put in
if (money < items.price) {
  console.log (items.price)
  return "Not enough money!"
}
// if stock == 0 for item
else if (items.quantity == 0){
    return (`${items.name} : "Out of stock!"`)
}
else if (!items.includes(item)){
  return `Invalid selection! : Money in vending machine = ${changeBack}`
}
// if stock is avail, and change is dispensed
else if(money > items.price) {
    items.quanitiy -= 1
    console.log(`${items.name} is being dispnesed, now only ${items.quanity} are left` )
    return (`Vending ${item.name} with ${changeBack} `)
  }
// exact change scenario  
else if (money == items.price)
  {
    items.quanitiy -= 1
    return (`Vending ${items.name}`)
  }


};


const  items = [{name:"Smarties", code:"A01", quantity:10, price:0.60},
             {name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
             {name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
             {name:"Freddo", code:"A04", quantity:1, price:0.25}];




VendingMachine.prototype.vend = function (selection, itemMoney){
  // Code Here
};
function Stock (name, code, quantity, price) {
  this.name
  this.code
  this.quanity
  this.price
  this.vend
}




   var smart   =      new Stock( "Smarties", "A01", 10, 0.60)
   var carm    =     new Stock("Caramac Bar", "A02", 5, 0.60)
   var  dair  =    new Stock("Dairy Milk","A03", 1, 0.65)
   var    fred   =   new Stock("Freddo","A04", 1, 0.25)
asdfasfasdf

/*
Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.
*/

function reverse(str){
  let cat = str.split(' ')
  
  for (let i = 1 ; i < cat.length ;i+=2)
    {
      cat[i]=cat[i].split('').reverse().join('').trim()
    }
  console.log (cat)
  return cat.join(' ').trim()
}

function createSequentialArr(howBig) 
  {
    let cat = []
    for (let i= 0; i <= howBig ; i++)
      {
        cat.push(i)
      } 
    return cat
  }

  function linearSearch (list,target)
  {
    //returns the index position of the target! if found return the target, else returns none
    for( let i = 0; i < list.length ; i++)
      {
        if (list[i] === target) 
          {
            console.log("found it")
          }
        else 
          {
            console.log ("does not match ")
          }
      }

  }function linearSearch (list,target)
  {
    //returns the index position of the target! if found return the target, else returns none
    for( let i = 0; i < list.length ; i++)
      {
        if (list[i] === target) 
          {
            console.log("found it")
          }
        else 
          {
            console.log ("does not match ")
          }
      }

  }function linearSearch (list,target)
  {
    //returns the index position of the target! if found return the target, else returns none
    for( let i = 0; i < list.length ; i++)
      {
        if (list[i] === target) 
          {
            console.log("found it")
          }
        else 
          {
            console.log ("does not match ")
          }
      }

  }
/*
 kyu 6
 Duplicate Encoder
 The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
 
*/

function duplicateCount(text){
  
  var input = text.toLowerCase().split('');
  
  var obj = {};
  
  for( var i in input) {
  	
  	if(!obj[ input[i] ]){
  		
  		obj[ input[i] ] = 1;
  		
  	} else{
  		obj[ input[i] ] += 1;
  	}	
  }
  
  var result = 0;
  
  for( var prop in obj) {
  	
    if(obj[prop] > 1){
  	 result++;
    }
  }
  
  return result;
  
}


//Complete the solution so that it reverses the string passed into it.
function solution(str){
  return str.split('').reverse().join('')
}

function evenOrOdd(number) {
  if (number%2 == 0){
    return ("Even")
  }
   else {
     return ("Odd")
   }
 }

 /*
 Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
  */
  function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let count = 0
    for (let i = 0; i < arrayOfSheep.length ; i++){
      if (arrayOfSheep[i]== true){
        count++
      }
      else{
        console.log('no sheep here')
      }
    }
    return count
  }


  /*
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
  */
function greet(name){
  
  if(name === "Johnny")
    return ("Hello, my love!");
  
  else{return "Hello, " + name + "!";}
}
/*
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.


*/


class SmallestIntegerFinder {
  findSmallestInt(args) {
    
    args.sort(function (a,b) {
      return a-b ;})
      return (args[0])
}
  }

  /*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
  */
var summation = function (num) {
  // Code here
  let count = 0
  for (let i = 0 ; i <= num; i++){
    count+= i
  }
  
  return count 
} 
/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
*/
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  let sum = 0
  
  for ( let i = 0 ; i < marks.length; i ++){
    sum += marks[i]
  }
  let avg = Math.floor(sum/marks.length);
  return avg
}

/*
Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"
*/

const rps = (p1, p2) => {
  let winner1 = "Player 1 won!"
  let winner2 = "Player 2 won!"
  let noWinner = "Draw!"
  let s = "scissors"
  let p = "paper" 
  let r = "rock"
  if (p1 === p2){
    return noWinner
  }
  else if (p1 == s && p2 == r) {
    return winner2
  }
   else if (p1 == r && p2 == p) {
    return winner2
  }
  else if (p1 == p && p2 == s) {
    return winner2
  }
  else if (p1 == r && p2 == s) {
    return winner1
  }
   else if (p1 == p && p2 == r) {
    return winner1
  }
  else if (p1 == s && p2 == p) {
    return winner1
  }
};

const rps2 = (p1, p2) => {
  if (p1===p2){
    return ("Draw!")
    }
  var rules = {rock: "scissors", scissors: "paper", paper: "rock"};
     if (p2 === rules[p1]){
    return ("Player 1 won!");
  }
    else {return ("Player 2 won!");}
  }}
/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/

// given 0 . 0 arrays will be formed /

// given 3 . 3 arrays will be formed. first will have 1 sec will have 1,1

function pyramid(n) {
  // your code here
  let final = []
  if (n==0){
    return final 
  }
  for (let i = 0; i<n ; i++){
    final.push([])
      for (let i = 0; i<n ; i++){
          final[i-1].push(1)
    }
  }
return final
}
function chessBoard(rows, columns) {
  // your code goes here
    let board = []
    let x = "X"
    let o= "O"
    let counter = 0
    let rowNumber= 0
   // x coor, y coor
  //            first create the rows--!>
    for (let i = 0 ;i < rows;i++)
      {
      board.push([])
      }
     console.log(board)
   // 
    for (let i = 0; i < rows; i++)
      {
        for (let i = 0; i < columns ; i++)
         {
             if( counter%2==0)
              {
                board[rowNumber].push(x)
               counter+=1
               
              }
             else if (counter%2==1)
              {
                board[rowNumber].push(o)
                counter+=1
              }
           console.log(board[rowNumber])
          }
      
       rowNumber+=1
 
       }
      
      
      
      return board
  }
  //It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

  function removeChar(str){
    //You got this!
     let spread = str.split('')
     let len = spread.length
     
     spread.pop();
     spread.shift();
     return spread.join('')
   
   };
   function removeChar1(str){
    //You got this!
     let spread = str.split('')
     let empty = []
    for (let i = 1; i < spread.length-1 ;i++){
      empty.push(spread[i])
      console.log(empty)
    }
   return empty.join('')
   };
/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.*/
function solution(number){

for(let i=0; i<number; i--){

}
}

/*  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
Note: If the number is a multiple of both 3 and 5, only count it once.*/
function solution(number){
  if (number<=0){
    return 0
  }
  let sum = 0
  for (let i = 0; i<number; i++){
    if (i%5==0)  {
      sum = sum + i
   
    }
    else if (i%3==0) {
      sum = sum + i
     
    }
   
  }
    return sum
}
//Simple, remove the spaces from the string, then return the resultant string. hoiuh
function noSpace(x){
  return x.replace(/\s+/g,'')
    
  }

  //I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

  function arrayPlusArray(arr1, arr2) {
    let sum1 =0
    let sum2 =0
    
    for (let i =0;i< arr1.length;i++){
      sum1+= arr1[i]
      sum2+= arr2[i]
    }
   return (sum1+sum2)
    
  }

  var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    
    let cat1 = 15
    let cat2 = 9
    let catseq = 4
    let cat3= 15 +9
    let catf = Math.abs((humanYears-2)*catseq)+cat1+cat2
    
    
    let dog1 = 15
    let dog2 = 9
    let dog3 = 5
    let dog4 =  26
    let dogf = Math.abs((humanYears-2)*dog3)+dog1+dog2
    
    
    if (humanYears==1){
      return[humanYears,cat1,dog1]
    }
    else if(humanYears==2){
      return[humanYears,cat3,dog4]
    }
    else{
    return [humanYears,catf,dogf];}
  }
  function squareSum(numbers){

  let sum = 0
  
  for (let i = 0; i < numbers.length; i++) {
    sum += (numbers[i] ** 2)
    console.log (sum)
  }
  return sum
}

function findOdd(arr) {
  var result, num = 0;

  arr = arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {
      num++;
    } else {
      num++;
      if (num % 2 != 0) {
        result = arr[i];
        break;
      }
    }
  }
  return result;
} 

function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

function printerError(s) {
  // your code
//turn string into array
//iterate and see if value is not a-m
//array length == denom   and  error is 

let errorStr = "nopqrstuvwxyz"
let errorArr = errorStr.split("")
let masterArr = s.split("")
console.log(masterArr)
let denom = masterArr.length
let num = 0

for (let i = 0; i < denom ; i++){
  if (errorArr.includes(masterArr[i])){ 
   console.log("FUCK bad color")
    num++
  }
 
  
}
return (`${num}/${denom}`)
}

function findAverage(array) {
  // your code here
  let sum = 0
  let demoni = array.length
  
  if (array.length ==0) {
    return 0
  }
  
  for (let i = 0;i < array.length; i++){
    sum = sum + array[i]
  }
  
  let avg = sum/demoni
  return avg;
}

//  You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

function check(a, x) {
  return (a.includes(x))
  }


// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).


  function narcissistic(value) {
    let stringy = String(value);
    let arry = stringy.split("")
    let base = arry.length
    let sum = 0
    for (let i = 0; i < base; i++){
      sum += Number(Math.pow(arry[i],base))
      console.log(sum)
    }
    if (sum == value ){
      return true
    }
    else {return false }
  }
  /* Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
*/


function smash (words) {
  return words.join(" ").trim()
};



function getCount123s(str) {
  var vowelsCount = 0;
  var vowels = ["a","e","i","o","u"];
  for(var i = 0;i < str.length;i++){
    for(var j=0;j<vowels.length;j++){
      if(str[i] === vowels[j]){
        vowelsCount++;
      }
    }
  }
  
  return vowelsCount;
}

/*
Some numbers have funny properties. For example:

89 --> 8¹ + 9² = 89 * 1

695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
In other words:

Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.
*/

function digPow(n, p){
  // convert the number into string
  let str = String(n);
  let add = 0;
  // convert string into array using split()
  str.split('').forEach(num=>{
    add += Math.pow(Number(num) , p);
    p++;
  });

  return (add % n) ? -1 : add/n;
}

function zeros (n) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    zs+=n
  }
  return zs;
}