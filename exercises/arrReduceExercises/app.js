// 1
function total(arr) {
    return arr.reduce((total, num) => total + num)
}

console.log(total([1,2,3]))

// 2
function stringConcat(arr) {
    return arr.reduce((total, num) => total + num.toString(), `NUMS: `)
}

console.log(stringConcat([1,2,3]))

// 3
function totalVotes(arr) {
    // const trueVoters = arr.filter(name => name.voted)
    // return trueVoters.length

    return arr.reduce((acc, voter) => voter.voted ? acc += 1 : acc, 0)
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted: true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
console.log(totalVotes(voters))

// 4
function shoppingSpree(arr) {
    // // gather all prices from objects
    // const arrPrices = arr.map(item => item.price)
    // // sum em up    
    // return arrPrices.reduce((total, num) => total + num)

    return arr.reduce((acc,currentIndex) => acc += currentIndex.price,0)
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist))

// 5 ??? understand this logic ???
function flatten(arr) {
    // const flattened = arr.reduce((a, b) => a.concat(b), [])
    // return flattened    
    return arr.reduce((acc, currentIndexItem) => [...acc, ...currentIndexItem],[])      
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays))

// 6 
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    let youth = arr.filter(voter => voter.age <= 25).length
    let mids = arr.filter(voter => voter.age > 25 && voter.age < 36).length
    let olds = arr.filter(voter => voter.age >= 36).length
    
    let youngVotes = arr.filter(voter => voter.age <= 25).filter(voter => voter.voted).length
    let midVotes = arr.filter(voter => voter.age > 25 && voter.age < 36).filter(voter => voter.voted).length
    let oldVotes = arr.filter(voter => voter.age >= 36).filter(voter => voter.voted).length  
    
    return results = {
        youngVotes,
        youth,
        midVotes,
        mids,
        oldVotes,
        olds
    }
}

console.log(voterResults(voters))