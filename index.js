const words = [
    "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
];

function numWord(num) {
  let str = "";
  if (num >= words.length) {
    if (num >= 1000) { 
        let n = parseInt(num / 1000);
        str += words[n] + "-thousand";
        num -= n * 1000; 
    }
    if ((num >= 100)  && (num < 1000) ) {
        let n = parseInt(num / 100);
        str += words[n] + "-hundred ";
        num -= n * 100;
    }
    if ((num > 0)  && (num < 20)) {
        str += words[num];
    }
    if ((num > 19) && (num < 30)) {
        str += "twenty";
        if (num > 20) {
            str += "-" + words[num - 20];
        } 
    }
    if ((num > 29) && (num < 40)) {
        str += "thirty";
        if (num > 30) {
            str += "-" + words[num - 30];
        }
    }
    if ((num > 39) && (num < 50)) {
        str += "fourty";
        if (num > 40) {
            str += "-" + words[num - 40];
        }
    }
    if ((num > 49) && (num < 60)) {
        str += "fifty";
        if (num > 50) {
            str += "-" + words[num - 50];
        }
    }
    if ((num > 59) && (num < 70)) {
        str += "sixty";
        if (num > 60) {
            str += "-" + words[ num - 60];
        }
    }
    if ((num > 69) && (num < 80)) {
        str += "seventy";
        if (num > 70) {
            str += "-" + words[num - 70];
        }
    }
    if ((num > 79) && (num < 90)) {
        str += "eighty";
        if (num > 80) {
            str += "-" + words[num - 80];
        }
    }
    if ((num > 89) && (num < 100)) {
        str += "ninety";
        if (num > 90) {
            str += "-" + words[num - 90];
        }
    }
  } else { 
      str = words[num];
    }
  return str;
};

const start = 0;
const end = 1000;

const numbers = [ ]; 
for (let count = start; count <= end; count++) {
    numbers.push(count);
}

let str = "";
for (let count = 0; count < numbers.length; count++) {
    str += numbers[count] + " --> " + numWord(numbers[count]) + "<br>";
}

document.getElementById("wordNums").innerHTML = str;