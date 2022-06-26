module.exports = function toReadable (number) {
   let answer = String(number);
   let from0to9 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
   let from10to19 =["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
   let tens = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
   if (answer.length === 1) {
      return from0to9[answer];
   }
   else if (answer.length === 2) {
      if (answer[0] == 1) {
         return from10to19[answer[1]];
      } if (answer[1] == 0) {
         return tens[answer[0]];
      } if (answer[1] > 0 && answer[1] < 10) {
         return tens[answer[0]] + " " + from0to9[answer[1]];
      };
   }
   else if (answer.length === 3) {
      if (answer[1] == 0 & answer[2] == 0) {
         return from0to9[answer[0]] + " hundred";
      }  else if (answer[1] == 1) {
         return from0to9[answer[0]] + " hundred " + from10to19[answer[2]];
      } else if (answer[1] != 0 && answer[2] == 0) {
         return from0to9[answer[0]] + " hundred " + tens[answer[1]];
      } else if (answer[1] == 0 && answer[2] != 0) {
         return from0to9[answer[0]] + " hundred " + from0to9[answer[2]];
      } else if (answer[1] !=0 && answer[2] !=0) {
         return from0to9[answer[0]] + " hundred " + tens[answer[1]] + " " + from0to9[answer[2]];
      }
   };
};