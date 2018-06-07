var arrayI = [];
var arrayV =[];
var arrayX = [];
var arrayL = [];
var arrayC = [];
var arrayD = [];
var arrayM = [];
var numerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]



var roman = function(input){
  if (input > 3999 || input < 1) {
    return false;
 }
  if (input === 1) {
    arrayI.push('I');
    console.log(arrayI);
    return arrayI;
  }

  if (input === 5){
    arrayV.push('V');
    console.log(arrayV);
    return arrayV;
  }

  if (input === 10) {
    arrayX.push('X');
    console.log(arrayX);
    return arrayX;
  }

  if (input === 50) {
    arrayL.push('L')
    console.log(arrayL);
    return arrayL;
  }

  if (input === 100) {
    arrayC.push('C')
    console.log(arrayC);
    return arrayC;
  }

  if (input === 500) {
    arrayD.push('D')
    console.log(arrayD);
    return arrayD;
  }

  if (input === 1000) {
    arrayM.push('M')
    console.log(arrayM);
    return arrayM;
  }

}







$(function(){
  $("form#number").submit(function(event){
    event.preventDefault();

    var input = parseInt($("input#number").val());
    roman(input);
    console.log(input)
  });
});
