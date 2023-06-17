/*
Name: Sarandeep Singh
ID: C0888634
Currency Converter
*/
// Function to convert currency
function convertCurrency() {
  var cadInput = parseFloat(document.getElementById("cadInput").value);
  var usdInput = parseFloat(document.getElementById("usdInput").value);
  
  // Input validation
  if (isNaN(cadInput) && isNaN(usdInput)) {
    alert("Please enter a valid number for CAD or USD.");
    return;
  }
  
  if (!isNaN(cadInput) && !isNaN(usdInput)) {
    alert("Please enter amount in either CAD or USD, not both.");
    return;
  }
  
  // Calculation
  if (!isNaN(cadInput)) {
    var rate = 0.75; 
    var usdResult = cadInput * rate;
    document.getElementById("usdInput").value = usdResult.toFixed(3);
  } else if (!isNaN(usdInput)) {
    var rate = 1.33;
    var cadResult = usdInput * rate;
    document.getElementById("cadInput").value = cadResult.toFixed(3);
  }
}
