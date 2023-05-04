document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submit = document.querySelector("#submit");

  const toDo = document.querySelector("#new-task-description");
  
  const toDoList = document.querySelector("#tasks");

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputValue = toDo.value;
    const listItem = document.createElement('li');
    listItem.textContent = `${inputValue}`;
    toDoList.append(listItem);
    toDo.value = "";
  }
  submit.addEventListener("click", handleSubmit);


});

