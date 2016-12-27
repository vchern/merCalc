var initial = 0; // initial investment amount
var mer = 0; // management expense ratio
var merTotal = 0;
var period = 0; // how long the fun is held for, in years
var annualReturnRate = 0; // how much the fund gains as a percentage
var finalAmount = 0;

initial = 10000;
finalAmount = initial;
mer = 0.025;
dailyMER = mer/365
period = 10;
annualReturnRate = 0.07;
dailyReturnRate = annualReturnRate/365

for(i = 1; i < period*365; i++){
	finalAmount = finalAmount+ finalAmount*dailyReturnRate;
	//console.log(finalReturn);
	merTotal = merTotal + finalAmount*dailyMER;
	//console.log(merTotal);
}

finalAmount = Number(Math.round(finalAmount+'e2')+'e-2');
merTotal = Number(Math.round(merTotal+'e2')+'e-2');
var finalReturn = Number(Math.round(finalAmount - initial + 'e2')+'e-2');


// finalReturn = initial * Math.pow((1 + annualReturnRate/365), (365*10));

// = initial * mer * period;
$( document ).ready(function() {
    document.getElementById("results").innerHTML = "The total cost with a MER of " + (mer*100).toFixed(2) + 
	"% and an initial investment of $" + initial + 
	" over a period of " + period + " years with an annual rate of return at " + (annualReturnRate*100).toFixed(2) + "% is $"
	+ merTotal + "!" + " Compare that to the amount that you gained: $" + finalReturn +	"." + " Your final amount is: $" + finalAmount + "."
});


/*
console.log("The total cost with a MER of " + (mer*100).toFixed(2) + 
	"% and an initial investment of " + initial + 
	" over a period of " + period + " years with an annual rate of return at " + (annualReturnRate*100).toFixed(2) + "% is $"
	+ merTotal + "!" + " Compare that to the amount that you gained: " + finalReturn +
	".");
console.log("Final return is: " + finalAmount);
*/

