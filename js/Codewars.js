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
  

/* longest substring */


const solution = (s) => {
  if (s.length === 0) return 0
      
      
   let set = new Set() 
   let i =0 
   let j = 0 
   let maxLength = 0
   
   while (j < s.length){
   if (!set.has (s[j]))  {
       set.add(s[j])
       j++
  } else {
   set.delete(s[i])
  i++
  }
       maxLength = Math.max(maxLength,set.size);
   }
     return maxLength
  
  
  };
  
  return final.join(" ")
  
}
/* We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100" */

function numberToString(num) {
  // Return a string of the number here!
  
  return String(num)
  
}
// Return the number (count) of vowels in the given string.

//We will consider a, e, i, o, u as vowels for this Kata (but not y).

//The input string will only consist of lower case letters and/or spaces.




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

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

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
  }