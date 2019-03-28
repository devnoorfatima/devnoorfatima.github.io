let bill = document.getElementById("bill");
let percentage = document.getElementById("tipPercentage");
let people = document.getElementById("people");
let tipCalculated = document.getElementById("tipCalculated");
let totalBill = document.getElementById("totalBill");
let person = document.getElementById("person");

if (people.value <= 1 || people.value == '') {
    people.value = 1
};

function calculateTip() {
    if (bill.value && percentage.value) {
        // console.log(bill.value);
        // console.log(percentage.value);
        let tip = ((bill.value / 100) * percentage.value);
        // console.log(tip);
        tipCalculated.value = tip;
        //  console.log(tipCalculated);
        totalBill.value = (parseInt(tip) + parseInt(bill.value));
        person.value = Math.round(parseInt(totalBill.value) / parseInt(people.value));
        return;
    } else {
        alert('Enter the data in fields');
    }
};