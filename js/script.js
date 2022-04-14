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
  $("h1").hide();
});

// ---- Selectors ----

// 1- document --> global label
  $(document).ready(() => {
    console.log("Hello world! (Full)");
  });

// 2- ("h1") --> using ""
  $(() => {
    $("h1").hide();
  });

// 3- (".tamales") , ("#tamales") --> select class(.) or id(#) between "" and inside ()
  $(() => {
    $(".classExample").hide();
  });

// ---- Compound selectors ----

$(() => {
  $("p#p1").hide();
  $("ul li:first").hide(); // Hide the first element in the list - just for the first unordered list
  $("ul li:first-child").hide() // Hide all the fist element in the all lists
});

// ---- Event scructure ----

