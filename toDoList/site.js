// Selects the button element
const button = document.querySelector('button')

// selects the input element
const input = document.querySelector('input')

// selects the ul element
const toDoElement = document.querySelector('.todo-list')




// pulls todo list out of local storage
const retrievedToDos = JSON.parse(localStorage.getItem('todo-list')) || []





// adds the text in storage to the page as li
function renderToDos(){
    
    // loops through items in retrievedtodos
    retrievedToDos.forEach(todo => {

        //creates li in document
        const li = document.createElement('li')

        //sets the li text content to the current item in the todo list
        li.textContent = todo.text

        //appends the li to the ul element
        toDoElement.append(li)
    })
}

// calls renderToDos upon startup
renderToDos()






//upon clicking button, adds input text to list and displays on screen
button.addEventListener('click', () => {
    
    //adds input value to todolist
    retrievedToDos.push({ text: input.value, completed: false })
    
    //puts todo list in local storage
    localStorage.setItem('todo-list', JSON.stringify(retrievedToDos))
    
    //pulls todo list out of local storate
    JSON.parse(localStorage.getItem('todo-list'))

    //clears li's in html
    toDoElement.innerHTML = ''

    //adds li's with the new todolist from storage
    renderToDos()
})









