// ASSESSMENT 3: Coding Practical Questions with Jest

//const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.
        // Fibonacci sequence: "each number is the sum of the two preceding ones"
    // Fibonacci numbers array [1,1,2,3,5,8,13,21,34,55,89,144,233,377]

// a) Create a test with expect statements for each of the variables provided.
describe ("fibNumb", () => {
    it ("takes input number (> 2) and returns an array with the length of the input number and containing the numbers of the Fibonacci sequence", () => {
        const fibLength1 = 6
        const fibLength2 = 10
// identify the const as the array length
        expect(fibNumb(fibLength1)).toEqual( [1, 1, 2, 3, 5, 8])
        expect(fibNumb(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
// the toEqual should match the expected output 
    })
})
// Expected output: [1, 1, 2, 3, 5, 8]
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
 
// I got RED
// ReferenceError: fitNumb is not defined

// b) Create the function that makes the test pass.
const fibNumb = (array) => {
    let fib = [1,0]
    let newArray = []
    for (let i=2; i <= array + 1; i++) {
        fib[i] = fib[i-2] + fib[i-1]
        newArray.push(fib[i])
    }
    return newArray
}
// output -->  PASS  ./code-challenges.test.js
  // fibNumb ✓ takes input number (> 2) and returns an array with the length of the input number and containing the numbers of the Fibonacci sequence (6 ms)



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.
// use filter to get the odd number values 
// use sort to get the odd numbers from least to greatest 

// a) Create a test with expect statements for each of the variables provided.

describe ("oddSort", () => {
    it ("returns a new array of only odd numbers sorted from least to greatest", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// need to identify odd numbers from array
        expect(oddSort(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(oddSort(fullArr2)).toEqual([-823, 7, 23])
// the toEqual should match the expected output 
    })
})
// Expected output: [-9, 7, 9, 199]
// Expected output: [-823, 7, 23]

// I got RED 
// ReferenceError: oddSort is not defined

// b) Create the function that makes the test pass.

// need to fix oddSort, keep getting extra element 
// use type of to get numbers from the array 
// use prof google 

const oddSort = (array) => {
    let newArray = array.filter(value => {
        return typeof value === "number" && value%2 !== 0
    })
    return newArray.sort(function(a, b){return a-b})
}
// output --> PASS  ./code-challenges.test.js
// oddSort ✓ returns a new array of only odd numbers sorted from least to greatest



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

//similar to the fib sequence, the next number is the sum of the previous two numbers

// a) Create a test with expect statements for each of the variables provided.

 describe("addArray", () => {
    it("takes in an array and returns an array of the accumulating sum", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        const numbersToAdd2 = [0, 7, -8, 12]
        const numbersToAdd3 = []

        expect(addArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(addArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(addArray(numbersToAdd3)).toEqual([])

// the toEqual should match the expected output
    })
})
// Expected output: [2, 6, 51, 60]
// Expected output: [0, 7, -1, 11]
// Expected output: []

// I got RED 
// FAIL  ./code-challenges.test.js
    // addArray ✕ takes in an array and returns an array of the accumulating sum
// ● addArray › takes in an array and returns an array of the accumulating sum
//ReferenceError: addArray is not defined

// b) Create the function that makes the test pass.
    
    // need to make a new array with the sum of the arrays 
    // first sum to array and then add to next index and repeat 
    // return new array with total sum 
