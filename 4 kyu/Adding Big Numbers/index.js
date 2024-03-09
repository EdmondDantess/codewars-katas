function add(a, b) {
    let arrA = [...a]
    let arrB = [...b]
    let res = []
    let decimal = 0

    function whoIsBiggerLength() {
        let container = [arrA, arrB]
        if (arrA.length < arrB.length) {
            arrA = container[1]
            arrB = container[0]
        }
    }

    whoIsBiggerLength()

    for (let i = 0; i <= arrA.length - 1; i++) {
        let index1 = arrA.length - 1 - i
        let index2 = arrB.length - 1 - i
        let valueB = +arrB[index2]
        if (isNaN(valueB)) valueB = 0
        let sum = +arrA[index1] + valueB
        let number = (sum + decimal).toString()
        if (+number > 9) {
            res.unshift(+number[1])
            decimal = 1
        }
        if (+number <= 9) {
            res.unshift(+number)
            decimal = 0
        }
    }
    if (decimal === 1) {
        res.unshift(1)
    }
    return res.join('')
}


console.log(add('999', '1'))


// We need to sum big numbers and we require your help.
//
//     Write a function that returns the sum of two numbers.
//     The input numbers are strings and the function must return a string.
//
//     Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
//     The input is a string of only digits
// The numbers are positives
