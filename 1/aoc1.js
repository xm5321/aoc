const fs = require('fs');
let input = fs.readFileSync('./input.txt', {encoding: 'utf8'}).split(/\r?\n/);
const calculateModuleFuel = mass => parseInt(mass / 3) - 2;
const calculateFuelConsumption = (arr) => {
    return arr.reduce((total, mass) => {
        return total += calculateFuelConsumption(mass);
    }, 0);
};

console.log(calculateFuelConsumption(input));