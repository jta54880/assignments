// push -- adds items to the end of an array - ACCEPTS ITEMS TO PUSH AS PARAMS
// MODIFIES ORIGINAL ARRAY
// RETURNS THE LENGTH OF THE NEW ARRAY
/* ------------------------------ */
// const arr = [1,2,3,4]
// let retrunedArr = arr.push(5) // returns length of new (pushed) array
// console.log(arr)
// console.log(retrunedArr)

    // function
        // speak()

    // method
        // arr.speak()

    // property
        // arr.length

// pop -- removes last element of array and returns it - NO PARAMETERS
// MODIFIES ORIGINAL ARRAY
// RETURNS THE LAST (REMOVED) ELEMENT
/* ------------------------------ */
// const arr = [1,2,3,4]
// let retrunedArr = arr.pop()
// console.log(arr)
// console.log(retrunedArr)

// shift -- removes first element of array and returns it - NO PARAMETERS
// MODIFIES ORIGINAL ARRAY
// RETURNS FIRST (REMOVED) ELEMENT
/* ------------------------------ */
// const arr = [1,2,3,4]
// let retrunedArr = arr.shift()
// console.log(arr)
// console.log(retrunedArr)

// unshift -- like push - adds item to beginning of array - TAKES ITEMS TO UNSHIFT AS PARAMS
// MODIFIES ORIGINAL ARRAY
// RETURNS LENGTH(NUMBER) OF NEW MODIFIED ARRAY
/* ------------------------------ */
// const arr = [1,2,3,4]
// let retrunedArr = arr.unshift("beginning")
// console.log(arr)
// console.log(retrunedArr)

// splice -- find and replace -- .splice(starting index, # items you'd like to remove, what to replace it with) -- IF #2 PARAM = 0, YOU DON'T REMOVE ANYTHING, #3 PARAM AT LIKE CUT THAT INDEX, AND THE RETURN IS AN EMPTY ARRAY
// MODIFIES ORIGINAL ARRAY
// RETURNS ARRAY OF ELEMENTS THAT IT REMOVES
/* ------------------------------ */
// const arr = [1,2,3,4]
// let retrunedArr = arr.splice(0, 1, 0) // do not need a replace param
// console.log(arr)
// console.log(retrunedArr)

// slice -- grabs elements of an array -- .slice(where to start, where to end) LIKE COPY
// DOES NOT MODIFY ORIGINAL ARRAY
// RETURNS ARRAY OF REMOVED ELEMENTS
/* ------------------------------ */ 
// const arr = [1,2,3,4]
// let retrunedArr = arr.slice(1, 2)
// console.log(arr)
// console.log(retrunedArr)

// indexOf -- (item you want to find the index of, starting index)
// DOES NOT MODIFY ORIGINAL ARRAY
// RETURNS THE SPECIFIED ELEMENTS INDEX (OR -1 IF NOT FOUND)
/* ------------------------------ */
// const arr = [1,2,3,4]
// let retrunedArr = arr.indexOf(3)
// console.log(arr)
// console.log(retrunedArr)

// lastIndexOf -- last index of specified item -- same as indexOf but from behind #2 param is where to start search of index
// DOES NOT MODIFY ORIGINAL ARRAY
// RETURNS LAST INSTANCE OF SPECIFIED ELEMENTS INDEX (OR -1 IF NOT FOUND)
/* ------------------------------ */
// const arr = [1,2,3,4]
// let retrunedArr = arr.lastIndexOf(5)
// console.log(arr)
// console.log(retrunedArr)

// join -- joins elements of an array separated by separator (opposite of .split())
/* ------------------------------ */
// DOES NOT MODIFY ORIGINAL ARRAY
// RETURNS A STRING WITH ALL ELEMENTS SEPARATED BY THE SEPARATOR
// const arr = [1,2,3,4]
// let retrunedArr = arr.join(" ")
// console.log(arr)
// console.log(retrunedArr)

// reverse -- returns the reverse order of the array -- no params
// MODIFIES ORIGINAL ARRAY
// RETURNS THE ARRAY WITH ELEMENTS IN REVERSE ORDER
/* ------------------------------ */
// const arr = [1,2,3,4]
// let retrunedArr = arr.reverse()
// console.log(arr)
// console.log(retrunedArr)

// map -- cycles through an array and runs a function on each element within an array
// DOES NOT MODIFY ORIGINAL ARRAY
// RETURNS A NEW ARRAY WITH CHANGES MADE BY THE FUNCTION(S) RUN