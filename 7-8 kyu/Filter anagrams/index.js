// // Задача с LearnJS
// Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
//
//     Например:
//
// nap - pan
// ear - are - era
// cheaters - hectares - teachers
// Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.
//
//     Например:
//
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
//
// alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

function aclean(array) {
    String.prototype.checkWord = function () {
        return this.split('').sort().join('').toLowerCase()
    }
    let mutabledArr = []
    let res = []
    for (let el of array) {
        mutabledArr.push(el.checkWord())
    }
    let collections = new Set(mutabledArr)
    collections.forEach((el) => {
        array.forEach((elOfOriginal) => elOfOriginal.checkWord() === el
            && !res.find(e => e.checkWord() === el.checkWord())
                ? res.push(elOfOriginal)
                : null
        )
    })
    return res
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
console.log(aclean(arr));