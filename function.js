
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