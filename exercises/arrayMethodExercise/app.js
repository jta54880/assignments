const fruit = ["banana", "apple", "orange", "watermelon"]
const vegetables = ["carrot", "tomato", "pepper", "lettuce"]

function arrayMethods() {
    //remove last item from vegetable array
    let lastVegItem = vegetables.pop()
    console.log(lastVegItem)

    //remove first item from fruit array
    let firstFruitItem = fruit.shift()
    console.log(firstFruitItem)

    //find index of orange
    let indOfOrange = fruit.indexOf("orange")
    console.log(indOfOrange)

    //Add that number to the end of the fruit array
    fruit.push(indOfOrange)
    console.log(fruit)

    //Use the length property to find the length of the vegetable array
    let vegArrLength = vegetables.length
    console.log(vegArrLength)

    //Add that number to the end of the vegetable array
    vegetables.push(vegArrLength) 
    console.log(vegetables) 
    
    //Put the two arrays together into one array. Fruit first. Call the new Array "food"
    const food = fruit.concat(vegetables)
    console.log(food)

    //Remove 2 elements from your new array starting at index 4 with one method
    food.splice(4, 2)
    console.log(food)

    //Reverse your array
    food.reverse()
    console.log(food)

    //Turn the array into a string and return it
    let foodStr = food.join(",")
    console.log(foodStr)
}

arrayMethods()