function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('Li');

    let checkbox = document.createElement('input');

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete!';


    checkbox.type = "checkbox";

    newLi.textContent = title;

    newLi.appendChild(checkbox);

    toDoList.appendChild(newLi);

    newLi.appendChild(deleteButton);

    newToDoText.value = '';

    deleteButton.addEventListener('click' , function(event){
      toDoList.removeChild(this.parentElement);
    })




  });
}
window.onload = function(){
  alert("The window has loaded");
  onReady();
};
