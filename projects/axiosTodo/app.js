// const axios = require("axios")
axios.get("https://api.vschool.io/jakeafuvai/todo").then(response => {
    const todoList = response.data
    console.log(todoList[0])
    const root = document.getElementById("root")
    
    todoList.forEach(item => {
        const div = document.createElement("div")
        const imgDiv = document.createElement("div")
        imgDiv.innerHTML = `<img src=${item.imgUrl} alt="todo item" height="100" width="100">`
        const label = document.createElement("label")
        const checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox")
        item.completed && checkbox.setAttribute("checked", "true")
        const txtNodeDesc = document.createTextNode(item.description)
        label.appendChild(checkbox)
        label.appendChild(txtNodeDesc)
        item.completed ? label.style.textDecoration = "line-through" : null
        label.appendChild(imgDiv)
        div.appendChild(label)
        root.appendChild(div)
    })

})