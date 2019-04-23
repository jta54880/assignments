const fizzBuzz = (num) => {
    return num % 3 === 0 && num % 5 === 0 ? "fizzbuzz" : num % 3 === 0 ? "fizz" : num % 5 === 0 ? "buzz" : "Not divisible by 3 nor 5."
}

console.log(fizzBuzz(300))

const fizzBuzzArr = () => {
    const arr = []
    for (let i = 1; i < 101; i++) {
        i % 3 === 0 && i % 5 === 0 ? arr.push("fizzbuzz") : i % 3 === 0 ? arr.push("fizz") : i % 5 === 0 ? arr.push("buzz") : arr.push(i)
    }
    return arr
}

console.log(fizzBuzzArr())