const phone = document.querySelector('.validation');
const name = document.querySelector('.name');
const err = document.querySelector('.err');  
const lname = document.querySelector('.lname');
const lerr = document.querySelector('.lerr');  

// Get the input field
let input = document.querySelector(".caps");

// Get the warning text
let text = document.getElementById("text");

// When the user presses any key on the keyboard, run the function
input.addEventListener("keyup", function (event) {

    // If "caps lock" is pressed, display the warning text
    if (event.getModifierState("CapsLock")) {
        text.style.display = "block";
    } else {
        text.style.display = "none"
    }
});


name.addEventListener("keyup", function () {
    let rgx =/[a-zA-Z]+/g;
    if (rgx.test(name.value)) {
        err.style.display='none';
    } else {
      err.style.display='block';     
    }
});


lname.addEventListener("keyup", function () {
    let lrgx =/[a-zA-Z]+/g;
    if (lrgx.test(lname.value)) {
        lerr.style.display='none';
    } else {
      lerr.style.display='block';     
    }
});


phone.addEventListener("keyup", function () {
    let regex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    if (regex.test(phone.value)) {
        txt.style.display='none';  
        } else {
        const txt = document.querySelector('.text'); 
        txt.style.display='block';      
        }     
});