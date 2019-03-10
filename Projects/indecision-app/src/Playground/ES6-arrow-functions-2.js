import React, { Component } from 'react';

// arguments object - no longer bound with arrow functions

let add = (a, b) => {
// console.log(arguments);
    return a + b;
}
console.log(add(2,2));
// this keyword - no longer bound
const user = {
    name : "Noor",
    cities:["Lahore","Islamabad","Karachi"],
    printPlacesLived (){
     return  this.cities.map((city) => this.name + " lived in " + city);
    }
};
console.log(user.printPlacesLived());

// Challenge
const multiplier = {
numbers: [2,4,6],
multiplyBy: 2,
multiply() {
return this.numbers.map((number) => number * this.multiplyBy);
}
};
console.log(multiplier.multiply());


class Arrow2 extends Component {
    render() {  
        return (      
        <div className="es6">
        </div>
      );
    }
  }
  
  export default Arrow2;