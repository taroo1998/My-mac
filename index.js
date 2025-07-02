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
// console.log(points(["4;5","4:5","5:6","7:8","8:9","3:4","9:10","3:7","3:6","6:6"]));

// function strCount(str, letter){  
//   let result = 0;
//   for(let i=0; i<str.length; i++){
//     if(str[i]===letter){
//       result += str[i].length;
//     }
//   }
//   return result;
// }
// console.log(strCount("hello","o"));

// String.prototype.toAlternatingCase = function () {
//   return this.split('')
//              .map(char => {
//                if (char === char.toUpperCase()) {
//                  return char.toLowerCase();
//                } else {
//                  return char.toUpperCase();
//                }
//              })
//              .join('');
// };
// "HELLO".toAlternatingCase(); // logs "hello"

// function monkeyCount(n) {
//   let count = [];
//   for (let i=1; i<=n; i++){
//     count.push(i);
//   }
//   return count;
// // your code here
// }
// console.log(monkeyCount(10));

//function removeEveryOther(arr){
//   let result = [];
//   for(let i=0; i<arr.length; i++){
//     if(arr[i]===2){
//       result += arr[i];
//     }
//   }
//   return result;
// }


function stray(numbers) {
  let result = [];
  for(let i=0; i<numbers.length; i++){
    if(numbers[i])
    result += numbers[i];
  }
  return result;
}
console.log(stray([2,2,2,2,2,3]));


