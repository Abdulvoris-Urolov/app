var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.honk = function () {
        console.log(('Urolov'));
    };
    return Vehicle;
}());
var vehicle = new Vehicle('orange');
console.log(vehicle.color);
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.drive = function () {
        console.log('Abdulvahob');
    };
    ;
    Car.prototype.startDrivingProcess = function () {
        this.drive();
        this.honk();
    };
    return Car;
}(Vehicle));
// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honk();
var car = new Car('red');
car.startDrivingProcess();
