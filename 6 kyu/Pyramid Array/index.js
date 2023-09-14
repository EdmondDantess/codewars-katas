// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
//
// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s
//
function pyramid(n) {
    if (n < 1) {
        return []
    } else {
        let res = []
        for (let i = 1; i <= n; i++) {
            res.push([i])
        }
        for (let j = 0; j <= n; j++) {
            res[j] = [`1`.repeat(j + 1).split('')]
            res[j] = res[j].map(c => c.map(c => +c))

        }
        res.length = n
        for (let a = 0; a < n; a++) {
            res[a] = res[a][0]
        }
        return res
    }

}