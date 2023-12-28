// Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
// Any whitespace at the end of the line should also be stripped out.
//
//     Example:
//
// Given an input string of:
//
//     apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:
//
//     apples, pears
// grapes
// bananas
// The code would be called like so:
//
//     var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"

function solution(text, markers) {
    let res
    let textArr = [...text]
    let deleteMode = false
    let db = []
    res = textArr.map((el, i) => {
        if (markers.includes(el)) {
            deleteMode = true;
            db.push(i - 1)
        }
        if (el === '\n' && deleteMode) {
            deleteMode = false
            return el
        }
        if (!deleteMode) {
            return el
        }
    })
    db.forEach((el) => {
        res[el] === ' ' ? res[el] = '' : null
    })
    res = res.join('')
    if (res[res.length - 1] === '\n') {
        return res
    }
    return res.trimEnd()
}

console.log(solution('apples, pears # and bananas\ngrapes\nbananas !apples', ['#', '!']))
