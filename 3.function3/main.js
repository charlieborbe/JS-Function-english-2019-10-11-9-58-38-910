// Create a function that outputs the incoming argument string alphabetically.
function alphabetSort(message) {
    // Create a variable that will store the array of characters by using split() method.
    var splitCharArray = message.split('');
    // Create a variable that will store the sorted array of characters by using sort() method.
    var sortCharArray = splitCharArray.sort();
    // Create a variable that will store the array of characters by using split() method.
    var joinCharArray = sortCharArray.join('');

    // Return string with alphabetically order characters
    return joinCharArray;

    // For shorter solution for this case with the same process and output.
    // Combination of split, sort and join method in the return statement
    // return message.split("").sort().join("");  // Same as result of joinCharArray. 
}
document.write(alphabetSort('hello')); // should return 'ehllo'