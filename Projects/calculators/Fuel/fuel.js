let distance = document.getElementById('distance');
let fuel = document.getElementById('fuel');
let efficiency = document.getElementById('efficiency');
let needed = document.getElementById('fuel-needed');
let cost = document.getElementById('cost');
let need;
let price;
function calculatePrice() {
    need = Math.floor(distance.value / efficiency.value);
    needed.value = need + ' Gallons/mile';
    price = Math.floor(need * fuel.value);
    cost.value = price + ' $';
}