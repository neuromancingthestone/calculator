window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  document.getElementById("loan-amount").value = 100000;
  document.getElementById("loan-years").value = 30;
  document.getElementById("loan-rate").value = 4;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const uiVals = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(uiVals));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
//  console.log(values.rate);
  const p = values.amount;                                // Get Principle
  const yearRate = (values.rate)/100;                     // Calc yearly rate
  const i = yearRate / 12;                                // Calc monthly interest rate
  const n = Math.floor(values.years * 12);                // Calc number of payments, must be a whole number since it is a month
  const payment = (p * i) / (1 - Math.pow((1 + i),-n));   // Calc payment using formula
//  console.log(payment);
  return payment.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {  
  document.getElementById("monthly-payment").innerText = "$" + monthly;
}
