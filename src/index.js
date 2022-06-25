module.exports = function toReadable (number) {
   let answer = String(number);
   let from0to9 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
   let from10to19 =["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
   let tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
   if (answer.length === 1) {
      return from0to9[answer];
   };
   if (answer.length === 2) {
      if (answer[0] == 1) {
         return from10to19[answer[1]];
      } if (answer[1] == 0) {
         return tens[answer[0]];
      } if (answer[1] > 0 && answer[1] < 10) {
         return tens[answer[0]] + " " + from0to9[answer[1]];
      };
   };
}