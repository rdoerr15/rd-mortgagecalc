//get values from form
//validate inputs
function getValues() {
    let principal = document.getElementById('amount').value;
    let term = document.getElementById('term').value;
    let rate = document.getElementById('interest').value;

    principal = parseFloat(principal);
    term = parseInt(term);
    rate = parseFloat(rate);

    if (!isNaN(principal) && !isNaN(term) && !isNaN(rate)
        && principal > 0 && term > 0 && rate > 0) {
          
          let totals = calculateTotals(principal, term, rate);
          let payments = calculatePayments(principal, term, rate);

          displayTotals(totals);
          displayPayments(payments);

    } else {
      Swal.fire({
        icon: 'error',
        backdrop: false,
        title: 'Sorry!',
        text: 'Please eneter valid numbers for your loan details.'
      })
    }
}

//calculate loan payments
//calculate the totals
function calculateTotals(principal, term, rate) {
  //get monthly payment
  let monthlyPayment = calculateMonthlyPayment(principal, term, rate)
  //total cost = monthly payment * term
  let totalCost = monthlyPayment * term;
  //total int = cost - principal
  let totalInterest = totalCost - principal;

  let totals = {
    monthlyPayment: monthlyPayment,
    principal: principal,
    cost: totalCost,
    interest: totalInterest
  };

  return totals;
}

//calculate the amortization schedule
function calculatePayments(principal, term, rate) {
  //get monthly payment
    let monthlyPayment = calculateMonthlyPayment(principal, term, rate)
  
  //calc remaining values
    let balance = principal;
    let totalInterest = 0;

    let payments = [];

    for (let month = 1; month <= term; month += 1) {
        let interest = balance * (rate/1200);
        let principalPayment = monthlyPayment - interest;
        totalInterest = totalInterest + interest; //or totalInterest += interest
        balance = balance - principalPayment;

        let loanPayment = {
          month: month,
          payment: monthlyPayment,
          principal: principalPayment,
          interest: interest,
          totalInterest: totalInterest,
          balance: Math.abs(balance) 
        }
        payments.push(loanPayment);
      }
    return payments;
  }

function calculateMonthlyPayment(principal, term, rate) {
    let monthlyRate = rate / 1200;
    let monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));

    return monthlyPayment;
}

//display totals on page
//display the table rows
function displayTotals(loanTotals) {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });

    document.getElementById('monthlyPayment').textContent = formatter.format(loanTotals.monthlyPayment);
    document.getElementById('totalPrincipal').textContent = formatter.format(loanTotals.principal);
    document.getElementById('totalInterest').textContent = formatter.format(loanTotals.interest);
    document.getElementById('totalCost').textContent = formatter.format(loanTotals.cost);
}

function displayPayments(loanPayments) {
    const tableRowTemplate = document.getElementById('paymentsRow');
    let tableBody = document.getElementById('paymentsTable');
    let formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    for(let i = 0; i < loanPayments.length; i++) {
        let payment = loanPayments[i];

        let tableRow = document.importNode(tableRowTemplate.content, true);
        let tds = tableRow.querySelectorAll('td');

        tds[0].textContent = payment.month;
        tds[1].textContent = formatter.format(payment.payment);
        tds[2].textContent = formatter.format(payment.principal);
        tds[3].textContent = formatter.format(payment.interest);
        tds[4].textContent = formatter.format(payment.totalInterest);
        tds[5].textContent = formatter.format(payment.balance);

        tableBody.appendChild(tableRow);
    }
}


