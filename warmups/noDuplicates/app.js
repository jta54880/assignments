let input = "bookkeeper larry";
const inputArr = input.split("")

// Output: "bokepr lay"

const onlyUnique = (element, index, self) => self.indexOf(element) === index
// ^^^^The native method filter will loop through the array and leave only those entries that pass the given callback function onlyUnique.

// onlyUnique checks, if the given value is the first occurring. If not, it must be a duplicate and will not be copied.

// If you want to keep the last occurrence of a value, simply replace indexOf by lastIndexOf.

const returnedInputArr = inputArr.filter(onlyUnique)

let joinedInput = returnedInputArr.join("")

console.log(joinedInput)