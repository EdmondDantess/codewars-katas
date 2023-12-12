// DESCRIPTION:
//     In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of all the "saving" that you can have getting the LCM of each couple of number compared to their simple product.
//
//     For example, if you are given:
//
//     [[15,18], [4,5], [12,60]]
// Their product would be:
//
//     [270, 20, 720]
// While their respective LCM would be:
//
//     [90, 20, 60]
// Thus the result should be:
//
//     (270-90)+(20-20)+(720-60)==840
// This is a kata that I made, among other things, to let some of my trainees familiarize with the euclidean algorithm, a really neat tool to have on your belt ;)

function sumDifferencesBetweenProductsAndLCMs(pairs) {
    if (pairs.length === 0) {
        return []
    }
    const mul = pairs.map(el => el[0] * el[1])

    let lcm = pairs.map(el => {
        let value = 0
        for (let i = 1; i < Infinity; i++) {
            let temp = el[0] * i
            if (temp % el[1] === 0) {
                value = temp
                break
            }
        }
        return value
    })

    return lcm.reduce((result, item, index) => {
        return result + (mul[index] - item)
    }, 0)
}

console.log(sumDifferencesBetweenProductsAndLCMs([[15, 18], [4, 5], [12, 60]]))