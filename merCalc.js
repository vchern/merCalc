var initial = 0; // initial investment amount
var mer = 0; // management expense ratio
var merTotal = 0;
var period = 0; // how long the fun is held for, in years
var annualReturnRate = 0; // how much the fund gains as a percentage
var finalAmount = 0;

initial = 10000;
finalAmount = initial;
mer = 0.025;
var dailyMER = mer / 365;
period = 10;
annualReturnRate = 0.07;
var dailyReturnRate = annualReturnRate / 365;


// Calculates the final amount of MER and investment by calculating amount per day
for (var i = 1; i < period * 365; i++) {
    finalAmount = finalAmount + finalAmount * dailyReturnRate;
    merTotal = merTotal + finalAmount * dailyMER;
}

// Round shit cuz float
finalAmount = Number(Math.round(finalAmount + 'e2') + 'e-2');
merTotal = Number(Math.round(merTotal + 'e2') + 'e-2');
var finalReturn = Number(Math.round(finalAmount - initial + 'e2') + 'e-2');


// Write to document
$(document).ready(function() {
    document.getElementById("results").innerHTML = "The total cost with a MER of " + (mer * 100).toFixed(2) +
        "% and an initial investment of $" + initial +
        " over a period of " + period + " years with an annual rate of return at " + (annualReturnRate * 100).toFixed(2) + "% is $" + merTotal + "!" + " Compare that to the amount that you gained: $" + finalReturn + "." + " Your final amount is: $" + finalAmount + "."
    var ctx = document.getElementById('resultsgraph').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['5 years', '10 years', '15 years', '20 years', '25 years', '30 years'],
            datasets: [{
                label: 'MER = 2.5%',
                data: [5, 10, 16, 24, 36, 46],
                backgroundColor: "rgba(153,255,51,1)"
            }, {
                label: 'MER = 0.05%',
                data: [5, 11, 18, 30, 40, 55],
                backgroundColor: "rgba(255,153,0,1)"
            }]
        }
    });
});



//test