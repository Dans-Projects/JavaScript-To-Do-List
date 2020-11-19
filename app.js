let addToDo = document.getElementById('addNewItem');
let toDoList = document.getElementById('toDoList');
let toDoValue = document.getElementById('toDoItem');


addToDo.addEventListener('click', function(){
    if (toDoValue.value == "" || null ){
        var emptyInput = document.createElement('p');
        const button = document.querySelector('button');
        toDoList.appendChild(emptyInput);
        emptyInput.innerText = "You didnt add any tasks";
        button.disabled = true;
        emptyInput.addEventListener('dblclick', function(){
            toDoList.removeChild(emptyInput);
            button.disabled = false
        })
    }
    else{
        var createNewToDo = document.createElement('p');
        toDoList.appendChild(createNewToDo);
        createNewToDo.innerText = toDoValue.value;
        toDoValue.value = "";
        createNewToDo.addEventListener('click', function(){
            this.classList.toggle("closed");
        });
        createNewToDo.addEventListener('dblclick', function(){
            this.classList.remove("closed");
            toDoList.removeChild(createNewToDo)
        });
    }
  
})