// JavaScript Document
$( function() {
$("map area").click( function(){
if ($(this).attr("id") == "Rabbit") {
$("#feedback").css("color","red");
$("#feedback").html("No, this is the <strong>rabbit</strong> cave!");
}
if ($(this).attr("id") == "Lobster") {
$("#feedback").css("color","red");
$("#feedback").html("No, this is the <strong>Lobster</strong> cave!");
}
if ($(this).attr("id") == "Bear") {
$("#feedback").css("color","red");
$("#feedback").html("No, this is the <strong>bear</strong> cave!");
}
if ($(this).attr("id") == "Dog") {
$("#feedback").css("color","green");
$("#feedback").html("Yes, this is the <strong>dog</strong> cave!");
}
if ($(this).attr("id") == "Desert") {
$("#feedback").css("color","red");
$("#feedback").html("No, this is the <strong>Desert</strong> cave!");
}
if ($(this).attr("id") == "Snake") {
$("#feedback").css("color","red");
$("#feedback").html("No, this is the <strong>Snake</strong> cave!");
}
$("#feedback").css();
});
}); //end main jQuery function