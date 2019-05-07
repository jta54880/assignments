// const axios = require("axios")
axios.get("https://api.vschool.io/jakeafuvai/todo").then(response => {
    const todoList = response.data
    console.log(todoList[0])
    createTodo(todoList)
})

//create a form listener that gets all -- look at slack example...
// postNewTodo(newTodoObject){
    // axios.post(url, newTodoObject)
// }

// form input on submit
const form = document.todoForm
form.addEventListener("submit", function(e) {
    e.preventDefault()
    let title = document.getElementById("todo-title").value
    let description = document.getElementById("description").value
    let price = document.getElementById("price").value
    let imgUrl = document.getElementById("img-url").value

    const newObj = {
        title,
        description,
        price,
        imgUrl
    }
    postNewTodo(newObj)
})

// post a new todo
function postNewTodo(object) {
    axios.post("https://api.vschool.io/jakeafuvai/todo", object)
}

// delete a todo -- need to look this up and delete by an id
function deleteTodo(id) {
    axios.delete("https://api.vschool.io/jakeafuvai/todo",id)
}


function createTodo(todoList) {
    todoList.forEach(item => {
        // get root div
        const root = document.getElementById("root")
        // get todoDiv
        const todoDiv = document.createElement("div")
        // get text description for todoDIv
        todoDiv.innerText = item.title
        // create a div for the image to go inside todoDiv
        const imgDiv = document.createElement("div")
        // add innerHTML image tag into imgDiv
        imgDiv.innerHTML = `<img class="image" src=${item.imgUrl} alt="todo item" height="100" width="100">`
        // create label to put description, checkbox and image
        const label = document.createElement("label")
        // create checkbox type checkbox and have it be selected if item.completed is true
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        item.completed && checkbox.setAttribute("checked", "true")
        // text node for description w/in todoDiv
        const txtNodeDesc = document.createTextNode(item.description)
        // append checkbox and description to label
        label.appendChild(checkbox)
        label.appendChild(txtNodeDesc)
        // if item.completed is true, description is line-through and image is greyed out
        item.completed ? label.style.textDecoration = "line-through" : null
        item.completed ?
            imgDiv.style.filter = "grayscale(100%)" : null
        // append imgDiv to label
        label.appendChild(imgDiv)
        // append label to todoDiv
        todoDiv.appendChild(label)
        // append it all to the root div
        root.appendChild(todoDiv)
    })    
}

// axios get and post boilerplate
// axios.get('https://api.vschool.io/marcus/todo/').then((response)=>{
//     displayTodos(response.data)
// })

// function displayTodos (todos){
//     todos.forEach(todo => {
//         let parentDiv = document.createElement('div')

//         // title
//         let titleH2 = document.createElement('h2')

//         // append
//         titleH2.innerText = todo.title
//         parentDiv.appendChild(titleH2)
//         document.getElementById('divContainer').appendChild(parentDiv)
//         // title
//         // description
//         // price
//         // img
//         // completed
//     })
// }

// form.addEventListener('submit',function(){
//     let title = form.title.value

//     let newObject = {
//         title: title,

//     }
//     postNewTodo(newObject)
// })

// function postNewTodo(newTodo){
//     axios.post('https://api.vschool.io/marcus/todo/', newTodo).then((response)=>{
//         displayTodos()
//     })
// }