// The marketing team is spending way too much time typing in hashtags.
//     Let's help them with our own Hashtag Generator!
//
// Here's the deal:
//
// It must start with a hashtag (#).
// All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.
//     Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
    if (str.trim() === '') {
        return false
    }
    let split = str.trim()
    split = split.split(' ')
    for (let i = 0; i < split.length; i++) {
        if (split[i] !== '') {
            split[i] = split[i][0].toUpperCase() + split[i].slice(1)
        }
    }
    split = ['#', ...split]
    split = split.join('')
    if (split.length > 140) {
        return false
    } else {
        return split
    }
}