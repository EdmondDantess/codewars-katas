// In this kata we want to convert a string into an integer.
// The strings simply represent the numbers in words.
//
//     Examples:
//
// "one" => 1
// "twenty" => 20
// "two hundred forty-six" => 246
// "seven hundred eighty-three thousand nine hundred and nineteen" => 783919
// Additional Notes:
//
//     The minimum number is "zero" (inclusively)
// The maximum number, which must be supported is 1 million (inclusively)
// The "and" in e.g. "one hundred and twenty-four" is optional,
// in some cases it's present and in others it's not
// All tested numbers are valid, you don't need to validate them

function parseInt(string) {
    let res = ''
    const singleDigits = {
        zero: '0', one: '1', two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8', nine: '9',
    }
    const tens = {
        ten: '10',
        eleven: '11',
        twelve: '12',
        thirteen: '13',
        fourteen: '14',
        fifteen: '15',
        sixteen: '16',
        seventeen: '17',
        eighteen: '18',
        nineteen: '19'
    }
    const decimalDigits = {
        twenty: '20', thirty: '30', forty: '40', fifty: '50', sixty: '60', seventy: '70', eighty: '80', ninety: '90'
    }
    const hundered = {
        hundred: '100'
    }
    const thousand = {
        thousand: '1000'
    }
    const transformedString = string.split(' ').filter(el => el !== 'and')
    for (let i = 0; i < transformedString.length; i++) {
        if (singleDigits.hasOwnProperty(transformedString[i])) res += singleDigits[transformedString[i]]
        if (tens.hasOwnProperty(transformedString[i])) res += tens[transformedString[i]]
        if (decimalDigits.hasOwnProperty(transformedString[i])) res += decimalDigits[transformedString[i]]
        if (hundered.hasOwnProperty(transformedString[i])) {
            if (i === transformedString.length - 1) res += '00'
            if (transformedString[i + 1] === 'thousand') res += '00'
            if (singleDigits.hasOwnProperty(transformedString[i + 1])) res += '0'

        }
        if (thousand.hasOwnProperty(transformedString[i])) {
            if (i === transformedString.length - 1) res += '000'
            if (singleDigits.hasOwnProperty(transformedString[i + 1]) && i + 1 === transformedString.length - 1) res += '00'
            if (transformedString[i + 1] === 'hundred') res += '00'
            if (transformedString[i + 1]?.includes('-')) res += '0'
        }
        if (transformedString[i].includes('-')) {
            const decValue = transformedString[i].split('-')
            let value
            for (const singleDigitsKey in singleDigits) {
                if (singleDigitsKey.slice(0, 2) === decValue[0].slice(0, 2)) value = singleDigits[singleDigitsKey]
            }
            res += value + singleDigits[decValue[1]]
        }
    }
    if (string.includes('one million')) return 1000000
    return +res
}

console.log(parseInt('seven hundred eighty-three thousand nine hundred and nineteen'))
console.log(parseInt('two thousand three hundred and thirty-nine'))
console.log(parseInt('two hundred thousand three'))