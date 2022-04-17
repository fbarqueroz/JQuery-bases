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
  $("h2").hide();
});

// ---- Selectors ----

// 1- document --> global label
  $(document).ready(() => {
    console.log("Hello world! (Full)");
  });

// 2- ("h1") --> using ""
  $(() => {
    $("h2").hide();
  });

// 3- (".tamales") , ("#tamales") --> select class(.) or id(#) between "" and inside ()
  $(() => {
    $(".classExample").hide();
  });

// ---- Compound selectors ----

$(() => {
  $("p#p1").hide();
  // $("ul li:first").hide(); // Hide the first element in the list - just for the first unordered list
  // $("ul li:first-child").hide() // Hide all the fist element in the all lists
});

// ---- Event structure ----

$(() => {
  // $(selector).hide(speed, callback);
  $("ul li:first-child").hide(1000);
});

// Click event

$(() => {
  $("h1").click(
    () => {
      $("h1").hide(1000); // This is the effect
    }
  );
});

// Click event with button

$(document).ready(() => {
  $(".btn-example").click(() => {
    // Everything inside the function is the event that will execute the button.
    $("h1").hide(2000);
  });
});

/* 
  -- Animate sintax --
  - structure = => $(selector).animate({params}, speed, callback);
  - params = define the propietaries of css that will be animate
*/

$(document).ready(() => {
  $("#btn").click(() => {
    $(".cuadrado-azul").animate({width: '150px'});
  });
});

// Variables

$(document).ready(() => {

  const cuadradoAzul = $(".cuadrado-azul");
  $("#btn-blue").click(() => {
    cuadradoAzul.animate({width: '150px'});
  });
});

// Callbacks --> is used to execute a line of code after an animation

$(document).ready(() => {
  $("#btn-yellow").click(() => {
    $(".cuadrado-amarillo").hide(2000, ()=> {
      alert("This is the callback :D")
    });
  });
});

// css method --> css.("propietaryName")

$(document).ready(() => {
  $(".cssBtn").click(() => {
    let prop = $("#css-panel").css("background-color");
    alert(prop);
  });
});

// Change css propietaries

$(document).ready(() => {
  $(".changeBtn").click(() => {
    $("#css-panel").css({"background-color": "red", "color": "white"});
  });
});

// Method chaining

$(document).ready(() => {
  $(".mcBtn").click(() => {
    let pnl = $("#css-panel");
    pnl.css({"background-color": "grey", "color": "white"}).slideUp(2000).slideDown(2000);
  });
});

/*---- (͠≖ ͜ʖ͠≖)👌 ----*/