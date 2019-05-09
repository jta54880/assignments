/* ***************new attempt************* */

let todoList = [];
axios.get('https://api.vschool.io/jakeafuvai/todo/').then(response => {
    todoList = response.data
    createTodo(response.data)
})

const form = document.todoForm
form.addEventListener("submit", function(e) {
    e.preventDefault()
    let title = form.title.value
    let description = form.description.value
    let price = form.price.value
    let imgUrl = form.imgUrl.value
    const obj = {
        title,
        description,
        price,
        imgUrl
    }
    form.reset()
    postNewTodo(obj)
})

function postNewTodo(obj) {
    axios.post("https://api.vschool.io/jakeafuvai/todo/", obj).then(response => {
        todoList.push(response.data)
        axios.get("https://api.vschool.io/jakeafuvai/todo/").then(response => todoList = response.data)
        createTodo([response.data])
    })
}

function toggleComplete(todo) {
    axios.put(`https://api.vschool.io/jakeafuvai/todo/${todo._id}`, {completed: !todo.completed}).then((response) => {
        const updatedTodos = todoList.map((oldTodo) => {
            // console.log(oldTodo)
            // console.log(response.data)
            return oldTodo._id === todo._id ? response.data : oldTodo
        })
        // let todoIndex = todoList.indexOf(todo)
        // todoList[todoIndex].completed = !todoList[todoIndex].completed
        console.log(todoList)
        console.log(updatedTodos)
        createTodo(updatedTodos, true)
    })
}

function deleteTodo(todo) {
    axios.delete(`https://api.vschool.io/jakeafuvai/todo/${todo._id}`).then(response => {
        console.log(response.data)
        console.log(todoList.indexOf(todo))
        todoList.splice(todoList.indexOf(todo),1)
        // createTodo(response.data)
    })
}

function createTodo(todos, updated) {
    const root = document.getElementById("root")
    if(updated){
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
            axios.get("https://api.vschool.io/jakeafuvai/todo/").then(response => todoList = response.data)
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
            axios.get("https://api.vschool.io/jakeafuvai/todo/").then(response => todoList = response.data)
            delBtn.parentNode.style.display = "none"
        })
        todoDiv.appendChild(checkbox)
        todoDiv.appendChild(h2)
        todoDiv.appendChild(h4)
        todoDiv.appendChild(image)
        todoDiv.appendChild(delBtn)
        todoDiv.appendChild(hr)
        root.appendChild(todoDiv)
    })
}