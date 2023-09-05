// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
//     * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url) {
    console.log(url.includes('https://'))
    if (url.includes('www.')) {
        let numStart = url.indexOf('www.') + 4
        let numEnd = url.indexOf('.', numStart)
        return url.slice(numStart, numEnd)
    } else if (url.includes('http://') || url.includes('https://')) {
        let numStart = url.indexOf('://') + 3
        let numEnd = url.indexOf('.')
        return url.slice(numStart, numEnd)
    } else {
        let numEnd = url.indexOf('.')
        return url.slice(0, numEnd)
    }
}