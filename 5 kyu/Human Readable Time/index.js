// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.

function humanReadable(seconds) {

    let hh = 0
    let mm = 0
    let ss = 0
    for (let i = 0; i < seconds; i++) {
        ss++
        if (mm === 60) {
            mm = 0
            hh++
        }
        if (ss === 60) {
            ss = 0
            mm++
        }
    }
    if (mm === 60) {
        mm = 0
        hh++
    }

    hh.toString().length === 1 ? hh = `0${hh}` : hh
    mm.toString().length === 1 ? mm = `0${mm}` : mm
    ss.toString().length === 1 ? ss = `0${ss}` : ss


    return `${hh + ':' + mm + ':' + ss}`;
}

console.log(humanReadable(3600))