


var roman = function(input){
  if (input > 3999 || input < 1) {
    return false;
 }
 var arrayI = [];
 var arrayX = [];
 var arrayXL = [];
 var arrayL = [];
 var arrayXC = [];
 var arrayC = [];
 var arrayCD = [];
 var arrayD = [];
 var arrayCM = [];
 var arrayM = [];

 var numerals = ["","I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]

 if (input >= 3000){
   arrayM.push('M')
   input -= 1000;
 }
if (input >= 2000){
  arrayM.push('M')
  input -= 1000;
}
if (input >= 1000){
  arrayM.push('M')
  input -= 1000;
}
if (input >= 900){
  arrayCM.push('CM')
  input -= 900;
}
if (input >= 500){
  arrayD.push('D')
  input -= 500;
}
if (input >= 400){
  arrayC.push("CD")
  input -= 400;
}
if (input >= 300){
  arrayC.push('C')
  input -= 100;
}
if (input >= 200){
  arrayC.push('C')
  input -= 100;
}
if (input >= 100){
  arrayC.push('C')
  input -= 100;
}
if (input >= 50){
  arrayL.push('L')
  input -= 50;
}
if (input >= 40){
  arrayXL.push('XL')
  input -= 40;
}
if (input >= 30){
  arrayX.push('X')
  input -= 10;
}
if (input >= 20){
  arrayX.push('X')
  input -= 10
}
if (input >= 10){
  arrayX.push('X')
  input -= 10;
}
if(input >= 1) {
      arrayI.push(numerals[input]);
}

var total = arrayM.concat(arrayCM, arrayD, arrayCD, arrayC, arrayXC, arrayL, arrayXL, arrayX, arrayI);
var total = total.join('')
$(".result").text(total)


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
debugger;
    var input = parseInt($("input#number").val());
    roman(input);

  });
});
