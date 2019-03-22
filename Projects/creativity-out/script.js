// header rise
const header = document.querySelector(".rise");
header.innerHTML=spranWrap(header.textContent);
function spranWrap (word) {
return [...word].map(letter => `<span>${letter}</span>`).join("");
}

// getting the input
const input =document.querySelector('.input');
const items =document.querySelector('.items');
const button =document.getElementsByClassName(".btn");
function get() {
    const li = document.createElement('li');
    var textNode = document.createTextNode(input.value);
    li.appendChild(textNode);
    if(input.value == ''){
        alert('Enter some value please!')
    }else{
        items.appendChild(li);
    }

    input.value = '';
      // Click on a close button to hide the current list item
  const close = document.getElementsByClassName("close");
  const span = document.createElement("SPAN");
  const txt = document.createTextNode("Remove");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);