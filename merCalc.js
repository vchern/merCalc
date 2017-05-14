// Write to document
  function calculate(initial, merForm){
    var mer = merForm/100
    var dailyMER = mer/365
    finalAmount = initial;
    
    
    var period = 10;
var annualReturnRate = 0.07;
var dailyReturnRate = annualReturnRate / 365;
var merTotal = 0;


// Calculates the final amount of MER and investment by calculating amount per day
for (var i = 1; i < period * 365; i++) {
    finalAmount = finalAmount + finalAmount * dailyReturnRate;
    merTotal = merTotal + finalAmount * dailyMER;
}

// Round shit cuz float
finalAmount = Number(Math.round(finalAmount + 'e2') + 'e-2');
merTotal = Number(Math.round(merTotal + 'e2') + 'e-2');
var finalReturn = Number(Math.round(finalAmount - initial + 'e2') + 'e-2');
    
    document.getElementById("results").innerHTML = "The total cost with a MER of " + (mer * 100).toFixed(2) +
        "% and an initial investment of $" + initial +
        " over a period of " + period + " years with an annual rate of return at " + (annualReturnRate * 100).toFixed(2) + "% is $" + merTotal + "!" + " Compare that to the amount that you gained: $" + finalReturn + "." + " Your final amount is: $" + finalAmount + "."
    var ctx = document.getElementById('resultsgraph').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['5 years', '10 years', '15 years', '20 years', '25 years', '30 years'],
            datasets: [{
                label: 'MER = ' + mer * 100 + '%',
                data: [5, 10, 16, 24, 36, 46],
                backgroundColor: "rgba(153,255,51,1)"
            }]/*, {
                label: 'MER = ' + mer2 * 100 + '%',
                data: [5, 15, 20, 30, 40, 100],
                backgroundColor: "rgba(255,153,0,1)"
            }]*/
        }
    });
  }
