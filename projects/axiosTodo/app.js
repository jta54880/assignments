

/* ***************new attempt************* */

let todoList = [];
axios.get('https://api.vschool.io/jakeafuvai/todo/').then(response => {
    todoList = response.data
    createTodo(todoList)
})

const form = document.todoForm
form.addEventListener("submit", function(e) {
    e.preventDefault()
    const title = form.title.value
    const description = form.description.value
    const price = form.price.value
    const imgUrl = form.imgUrl.value
    const obj = {
        title,
        description,
        price,
        imgUrl
    }

    postNewTodo(obj)
})

function postNewTodo(obj) {
    axios.post("https://api.vschool.io/jakeafuvai/todo/", obj).then(response => {
        // todoList.push(response.data)
        createTodo([response.data])
    })
}

function toggleComplete(todo) {
    axios.put(`https://api.vschool.io/jakeafuvai/todo/${todo._id}`, {completed: !todo.completed}).then((response) => {
        const updatedTodos = todoList.map(oldTodo => oldTodo._id === todo._id ? oldTodo = response.data : oldTodo)
        createTodo(updatedTodos, true)
    })
}

function deleteTodo(todo) {
    axios.delete(`https://api.vschool.io/jakeafuvai/todo/${todo._id}`).then(response => createTodo(response.data))
}

function createTodo(todos, isUpdated) {
    const root = document.getElementById("root")
    if(isUpdated){
        root.innerHTML = ''
    }
    todos.forEach(todo => {
        const todoDiv = document.createElement("div")
        const checkbox = document.createElement("input")
        const h2 = document.createElement("h2")
        const h4 = document.createElement("h4")
        const image = document.createElement("img")
        const delBtn = document.createElement("button")
        const hr = document.createElement("hr")
        image.style.height = "150pt"
        checkbox.setAttribute("type", "checkbox")
        if (todo.completed) {
            checkbox.checked = true
            h2.style.textDecoration = "line-through"
            h4.style.textDecoration = "line-through"
            image.style.filter = "grayscale(100%)"
        } else {
            checkbox.checked = false
            h2.style.textDecoration = "none"
            h4.style.textDecoration = "none"
        }
        h2.innerText = todo.title
        
        h4.innerText = todo.description
        
        image.setAttribute("src", todo.imgUrl) 
        image.setAttribute("alt", "todo image")  
        checkbox.addEventListener("click", function() {
            toggleComplete(todo)
            if (checkbox.checked) {
                h2.style.textDecoration = "line-through"
                h4.style.textDecoration = "line-through"
                image.style.filter = "grayscale(100%)"
            } else {
                h2.style.textDecoration = "none"
                h4.style.textDecoration = "none" 
                image.style.filter = "none" 
            }
        })
        delBtn.innerText = "| x |"
        delBtn.addEventListener("click", function() {
            deleteTodo(todo)
            delBtn.parentNode.style.display = "none"
        })
        todoDiv.appendChild(checkbox)
        todoDiv.appendChild(h2)
        todoDiv.appendChild(h4)
        todoDiv.appendChild(image)
        todoDiv.appendChild(delBtn)
        todoDiv.appendChild(hr)
        root.appendChild(todoDiv)
    });
    
}