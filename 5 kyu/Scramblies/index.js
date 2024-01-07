// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
//     Notes:
//
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.
//     Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

//SLOW PERFOMANCE
// function scramble(str1, str2) {
//     let str1Arr = [...str1].sort()
//     let str2Arr = [...str2].sort()
//     let str2Length = str2Arr.length
//     let count = 0
//     for (let i = 0; i < str1Arr.length; i++) {
//         if (str1Arr[i] === str2Arr[count]) {
//             count++
//         }
//         if ( count === str2Length ) {
//             break
//         }
//     }
//     return str2Length === count;
// }


//FASTER PERFOMANCE
function scramble(str1, str2) {
    const str1obj = {}
    const str2obj = {}
    for (let i = 0; i < str1.length; i++) {
        str1obj.hasOwnProperty(str1[i]) ? str1obj[str1[i]]++ : str1obj[str1[i]] = 1
    }
    for (let i = 0; i < str2.length; i++) {
        str2obj.hasOwnProperty(str2[i]) ? str2obj[str2[i]]++ : str2obj[str2[i]] = 1
    }
    for (let i = 0; i < str2.length; i++) {
        if (!str1obj.hasOwnProperty(str2[i])) return false
        if (str1obj[str2[i]] < str2obj[str2[i]]) return false
    }
    return true
}

console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))

