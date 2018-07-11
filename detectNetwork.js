// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
if(cardNumber.length===14 && (cardNumber.slice(0,2)==='38' || cardNumber.slice(0,2)==='39')){
return 'Diner\'s Club';
}
if(cardNumber.length===15 && (cardNumber.slice(0,2)==='34' || cardNumber.slice(0,2)==='37')){
return 'American Express';
}

//var isVisa = cardNumber.slice(0,4);

if(cardNumber.length===16 && Number(cardNumber.slice(0,2)) >= 51 && Number(cardNumber.slice(0,2)) <= 55){
return 'MasterCard';
}
if((cardNumber.slice(0,4)==='6011' || cardNumber.slice(0,2)==='65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
  return 'Discover';
}
if(Number(cardNumber.slice(0,3)) >=644 && Number(cardNumber.slice(0,3)) <= 649 && (cardNumber.length ===16 || cardNumber.length === 19)) {
  return 'Discover';
}
var maestroPf = cardNumber.slice(0,4);
if((maestroPf === '5018' || maestroPf === '5020' || maestroPf ==='5038' || maestroPf === '6304') && (cardNumber.length >=12 && cardNumber.length <= 19)) {
  return 'Maestro';
}

var ChinaPf = Number(cardNumber.slice(0,6));
if(ChinaPf<=622925 && ChinaPf >= 622126 && cardNumber.length>=16 && cardNumber.length<=19){
  return 'China UnionPay';
}
if((cardNumber.slice(0,3)==='624' || cardNumber.slice(0,3) === '625' || cardNumber.slice(0,3) === '626') && cardNumber.length>=16 && cardNumber.length<=19){
  return 'China UnionPay';
}
if(Number(cardNumber.slice(0,4))>=6282 && Number(cardNumber.slice(0,4))<=6288 && cardNumber.length>=16 && cardNumber.length<=19){
  return 'China UnionPay';
}

var isSwitch = Number(cardNumber.slice(0,4));
if((Number(cardNumber.slice(0,4))===4903 || isSwitch === 4905 || isSwitch === 4911 || isSwitch === 4936 || isSwitch === 6333 || isSwitch === 6759) && (cardNumber.length===16 || cardNumber.length === 18 || 
cardNumber.length === 19)){
  return 'Switch';
}
if((cardNumber.slice(0,6)==='633110' || cardNumber.slice(0,6) === '564182') && (cardNumber.length===16 || cardNumber.length === 18 || cardNumber.length === 19)){
  return 'Switch';
}
if(cardNumber[0]==='4' && (cardNumber.length===13 || cardNumber.length===16 || cardNumber.length===19)){
return 'Visa';
}

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


