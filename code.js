var stringList = ['March', 'April', 'May'];

var numList = [13, 78, 34];

var boolList = [false, true, false];

//  Step 1
var monthString = 'Months listed are ';
for (var i = 0; i < stringList.length; i++){
  if (i < (stringList.length - 1)){
    monthString = monthString + stringList[i] + ', '
  } else {
    monthString = monthString + stringList[i] + '.'
  }
}
console.log('Step 1:', monthString);


//  Step 2
console.log('Step 2:', numList[numList.length - 1]);


//  Step 3
var singleString = '';
for (var i = 0; i < numList.length; i++){
  singleString += numList[i];
}
console.log('Step 3:', singleString);


//  Step 4
var total = 0;
for (var i = 0; i < numList.length; i++) {
  total += numList[i];
}
console.log('Step 4:', total);


//  Step 5
if (boolList[1]){
  console.log('Step 5:', numList[0] + numList[numList.length - 1]);

} else {
  console.log(numList[1] * numList[1]);
}


//  Step 6
for (var i = 0; i < boolList.length; i++){
  if (boolList[i]){
    console.log('Step 6:', numList[i]);
  }
}


//  Step 7
var combinedArray = [];
// for (var i = 0; i < stringList.length; i++){
//   combinedArray.push(stringList[i]);
// }
//
// for (var i = 0; i < numList.length; i++){
//   combinedArray.push(numList[i]);
// }
//
// for (var i = 0; i < boolList.length; i++){
//   combinedArray.push(boolList[i]);
// }

// console.log('Step 7:', combinedArray.reverse());

function addToArray(array) {
  for (var i = 0; i < array.length; i++){
    combinedArray.push(array[i]);
  }
}

addToArray(stringList);
addToArray(numList);
addToArray(boolList);
console.log('Step 7:', combinedArray.reverse());
