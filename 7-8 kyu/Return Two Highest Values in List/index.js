// DESCRIPTION:
//     In this kata, your job is to return the two distinct highest values in a list.
//     If there're less than 2 unique values, return as many of them, as possible.
//
// The result should also be ordered from highest to lowest.
//
//     Examples:
//
// [4, 10, 10, 9]  =>  [10, 9]
//     [1, 1, 1]  =>  [1]
//     []  =>  []

function twoHighest(arr) {
    if (arr.length === 0) {
        return []
    }
    if (arr.length === 1) {
        return arr
    }
    if (arr[0] === arr[1] && arr.length === 2) {
        return [arr[0]]
    }
    let sortedArr = arr.sort((a, b) => b - a)
    sortedArr = [...new Set(sortedArr)]
    return [sortedArr[0], sortedArr[1]]
}