var Vehicle = /** @class */ (function () {
    function Vehicle() {
    }
    Vehicle.prototype.drive = function () {
        console.log('Abdulvoris');
    };
    ;
    Vehicle.prototype.honk = function () {
        console.log(('Urolov'));
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
