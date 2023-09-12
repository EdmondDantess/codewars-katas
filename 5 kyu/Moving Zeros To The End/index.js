// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let copyArr = arr
    let container = []

    copyArr.forEach(el => el === 0 ? container.push(el) : el)
    copyArr = copyArr.filter(el => el !== 0)
    let i = 0
    while (i < container.length) {
        i++
        copyArr.push(container[i - 1])
    }
    return copyArr
}