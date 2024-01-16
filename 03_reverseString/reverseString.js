const reverseString = function(word) {
   //let reversed = word.split('').reverse().join('');
   //return reversed;
   let reversed = "";
   for (let i = word.length- 1; i >= 0; i--){
      reversed+= word[i];

      //for i = hello, i = 4 & reversed = ""
      //"" + word[4]= o
      //o + word[3] = ol
      //ol + word[2] = oll
      //oll + word[1] = olle
      //olle + word[0]= olleh
   }
   return reversed;
}
//console.log(reverseString("hello"))

// Do not edit below this line
module.exports = reverseString;
