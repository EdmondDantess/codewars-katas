// Each exclamation mark's weight is 2; each question mark's weight is 3.
// Putting two strings left and right on the balance - are they balanced?
//
//     If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right";
//     if they are balanced, return "Balance".
//
//     Examples
// "!!", "??"     -->  "Right"
// "!??", "?!!"   -->  "Left"
// "!?!!", "?!?"  -->  "Left"
// "!!???!????", "??!!?!!!!!!!"  -->  "Balance"

function balance(left, right) {
    let arrL = left.split('').map(el => el === '!' ? 2 : 3).reduce((prev, next) => prev + next)
    let arrR = right.split('').map(el => el === '!' ? 2 : 3).reduce((prev, next) => prev + next)
    return arrL === arrR ? 'Balance' : arrL > arrR ? 'Left' : 'Right'
}

console.log(balance('!??', '?!!'))
