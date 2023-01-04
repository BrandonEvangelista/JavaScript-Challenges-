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