// Create a function that will count how many words a string contains.
function countWords(message){
    // Remove start and end white-space of the string
    message = message.replace(/(^\s*)|(\s*$)/gi,"");
    // Convert 2 or more spaces to 1 space
    message = message.replace(/[ ]{2,}/gi," ");
    // Exclude newline with a start spacing  
    message = message.replace(/\n /,"\n");
    // message = "Good morning, I love JavaScript." 

    return message.split(' ').length;
    // Output: 5
  }
  document.write(countWords('Good morning, I love JavaScript.')); // should return 5