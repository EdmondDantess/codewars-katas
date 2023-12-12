// Imagine a triangle of numbers which follows this pattern:
//
//     Starting with the number "1", "1" is positioned at the top of the triangle. As this is the 1st row, it can only support a single number.
//     The 2nd row can support the next 2 numbers: "2" and "3"
// Likewise, the 3rd row, can only support the next 3 numbers: "4", "5", "6"
// And so on; this pattern continues.
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// ...
// Given N, return the sum of all numbers on the Nth Row:
//
//     1 <= N <= 10,000

function cumulativeTriangle(n) {
    let piramid = []
    let numsInRows = 0
    let acc = 1
    for (let i = 0; i < n; i++) {
        piramid.push([])
        numsInRows += 1
        for (let j = 0; j < numsInRows; j++) {
            piramid[i].push(acc)
            acc += 1
        }
    }
    return piramid[n - 1].reduce((sum, val) => sum + val)
}

console.log(cumulativeTriangle(7191))