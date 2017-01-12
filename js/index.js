// Future improvement ideas: 
// Figure out what evils the eval function has 
// add more safety checks

$(document).ready(function() {

  var totalString = '';
  var operators = ['+', '-', 'x', '÷'];

  //digit Entry + digit combining  
  $('.number').on('click', function() {
    var buttonEntry = $(this).text();
    totalString += buttonEntry;
    console.log("CombinedDigits while pressing a number: " + totalString);
    $('#result').html('<p>' + totalString + '</p>');
  });

  // adding operators to the total string that will be evaluated
  $('.operator').on('click', function() {
    var opVal = this.innerHTML;
    totalString += opVal;
    $('#result').html('<p>' + totalString + '</p>');
    console.log(totalString);
  });

  $('.equal').on('click', function() {

    var lastChar = totalString[totalString.length - 1];
    //replace the operator strings with actual operators
    var equation = totalString.replace(/x/g, '*').replace(/÷/g, '/');
    // check if last character is an operator, if so, remove it.
    if (operators.indexOf(lastChar) > -1) {
      equation = equation.slice(0, -1);
      console.log(equation);
    }

    var result = eval(equation);
    $('#result').html('<p>' + result + '</p>');
    console.log('final result: ' + result);
  });

  //when pressing the clear button, clean it all up
  $('.clear').on('click', function() {
    $('#result').html('<p>');
    totalString = '';
  });
});