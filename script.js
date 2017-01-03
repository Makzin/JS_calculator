$(document).ready(function() {

var buttonEntry = ''; //whatever buttons are pressed
var combinedDigits = 0; //the result of all buttonEntries to allow for digit combining
var previousEntry = 0; //the previous entry
var intermediateEntry = '';
var result = 0; // whatever will be displayed in the result screen
var resultCheck = 0;
var reset = ''; // the clear button
var opEntry = ''; // the operator entry
var opCounter = 0;

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
console.log("CombinedDigits while pressing a number: " + combinedDigits);
$('#result').html('<p>' + intermediateEntry + '</p>')
})

$('.operator').on('click', function() {
  opEntry = $(this).text();

console.log("PreviousEntry before if statement: " + previousEntry)
console.log("CombinedDigits before if statement: " + combinedDigits)
 // previousEntry will always be 0 when the operator button is pressed for the first time, so we need to assign them whatever digits were entered in the first round.
if (opCounter == 0 && opEntry != 'x' && opEntry != '/') {
 result = operators[opEntry](previousEntry, combinedDigits)
 previousEntry = result;
 console.log("it's using the first if statement!")
 combinedDigits = 0;

}
else if (opCounter == 0 && (opEntry == 'x' || opEntry == '/')) {
  result = operators[opEntry](combinedDigits, 1)
  previousEntry = result;
   console.log("it's using the second if statement!")
  combinedDigits = 0;
}

else {
  result = operators[opEntry](previousEntry, combinedDigits)
  previousEntry = result;
   console.log("it's using the third if statement!")
}

intermediateEntry = '';
opCounter++;
console.log('previousEntry AFTER if Statement : ' + previousEntry);
  console.log("CombinedDigits AFTER if statement: " + combinedDigits)
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
  opCounter = 0;
})
});


// TO DO
/*Make sure all digit entries show up on result screen as you type them

Make sure the clear actually sets the result to 0 and display that

How to handle the second entry?

How to handle multiple entries with multiple operators?

*/
