function findUniq(arr) {
    arr.sort((a, b) => a - b)
    let counter = {
        [arr[0]]: 0,
        [arr[arr.length-1]]: 0,
    }
    arr.map(el => {
        el === arr[0] ? counter[arr[0]]++ : counter[arr[arr.length-1]]++
    })
    return counter[arr[0]] === 1 ? arr[0] : arr[arr.length-1]
}

console.log(findUniq([1, 1, 1, 2, 1, 1]))


// There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
//     findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
//
//     The tests contain some very huge arrays, so think about performance.
