// Shorthand for $( document ).ready()
$(function() {
    console.log( "Ready!" );
    setInterval(function() {
      $(".blinky").toggleClass("active");
    }, 1000);
    $(".nav-link").on("click", function(event) {
      event.preventDefault();
      alert("Naw Bruh");
    });
});
