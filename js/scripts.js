var arrayI = [];
var arrayV =[];
var arrayX = [];
var arrayL = [];
var arrayC = [];
var arrayD = [];
var arrayM = [];
var numerals = ["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]


var roman = function(input){
  if (input > 3999 || input < 1) {
    return false;
 }

 if (input >= 3000){
   input / 3000
   arrayM.push('M')
   input -= 1000;
 }
if (input >= 2000){
  input / 2000
  arrayM.push('M')
  input -= 1000;
}
if (input >= 1000){
  input / 1000
  arrayM.push('M')
  input -= 1000;
}
if (input >= 500){
  input / 500
  arrayD.push('D')
  input -= 500;
}
if (input >= 400){
  input / 400
  arrayC.push("CD")
  input -= 400;
}
if (input >= 300){
  input / 100
  arrayC.push('C')
  input -= 100;
}
if (input >= 200){
  input / 100
  arrayC.push('C')
  input -= 100;
}
if (input >= 100){
  input / 100
  arrayC.push('C')
  input -= 100;
}
if (input >= 50){
  input / 50
  arrayL.push('L')
  input -= 50;
}
if (input >= 30){
  input / 10
  arrayX.push('X')
  input -= 10;
}
if (input >= 20){
  input / 10
  arrayX.push('X')
  input -= 10
}
if (input >= 10){
  input / 10
  arrayX.push('X')
  input -= 10;
}
if(input >= 1) {
  input = i
    for (var i = 0; i <= numerals.length; i++) {
    arrayI.push(numerals[i]);
  
  }
}

var total = arrayM.concat(arrayD, arrayC, arrayL, arrayX, arrayI);
console.log(total)

  /*if (input === 1) {
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
*/

}







$(function(){
  $("form#number").submit(function(event){
    event.preventDefault();

    var input = parseInt($("input#number").val());
    roman(input);
    console.log(input)
  });
});
