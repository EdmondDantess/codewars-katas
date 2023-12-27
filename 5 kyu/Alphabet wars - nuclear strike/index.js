// Introduction
// There is a war and nobody knows - the alphabet war!
//     The letters hide in their nuclear shelters. The nuclear strikes hit the battlefield and killed a lot of them.
//
//     Task
// Write a function that accepts battlefield string and returns letters that survived the nuclear strike.
//
//     The battlefield string consists of only small letters, #,[ and ].
//     The nuclear shelter is represented by square brackets []. The letters inside the square brackets represent letters inside the shelter.
//     The # means a place where nuclear strike hit the battlefield. If there is at least one # on the battlefield, all letters outside of shelter die. When there is no any # on the battlefield, all letters survive (but do not expect such scenario too often ;-P ).
// The shelters have some durability. When 2 or more # hit close to the shelter, the shelter is destroyed and all letters inside evaporate. The 'close to the shelter' means on the ground between the shelter and the next shelter (or beginning/end of battlefield). The below samples make it clear for you.
//                                                                                                                                                                                                                                                                                                             Example
//     abde[fgh]ijk     => "abdefghijk"  (all letters survive because there is no # )
// ab#de[fgh]ijk    => "fgh" (all letters outside die because there is a # )
// ab#de[fgh]ij#k   => ""  (all letters dies, there are 2 # close to the shellter )
// ##abde[fgh]ijk   => ""  (all letters dies, there are 2 # close to the shellter )
// ##abde[fgh]ijk[mn]op => "mn" (letters from the second shelter survive, there is no # close)
// #ab#de[fgh]ijk[mn]op => "mn" (letters from the second shelter survive, there is no # close)
// #abde[fgh]i#jk[mn]op => "mn" (letters from the second shelter survive, there is only 1 # close)
// [a]#[b]#[c]  => "ac"
//     [a]#b#[c][d] => "d"
//     [a][b][c]    => "abc"
// ##a[a]b[c]#  => "c"

function alphabetWar(battlefield) {
    if (!battlefield.includes('#')) {
        return [...battlefield].filter(el => el !== '[' && el !== ']').join('')
    }
    let res = ''
    let batArr = [...battlefield]
    let indexes = []
    batArr.forEach((el, i) => {
        if (el === '[' || el === ']') indexes.push(i)
    })
    let bunkers = {}
    let countsBunkers = indexes.length / 2
    for (let i = 1; i <= countsBunkers; i++) {
        bunkers[i] = {
            bunkerInd: indexes.splice(0, 2),
            before: 0,
            after: 0
        }
    }
    let words = []
    for (const key in bunkers) {
        words.push(battlefield.substring(bunkers[key].bunkerInd[0], bunkers[key].bunkerInd[1] + 1))
        bunkers[key].word = words[0]
        words.splice(0, 1)
    }
    let i = 1
    batArr.forEach((element) => {
        if (element === ']') {
            i++
        }
        if (element === '#' && i > 1) {
            bunkers[i - 1].after++
            bunkers[i] && bunkers[i].before++
        }
        if (element === '#' && i === 1) {
            bunkers[i] && bunkers[i].before++
        }
    })
    for (const key in bunkers) {
        bunkers[key].before > 1
        || bunkers[key].after > 1
        || (bunkers[key].after + bunkers[key].before) > 1
            ? null
            : res += bunkers[key].word.replace('[', '').replace(']', '')
    }
    return res
}


console.log(alphabetWar('[a]#b#[c][d]'))
