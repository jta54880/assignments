let container = document.getElementById('container')
let h1 = document.createElement('h1')
h1.innerText = 'Hello World'
h1.setAttribute('id', 'title')
container.appendChild(h1)


// Changing info
document.getElementById('title').addEventListener('dblclick', function(){
    this.style.color = 'blue'
})

// nodeHoppers (= node list) is an array of nodes with the class name 'hopper'
const nodeHoppers = document.getElementsByClassName('hopper')
// console.log(nodeHoppers)
// to iterate through this node list array, you must use for loop, not array methdods

/* **************************************************************** */
/* converting a node list into an array, to perform array methods */
/* **************************************************************** */
// hoppers is an array that contains the unwrapped (...spread) node list
// each node w/class 'hopper' is it's own element w/in the hoppers array
// now, since it is in a conventional array, you can run array methods
const hoppers = [...nodeHoppers]
// console.log(nodeHoppers)
// console.log(hoppers)

// now you can add an event listener to each node within a node list
hoppers.forEach(hop => {
    hop.addEventListener('click', function(){
            this.style.color = 'green'
        })
})

const arr1 = ['wolf', 'hound', 'bear']
const arr2 = ['lion', 'cat', 'moose']

// unwraping (spread...) arr1 and arr2 into an array newArr
const newArr = [...arr1, ...arr2]


// ...anything (rest...) will put all arguments (or remaing arguments) into an array (named anything)
function grabElements (arr, ...anything){
    // new array is an array that unwraps (spread...) arr, and the array of arguments (anything)
    const newArr = [...arr, ...anything]
    // console.log(newArr)
}

grabElements(arr1, 'pup', 'jaguarundi', 'squirrel')

let str = 'hello there'
console.log([...str])
// console.log(newArr)