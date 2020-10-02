var inputString = "hello";

// Create a function that will return the reverse order of the String
function reverseString(message){
        // Create a variable that will store : New Array by using split() method 
        var splitString = message.split(""); // var splitString = inputString.split("");
        // Output: ["h", "e", "l", "l", "o"]
     
        // Create a variable that will store : New Created Array by using reverse() method to reverse the splitString Array
        var reverseSplitString = splitString.reverse(); // var reverseSplitString = ["h", "e", "l", "l", "o"].reverse();
        // Output: ["o", "l", "l", "e", "h"]
     
        // Create a variable that will store : reverseSplitString elements to a string by using join() method
        var joinReverseString = reverseSplitString.join(""); // var joinReverseString = ["o", "l", "l", "e", "h"].join("");
        // Output: "olleh"
        
        //Step 4. Return the joinReverseString / reversed string
        return joinReverseString; 
        // Output: "olleh"

        // For shorter solution for this case with the same process and output.
        // Combination of split, reverse and join method in the return statement
        // return message.split("").reverse().join("");         
}
document.write(reverseString(inputString));
