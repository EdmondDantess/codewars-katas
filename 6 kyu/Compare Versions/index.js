function compareVersions(version1, version2) {

    let countDotsV1 = 0
    Array.from(version1).forEach(el => {
        if (el === '.') {
            ++countDotsV1
        }
    })

    let modV1 = version1.split('.')
    let modV2 = version2.split('.')

    let actualVersion = true

    for (let i = 0; i <= countDotsV1; i++) {

        if (+modV1[i] < +modV2[i]) {
            return false
        }
        if (+modV1[i] < +modV2[i]) {
            return false
        }
        if (+modV1[i] > +modV2[i]) {
            return true
        }
        if (countDotsV1 === i && modV2.length > modV1.length && (+modV1[i] === +modV2[i])) {
            return false
        }
    }

    return actualVersion
}

// console.log(compareVersions('11', '10'))
console.log(compareVersions('10.4', '10.4.8'))
// Karan's company makes software that provides different features based on the version of operating system of the user.
//
// For finding which version is more recent, Karan uses the following method:
//
//     function compareVersions (version1, version2) {
//         return parseFloat(version1) >= parseFloat(version2);
//     }
// While this function worked for OS versions 10.6, 10.7, 10.8 and 10.9, the Operating system company just released OS version 10.10.
//
//     Karan's function fails for the new version:
//
// compareVersions ("10.9", "10.10");       // returns true, while it should return false
// Karan now wants to spend some time to write a more robust version comparison function that works for any future version/sub-version updates.
//
//     Help Karan write this function. Here are a few sample cases:
//
//     compareVersions("11", "10");                    // returns true
// compareVersions("11", "11");                    // returns true
// compareVersions("10.4.6", "10.4");              // returns true
// compareVersions("10.4", "11");                  // returns false
// compareVersions("10.4", "10.10");               // returns false
// compareVersions("10.4.9", "10.5");              // returns false
// It can be assumed that version strings are non empty and only contain numeric literals and the character '.'.
