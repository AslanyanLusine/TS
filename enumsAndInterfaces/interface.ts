interface Car {
    make: string,
    model: string,
    year: number
}

class Cartype implements Car{

    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number){
        this.make = make,
        this.model = model, 
        this.year = year
    }

    display(): void{
        console.log(`Make: ${this.make}, Model: ${this.model}, Year:${this.year}`)
    }
}

const car = new Cartype('BMW', 'X6', 2022)

car.display()

