
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



// function points(games) {
//   let totalPoints = 0;

//   for (let i = 0; i < games.length; i++) {
//     let [x, y] = games[i].split(':').map(Number);

//     if (x > y) {
//       totalPoints += 3; // win
//     } else if (x === y) {
//       totalPoints += 1; // tie
//     }
//     // No points for a loss (x < y)
//   }

//   return totalPoints;
// }
// console.log(points([2,4,5,9,44,7,22,10,9,6,8,11]));


function divisibleBy(numbers, divisor){
  
  let result = [];
  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % divisor === 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}
console.log(divisibleBy([1,2,3,4,5,6,7,8],2));

function between(a, b) {
  // your code here
  let result =[];
  let start= Math.min(a,b);
  let end = Math.max(a,b);
for (let i=start; i<=end; i++){
    result.push(i);
  }
  return result;
}
console.log(between(2,5));

function correct(string){
  let result = "";
  for (let i=0; i<string.length; i++){
     if( string[i] === "5"){
       result += "S";
       }
    else if (string[i]=== "0"){
      result += "O";
       }
    else if(string[i]=== "1"){
      result += "I";
    }
    else{
      result += string[i];
    }

   }
  return result;
}
console.log(correct("L0ND0N"));


function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  return laLigaGoals + copaDelReyGoals +championsLeagueGoals;
}
console.log(goals(4,5,6));

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let result = 0;
  for (let i=sonYearsOld; i<=dadYearsOld; i++){
    if(dadYearsOld % sonYearsOld === 0){
        result += 0
  }
  else{
    result += 1
  }
}
  return result;
  
}
console.log(twiceAsOld(50,20));


function twiceAsOld(dadYearsOld, sonYearsOld) {
   return Math.abs(dadYearsOld - 2 * sonYearsOld);
}
console.log(twiceAsOld(50,20));


function cockroachSpeed(s) {
  return s*100000;
}
console.log(cockroachSpeed(1.08));


function cockroachSpeed(s) {
  return Math.floor(s*100000/3600);
}

function strCount(str, letter){  
  let result = 0;
  for(let i=0; i<str.length; i++){
    if(str[i]===letter){
      result += str.length;
    }
  }
  return result;
}
console.log(strCount("hello","o"));
