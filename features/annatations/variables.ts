let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// object quramiz 
let now: Date = new Date();

// Array
let color: string[] = ['reg', 'green', 'yellow'];
let myNumbers: number[] = [1, 23, 56];
let truths: boolean[] = [true, false, true];

// Classes
class Car {

}
let car: Car = new Car();

// object literal
let point: { x: number; y: number; } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
  
}

// when to use annatations
// 1) Function that returns the 'any' type
const json = '{ "x": 10, "y": 20 }';
const coordinates: {x: number; y: number; } = JSON.parse(json);
console.log(coordinates);//{x: 10, y: 20};

// When we declare a variable on one line
// and initialize it later

let words = [ 'red', 'yellow', 'black' ];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if(words[i] === 'yellow') {
    foundWord = true; 
  }
}


// Variable whose type cannot be inferred correctly
let numbers = [-10, -5, 20];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0){
    numberAboveZero = numbers[i];
  }
}