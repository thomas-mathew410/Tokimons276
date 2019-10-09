var act1_weight = document.getElementById("act1_weight");
var act1_numerator = document.getElementById("act1_numerator");
var sub_buton = document.getElementById("submit_button");

// var weightArray = [act1_weight, act2_weight, act3_weight, act4_weight];
// var numeratorArray = [act1_numerator, act2_numerator, act3_numerator, act4_numerator];
// var denominatorArray = [act1_denominator, act2_denominator, act3_denominator, act4_denominator];

var act1_weight_Val = 0;
var act1_numerator_Val = 0;


document.querySelector("#submit_button").addEventListener("click", function() {
    act1_weight_Val = parseFloat(document.querySelector("#act1_weight").value);
    act1_numerator_Val = parseFloat(document.querySelector("#act1_numerator").value);
});