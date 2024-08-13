let age: number = 15
let str: string = "Lus"
let isMarried: boolean = false

const getName = (name: string): string =>{
    return `${name}`
}

const getAge = (age: number): number => age
const getIsMarried = (isMarried : boolean): boolean => isMarried

console.log(getName(str))
console.log(getAge(age))
console.log(getIsMarried(isMarried))