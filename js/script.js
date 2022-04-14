/* 
Basic syntax

  - $ --> Access to JQuery library
  * $(selector) // Inside the parentheses, write the selector
  * $(selector).action(); // Define the action on the selector
*/

/*
  * .ready() --> Check if the document is ready (without issues)
  - It's good practice to code JQuery inside the function --> document.ready()
*/

// Full version
$(document).ready(() => {
  console.log("Hello world! (Full)");
}); 

// Short version
$(() => {
  console.log("Hello world! (Short)");
}); 

/* 
  * .hide() --> hide an element or label 
  * "" --> refers to a label
*/
$(() => {
  $("p").hide();
});