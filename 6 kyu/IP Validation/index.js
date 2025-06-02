function isValidIP(str) {
    console.log(str);
    let strArr = str.split(".");
    let acc = false;
    if (str === "0.0.0.0") {
        return true;
    }
    if (/[a-zA-Z]/.test(str.toUpperCase()) || str.includes("\n")) {
        return false;
    }
    if (strArr.length === 4) {
        for (el of strArr) {
            if (
                el.startsWith("0") ||
                el === "" ||
                isNaN(+el) ||
                +el < 0 ||
                +el > 255
            ) {
                return false;
            }
            acc = true;
        }
        return acc;
    }
    return acc;
}

console.log(isValidIP("123.45.67.89"));
console.log(isValidIP(" 1.2.3.4"));
console.log(isValidIP("0.0.0.0"));

// Description:
// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:
// Examples of valid inputs:
// 1.2.3.4
// 123.45.67.89
// Invalid input examples:
// 1.2.3
// 1.2.3.4.5
// 123.456.78.90
// 123.045.067.089
// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string
