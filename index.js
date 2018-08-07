let ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let tens = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
let teens = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let results = [];

function conThousands(num) {
    if (num >= 1000) {
        return conHundreds(Math.floor(num/1000)) + " thousand" + conHundreds(num % 1000);
    } else {
        return conHundreds(num);
    }
}

function conTens(num) {
    if (num < 10 ) {
        return ones[num];
    } else if (num >= 10 && num < 20) {
        return teens[num - 10];
    } else {
        return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    }
}