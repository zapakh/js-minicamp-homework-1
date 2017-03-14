//Do not change any of the function names

function multiplyByTen(num) {
  return num*10;
}

function subtractFive(num) {
  return num-5;
}

function areSameLength(str1, str2) {
  return str1.length == str2.length;
}

function areEqual(x, y) {
  return x === y;
}

function lessThanNinety(num) {
  return num < 90;
}

function greaterThanFifty(num) {
  return num > 50;
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function divide(x, y) {
  return x / y;
}

function multiply(x, y) {
  return x * y;
}

function getRemainder(x, y) {
  return x % y;
}

function isEven(num) {
  return num % 2 == 0;
}

function isOdd(num) {
  return num % 2 == 1;
}

function square(num) {
  return num * num;
}

function cube(num) {
  return Math.pow(num, 3);
}

function raiseToPower(num, exponent) {
  return Math.pow(num, exponent);
}

function roundNumber(num) {
  return Math.round(num);
}

function roundUp(num) {
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  return str + '!';
}

function combineNames(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
 
function getRectangleArea(length, width) {
  return length * width;
}

function getTriangleArea(base, height) {
  return getRectangleArea(base, height) / 2;
}

function getCircleArea(radius) {
  // Caution: returns a rounded value.
  return Math.round(Math.PI * radius * radius);
}

function getRectangularPrismVolume(length, width, height) {
  return length * width * height;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
