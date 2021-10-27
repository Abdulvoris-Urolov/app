class Vehicle {

  constructor(public color: string){
  }

  protected honk (): void{
    console.log(('Urolov'));
    
  }
}
const vehicle = new Vehicle('orange');
console.log(vehicle.color);


class Car extends Vehicle {
  private drive (): void{
    console.log('Abdulvahob');
  };

  constructor(public wheels: number, public  color: string){
    super(color);
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();

const car = new Car(4, 'red');
car.startDrivingProcess();