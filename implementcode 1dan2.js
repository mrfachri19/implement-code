// tugas 1 kodenya

let isPalindrome = function (string) {
    if (string == string.split('').reverse().join('')) {
        console.log(string + ' is palindrome.');
    }
    else {
        console.log(string + ' is not palindrome.');
    }
}
isPalindrome("bibib");


// tugas 2 kodenya
let arr = 'saya makan ayam'
let arr2 = arr.split(' ');
console.log(arr)
let arr3 = arr2.reverse().join(' ');
console.log(arr3);
