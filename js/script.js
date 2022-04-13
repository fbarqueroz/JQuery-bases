/* Basic syntax

// $ --> Access to JQuery library

$(selector) // Inside the parentheses, write the selector

$(selector).action(); // Define the action on the selector

*/

// .ready() --> Check if the document is ready (without issues)

// Full version
$(document).ready(() => {
  console.log("Hello world!");
}); 

// Short version
$(() => {
  console.log("Hello world!");
}); 