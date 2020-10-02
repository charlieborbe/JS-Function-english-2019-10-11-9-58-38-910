// Create function that does the following: determine whether a string is a palindrome string.
function palindrome(message){
    // Create a variable that will store the RegExp to remove unwanted characters from the String
    var regexFormat = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;

    // Create a variable that will store the lowercase string and replace unwanted characters to ''.
    var lowerCaseString = message.toLowerCase().replace(regexFormat, '');
    // message.toLowerCase() = "abcba.,.," ---- String with unwanted characters ('.' , ',')
    // message.replace(/[\W_]/g, '') = "abcba.,.,".replace(/[\W_]/g, '') = "abcba"
    // var lowerCaseString = "abcba";
    
    // Create a variable that will store the output string of 3 chain methods (split, reverse, join)
    var reverseString = lowerCaseString.split('').reverse().join(''); 
    // So, "abcba".split('').reverse().join('') = "abcba";
    // And, var reverseString = "abcba";
    
    // Compare reverseString and lowerCaseString the result to be return is Boolean
    return reverseString === lowerCaseString; // "abcba" === "abcba"? -- true     
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true

// String with unwanted characters
console.log(palindrome('abcba.,.,')); // should return true