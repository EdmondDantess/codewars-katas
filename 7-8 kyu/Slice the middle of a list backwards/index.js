// Write a function that takes a list of at least four elements as an argument and returns a
// list of the middle two or three elements in reverse order.

function reverseMiddle(array) {
    let res = []
    if (array.length % 2 === 0) {
        res = array.splice((array.length / 2) - 1, 2).reverse()
    }
    if (array.length % 2 !== 0) {
        res = array.splice((Math.floor(array.length / 2) - 1), 3).reverse()
    }
    return res
}


console.log(reverseMiddle([1, 2, 3, 4, 5]))

