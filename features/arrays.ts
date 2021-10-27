const carMakers: string[] = ['GM', 'chevrolet', 'audi'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
const cars = carMakers[0];
const myCar = carMakers.pop();

//Prevent incompatible values
carMakers.push();

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importDates: (Date | string)[] = [new Date()]; 
importDates.push('2023-10-10');
importDates.push(new Date());
