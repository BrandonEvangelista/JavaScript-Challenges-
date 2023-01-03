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