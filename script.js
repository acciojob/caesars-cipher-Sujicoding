// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};
function rot13(encodedStr) {
 let decodedArr = []; 
  
  for (var i = 0; i < encodedStr.length; i++) {
    var char = encodedStr[i];
    var charCode = encodedStr.charCodeAt(i);

    // Check if the character is a letter
    if (/[A-Z]/.test(char)) {
      // Determine the base code for 'A' or 'a' depending on the case
      var baseCode = char >= 'A' && char <= 'Z' ? 'A'.charCodeAt(0) : 'a'.charCodeAt(0);
      
      // Apply the ROT13 shift
      var shiftedCode = (charCode - baseCode + 13) % 26;
      
      // Convert the shifted code back to a character
      char = String.fromCharCode(baseCode + shiftedCode);
    }

    // Append the character to the decoded string
    decoded += char;
  }

  return decoded;
}


// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
var encodedString = 'EBG13 rknzcyr.';
var decodedString = rot13(encodedString);
console.log(decodedString);