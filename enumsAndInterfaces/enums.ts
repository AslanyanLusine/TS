enum Color{
    Red = 'red',
    Green = 'green',
    Blue = 'blue'
}

const getColor = (getColor : typeof Color ) : string =>{
    return `${getColor.Red} , ${getColor.Green}, ${getColor.Blue}`
}

console.log(getColor(Color))