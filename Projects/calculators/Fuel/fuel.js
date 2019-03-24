let distance = document.getElementById('distance');
let fuel = document.getElementById('fuel');
let efficiency = document.getElementById('efficiency');
let needed = document.getElementById('fuel-needed');
let cost = document.getElementById('cost');

function calculatePrice() {
    needed.value = Math.floor(distance.value / efficiency.value);
    cost.value = Math.floor(needed.value * fuel.value);
}