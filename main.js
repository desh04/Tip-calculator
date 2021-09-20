


function CalculateTip() {
  //inputing values
  var Amount = parseInt(document.getElementById('TipAmount').value);
  var Percen = parseInt(document.getElementById('TipPercentage').value);
  var NumPeople = parseInt(document.getElementById('PeopleNumber').value);
  //calculations
  var TotalTip = ( Amount * Percen /100 );
  var EachPerson = Math.round((TotalTip / NumPeople));

  document.getElementById('after').innerHTML ="Tip Amount <br>" +"<b>"+ EachPerson  + " Rs." +"</b>";
}
