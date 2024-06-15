function calculete() {
  var name = document.getElementById("user_name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var loanAmount = parseInt(document.getElementById("loan_amount").value);
  var month = parseInt(document.getElementById("month").value);

  document.getElementById("showName").innerHTML = name;
  document.getElementById("showphone").innerHTML = phone;
  document.getElementById("showemail").innerHTML = email;
  document.getElementById("showaddress").innerHTML = address;
  document.getElementById("showloan_amount").innerHTML = loanAmount;
  document.getElementById("showmonth").innerHTML = month + "  Month";

  if (month == 6) {
    let interest = 2;
    let payPerMonth = loanAmount / month;

    let totalInterist = loanAmount * (interest / 100);

    let totalInteristPayPerMonth = totalInterist / month;

    let permonth = payPerMonth + totalInteristPayPerMonth;
    document.getElementById("showInterest").innerHTML = interest + "%";
    document.getElementById("showInterestAmount").innerHTML = totalInterist;
    document.getElementById("totalPayable").innerHTML =
      totalInterist + loanAmount;
    document.getElementById("permonthPayable").innerHTML = permonth;
  } else if (month == 12) {
    let payPerMonth = loanAmount / month;
    let interest = 5;
    let totalInterist = loanAmount * (interest / 100);
    let totalInteristPayPerMonth = totalInterist / month;
    let permonth = payPerMonth + totalInteristPayPerMonth;
    document.getElementById("showInterest").innerHTML = interest + "%";
    document.getElementById("showInterestAmount").innerHTML = totalInterist;
    document.getElementById("totalPayable").innerHTML =
      totalInterist + loanAmount;
    document.getElementById("permonthPayable").innerHTML = permonth;
  } else if (month == 24 || month == 36) {
    let payPerMonth = loanAmount / month;
    let interest = 10;
    let totalInterist = loanAmount * (interest / 100);
    let totalInteristPayPerMonth = totalInterist / month;
    let permonth = payPerMonth + totalInteristPayPerMonth;
    document.getElementById("showInterest").innerHTML = interest + "%";
    document.getElementById("showInterestAmount").innerHTML = totalInterist;
    document.getElementById("totalPayable").innerHTML =
      totalInterist + loanAmount;
    document.getElementById("permonthPayable").innerHTML = permonth;
  }
}
