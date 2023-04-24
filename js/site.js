function totalMonthlyPayment() {
    //get the inputs
    let loanAmount = document.getElementById('loanAmount').value;
    let termMonths = document.getElementById('termMonths').value;
    let rate = document.getElementById('interestRate').value;

    //turn them into integers
    loanAmount = parseFloat(loanAmount);
    termMonths = parseFloat(termMonths);
    rate = parseFloat(rate);

    //make calculation
    let monthlyPayment = (loanAmount * (rate / 1200)) / (1 - ((1 + rate / 1200)**(-termMonths)));

    //display result
    let resultDiv = document.getElementById('monthlyPayment');
    resultDiv.innerHTML = Math.round(monthlyPayment).toLocaleString();

    return monthlyPayment;
}

function monthlyPaymentData() {
    let loanAmount = document.getElementById('loanAmount').value;
    let termMonths = document.getElementById('termMonths').value;

    loanAmount = parseFloat(loanAmount);
    termMonths = parseFloat(termMonths);

    let totalPrincipal = loanAmount;

    let monthlyPayment = totalMonthlyPayment();

    let totalCost = monthlyPayment * termMonths;
    
    let totalInterest = totalCost - totalPrincipal;

    //display results
    let principalResult = document.getElementById('totalPrincipal');
    principalResult.innerHTML = Math.round(totalPrincipal).toLocaleString();

    let intResult = document.getElementById('totalInt');
    intResult.innerHTML = Math.round(totalInterest).toLocaleString();

    let costResult = document.getElementById('totalCost');
    costResult.innerHTML = Math.round(totalCost).toLocaleString();
}

function generateMonth() {
  let termMonths = document.getElementById('termMonths').value;
  termMonths = parseFloat(termMonths);
  
  let start = 0;
  let end = termMonths;
  
  let monthArray = [];

  for (let month = start; month <= end; month++) {
    monthArray.push(month); 
  }

  return monthArray; 
}

function calculateBalance() {
    let loanAmount = document.getElementById("loanAmount").value;
    loanAmount = parseFloat(loanAmount);


    let monthArray = generateMonth();

    for (let i = 0; i < monthArray.length; i++) {
        let startingBalance = loanAmount[i];

        currentBalance = 
    }
}

function calculateInt() {
    let loanAmount = document.getElementById("loanAmount").value;
    loanAmount = parseFloat(loanAmount);

    let rate = document.getElementById("interestRate").value;
    rate = parseFloat(rate);

    let monthArray = generateMonth();

    let int = 0;

    for (let i = 0; i < monthArray.length; i++) {
      currentInt = loanAmount * (rate / 1200)[i];
    
      int = int + currentInt;
    }
    return int;
}

function calculatePrincipalPayment() {
    
}

function calculateTotalInt() {

}

