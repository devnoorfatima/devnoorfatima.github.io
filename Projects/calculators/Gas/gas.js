let current = document.getElementById('cor');
let previous = document.getElementById('por');
let gas = document.getElementById('gas');
let price = document.getElementById('price');
let mileage = document.getElementById('mileage');
let totalCost = document.getElementById('totalCost');

function calculateMileage() {
    if (current.value && previous.value && gas.value) {
        mileage.value = Math.round((current.value - previous.value) / gas.value);
        totalCost.value = ((current.value - previous.value) / mileage.value) * price.value;
    } else {
        alert("Please enter the values in input fields.")
    }
}

let distance = document.getElementById('distance');
let efficiency = document.getElementById('efficiency');
let fuel = document.getElementById('fuel');
let fuelNeeded = document.getElementById('fuel-needed');
let cost = document.getElementById('cost');

function calculatePrice() {
    if (distance.value && efficiency.value && fuel.value) {
        fuelNeeded.value = Math.round(distance.value / efficiency.value);
        cost.value = Math.round(fuelNeeded.value * fuel.value);
    }else{
        alert('Please enter some values');
    }
}