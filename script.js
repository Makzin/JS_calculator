$(document).ready(function() {

var buttonEntry = ''; //whatever buttons are pressed
var combinedDigits = 0; //the result of all buttonEntries to allow for digit combining
var previousEntry = 0; //the previous entry
var intermediateEntry = '';
var result = 0; // whatever will be displayed in the result screen
var resultCheck = 0;
var reset = ''; // the clear button
var opEntry = ''; // the operator entry

// operators object to reference later
var operators = {
    '+': function(a, b) { return a + b },
    'x': function(a, b) { return a * b },
     '/': function(a, b) { return a / b },
  '-': function(a, b) { return a - b }
};


//digit Entry + digit combining
$('.number').on('click', function() {
combinedDigits = '';
buttonEntry = $(this).text();
intermediateEntry += buttonEntry;
combinedDigits = parseInt(intermediateEntry);
$('#result').html('<p>' + intermediateEntry + '</p>')
})

$('.operator').on('click', function() {
opEntry = $(this).text();
resultCheck = operators[opEntry](previousEntry, combinedDigits );
  console.log('previousEntry before if statement : ' + previousEntry);
  if (resultCheck == 0) {
    previousEntry = combinedDigits;
  }
  else if (resultCheck < 0 && combinedDigits > 0) {
    previousEntry = -Math.abs(result)
           }
  else {
    previousEntry = resultCheck;
  }
intermediateEntry = '';
console.log('previousEntry after if statement : ' + previousEntry);

})

$('.equal').on('click', function() {
  result = operators[opEntry](previousEntry, combinedDigits)
  $('#result').html('<p>' + result + '</p>')
  console.log('final result: ' + result);
})

$('.clear').on('click', function() {
  $('#result').html('<p>');
  result = 0;
  previousEntry = 0;
  combinedDigits = '';
  buttonEntry = '';
  intermediateEntry = '';
})
});


// TO DO
/*Make sure all digit entries show up on result screen as you type them

Make sure the clear actually sets the result to 0 and display that

How to handle the second entry?

How to handle multiple entries with multiple operators?

*/
