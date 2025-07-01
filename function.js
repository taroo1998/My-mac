
function reversedString(str){
    return str.split("").reverse().join("");
    // result ='';
    // for (let i=str.length-1; i>=0; i--){
    //     result += str[i];
    // }
    // return result;
}
console.log(reversedString("hello"))


// //"Hello", "l", "0" -> "he00o"
function replace(str, charToReplace, charToReplacement){
    
    let result ="";
    for (let i=0; i<str.length; i++){
        if (str[i] === charToReplace){
            result += charToReplacement ;
        }
        else{
            result += str[i];
        }
    }
    return result;
}
console.log(replace("hello","l","p"))

// //find out the given string is even or odd

function strLengthEven(str){
    return str.length % 2 === 0;
    // let length ='';
    // for(let i= 0; i<str.length; i++){
    //     length = str.length[i];
    //     if(str.length %2 === 0){
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
    // return length;
}
console.log(strLengthEven("hello"));
console.log(strLengthEven("even"))

//find out whether given array have rabbit or not?

function findRabiit(arr){
    return lowercaseWords = arr.map(word => word.toLowerCase()).indexOf("rabbit");

    // for (let i = 0; i < arr.length; i++) {
        
    //     if (arr[i].toLowerCase().includes("rabbit")) {
    //         return i
    //     }
    // }
    // return -1; 
}
console.log(findRabiit(["dog","cat","tiger","elephat","Rabbit"]));
console.log(findRabiit(["dog","cat","Rabbit"]));

function countPositivesSumNegatives(input) {
    
    //return input.length;
  let count = 0;
  let sum = 0;
  if(!input || input.length === 0) return [];
  for(let i=0; i<input.length; i++){
if(input[i] >0){
    count += 1;
}
if(input[i]<0){
    sum += input[i];
}
  }
  return [count,sum];

}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));


function makeUpperCase(str) {
  return str.toUpperCase();
  // Code here
}
console.log(makeUpperCase("sonam"));


function twoDecimalPlaces(n) {
  // Your code here
  return Math.ceil(n);
}
console.log(twoDecimalPlaces(5.7566666));

function formatNumbers(n) {
  return Number(n.toFixed(2));
}
console.log(formatNumbers(1.23455));



function points(games) {
  let totalPoints = 0;

  for (let i = 0; i < games.length; i++) {
    let [x, y] = games[i].split(':').map(Number);

    if (x > y) {
      totalPoints += 3; // win
    } else if (x === y) {
      totalPoints += 1; // tie
    }
    // No points for a loss (x < y)
  }

  return totalPoints;
}
console.log(points([2,4,5,9,44,7,22,10,9,6,8,11]));


