/* let testArray = [
  ['Radiohead', 'Arcade Fire', 'Grimes', 'Beach House'],
  [47, 55, 13],
  ['Link', 11, 'Boyo']
];

//console.log(testArray[0][0]);
console.log(testArray[0].length); */

/*const hasEnoughPlayers = function (teamArray) {
    
    if (teamArray.length >= 7) {
        return true;
    } else {
        return false;
    }
    
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team)); */

/*var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139]

test.forEach(function(indexCopy, actualIndex) {
  if (indexCopy % 3 === 0) {
    test[actualIndex] += 100;
  }
  return;
}); */

/*var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

// return these with map() as a new array with tip included. round to two decimal points

let totals = bills.map(function(element) {

  element *= 1.15;
  element = Number(element.toFixed(2));
  return element;

});

console.log(totals);*/

var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for (let row = 0; row < numbers.length; row++ ) {

  for (let column = 0; column < numbers[row].length; column++) {

    if (numbers[row][column] % 2 === 0) {

      numbers[row][column] = 'even';

    } else {

      numbers[row][column] = 'odd';

    }

  }

}

console.log(numbers);