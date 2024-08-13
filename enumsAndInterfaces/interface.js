var Cartype = /** @class */ (function () {
    function Cartype(make, model, year) {
        this.make = make,
            this.model = model,
            this.year = year;
    }
    Cartype.prototype.display = function () {
        console.log("Make: ".concat(this.make, ", Model: ").concat(this.model, ", Year:").concat(this.year));
    };
    return Cartype;
}());
var car = new Cartype('BMW', 'X6', 2022);
car.display();
