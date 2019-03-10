import React, { Component } from 'react';

const user = {
  name : "Noor",
  age : 27,
  location: "Lahore"
};

function getLocation(location) {
  if(location){
    return <p>location:{location}</p>;
  }
}
class Es6 extends Component {   
  render() {  
        var name = "Noor";
        name = "Fatima";
        console.log(name);
        let age = 17;
        age = 24;
        console.log(age);
        return (      
        <div className="es6">
         <h1>{user.name ? user.name : "Anonymous"}</h1>
          {user.age >= 18 && <p>Age : {user.age}</p>}
          {getLocation(user.location)}
      
        </div>
      );
    }
  }
  
  export default Es6;