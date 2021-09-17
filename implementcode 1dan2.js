// tugas 1 kodenya

var isPalindrome = function (string) {
    if (string == string.split('').reverse().join('')) {
        console.log(string + ' is palindrome.');
    }
    else {
        console.log(string + ' is not palindrome.');
    }
}
isPalindrome("bibib");


// tugas 2 kodenya
let arr = ['saya', 'makan', 'ayam'];
console.log(arr.reverse().join(' '));
