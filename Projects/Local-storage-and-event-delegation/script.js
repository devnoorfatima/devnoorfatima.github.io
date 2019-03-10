    const addItems = document.querySelector('.add-items');
    const itemsList = document.querySelector('.plates');
    const items = JSON.parse(localStorage.getItem("items")) || [];

    function addItem(e) {
      e.preventDefault();
      const text = (this.querySelector("[name=item]")).value;
      const item = {
        text,
        done: false
      };
      //putting item in items array:
      items.push(item);
      populateList(items, itemsList);
      //storing items in local storage
      localStorage.setItem("items" , JSON.stringify(items));
      this.reset();
    }
     // creating actual HTML
    function populateList(plates = [], plateslist) {
      plateslist.innerHTML = plates.map((plate, i) => {
        return `
  <li>
  <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
  <label for="item${i}">${plate.text}</label>
  <i class="fa fa-close" onClick="deleteItem(${i});"></i>
  </li>
`;
      }).join("");
    }
    //toggle action of checkboxes
    function toggleDone(e){
    if(!e.target.matches("input"))return;
      const el = e.target;
      const index = el.dataset.index;
      items[index].done = !items[index].done;
      localStorage.setItem ("items", JSON.stringify(items)); 
      populateList(items , itemsList);
    }
    //Referencing to functions
    addItems.addEventListener("submit", addItem);
    itemsList.addEventListener("click", toggleDone);
    populateList(items , itemsList);


// This function delets item from list
function deleteItem(item){
  delete items[item];
  populateList(items , itemsList);
}