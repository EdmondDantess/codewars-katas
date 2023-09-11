// Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
//
//     The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
//
//     It is much easier to understand with an example:
//
//     * For seconds = 62, your function should return
// "1 minute and 2 seconds"
// * For seconds = 3662, your function should return
// "1 hour, 1 minute and 2 seconds"
// For the purpose of this Kata, a year is 365 days and a day is 24 hours.
//
//     Note that spaces are important.
//
//     Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.
//
// The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.
//
//     A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.
//
//     Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.
//
//     A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
//
//     A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.

function formatDuration(seconds) {

    if (seconds === 0) {
        return `now`
    }
    if (seconds < 60) {
        let valueSeconds = seconds > 1 ? 'seconds' : 'second'
        return `${seconds} ${valueSeconds}`
    }
    if (seconds >= 60 && seconds < 3600) {
        let minutes = Math.trunc(seconds / 60)
        let second = seconds - (minutes * 60)

        let valueMinutes = minutes > 1 ? 'minutes' : 'minute'
        let valueSeconds = second > 1 ? 'seconds' : 'second'

        if ((seconds % 60) === 0) {
            return `${minutes} ${valueMinutes}`
        }
        return `${minutes} ${valueMinutes} and ${second} ${valueSeconds}`
    }
    if (seconds >= 3600 && seconds < 86400) {
        let hour = Math.trunc(seconds / 3600)
        let minutes = Math.trunc((seconds - (hour * 3600)) / 60)
        let second = Math.trunc((seconds - ((hour * 3600) + (minutes * 60))))

        let valueHours = hour > 1 ? 'hours' : 'hour'
        let valueMinutes = minutes > 1 ? 'minutes' : 'minute'
        let valueSeconds = second > 1 ? 'seconds' : 'second'

        if ((seconds % 3600) === 0) {
            return `${hour} ${valueHours}`
        }
        if (second === 0 && hour > 0 && minutes > 0) {
            return `${hour} ${valueHours} and ${minutes} ${valueMinutes}`
        }
        if (second > 0 && hour > 0 && minutes === 0) {
            return `${hour} ${valueHours} and ${second} ${valueSeconds}`
        }
        if (second > 0 && hour > 0 && minutes > 0) {
            return `${hour} ${valueHours}, ${minutes} ${valueMinutes} and ${second} ${valueSeconds}`
        }
    }
    if (seconds >= 86400 && seconds < 31536000) {
        let day = Math.trunc(seconds / 86400)
        let hour = Math.trunc((seconds - (day * 86400)) / 3600)
        let minutes = Math.trunc((seconds - ((hour * 3600) + (day * 86400))) / 60)
        let second = Math.trunc((seconds - ((hour * 3600) + (minutes * 60) + (day * 86400))))

        let valueDays = day > 1 ? 'days' : 'day'
        let valueHours = hour > 1 ? 'hours' : 'hour'
        let valueMinutes = minutes > 1 ? 'minutes' : 'minute'
        let valueSeconds = second > 1 ? 'seconds' : 'second'

        if ((seconds % 86400) === 0) {
            return `${day} ${valueDays}`
        }
        if (second === 0 && hour > 0 && minutes > 0 && day > 0) {
            return `${day} ${valueDays}, ${hour} ${valueHours} and ${minutes} ${valueMinutes}`
        }
        if (day > 0 && second > 0 && hour > 0 && minutes === 0) {
            return `${day} ${valueDays}, ${hour} ${valueHours} and ${second} ${valueSeconds}`
        }
        if (day > 0 && second > 0 && hour === 0 && minutes > 0) {
            return `${day} ${valueDays}, ${minutes} ${valueMinutes} and ${second} ${valueSeconds}`
        }
        if (day > 0 && second > 0 && hour === 0 && minutes === 0) {
            return `${day} ${valueDays} and ${second} ${valueSeconds}`
        }
        if (day > 0 && second === 0 && hour === 0 && minutes > 0) {
            return `${day} ${valueDays} and ${minutes} ${valueMinutes}`
        }
        if (day > 0 && second === 0 && hour > 0 && minutes === 0) {
            return `${day} ${valueDays} and ${hour} ${valueHours}`
        }
        if (day > 0 && second > 0 && hour > 0 && minutes > 0) {
            return `${day} ${valueDays}, ${hour} ${valueHours}, ${minutes} ${valueMinutes} and ${second} ${valueSeconds}`
        }
    }
    if (seconds >= 31536000) {

        let year = Math.trunc(seconds / 31536000)
        let day = Math.trunc((seconds - (year * 31536000)) / 86400)
        let hour = Math.trunc((seconds - ((day * 86400) + (year * 31536000))) / 3600)
        let minutes = Math.trunc((seconds - ((hour * 3600) + (day * 86400 + (year * 31536000)))) / 60)
        let second = Math.trunc((seconds - ((hour * 3600) + (minutes * 60) + (day * 86400) + (year * 31536000))))

        let valueYears = year > 1 ? 'years' : 'year'
        let valueDays = day > 1 ? 'days' : 'day'
        let valueHours = hour > 1 ? 'hours' : 'hour'
        let valueMinutes = minutes > 1 ? 'minutes' : 'minute'
        let valueSeconds = second > 1 ? 'seconds' : 'second'

        if ((seconds % 31536000) === 0) {
            return `${year} ${valueYears}`
        }
        if (year > 0 && day > 0 && hour > 0 && minutes > 0 && second === 0) {
            return `${year} ${valueYears}, ${day} ${valueDays}, ${hour} ${valueHours} and ${minutes} ${valueMinutes}`
        }
        if (year > 0 && day > 0 && hour > 0 && minutes === 0 && second === 0) {
            return `${year} ${valueYears}, ${day} ${valueDays} and ${hour} ${valueHours}`
        }
        if (year > 0 && day > 0 && hour === 0 && minutes === 0 && second === 0) {
            return `${year} ${valueYears} and ${day} ${valueDays}`
        }
        if (year > 0 && day === 0 && hour > 0 && minutes === 0 && second === 0) {
            return `${year} ${valueYears} and ${hour} ${valueHours}`
        }
        if (year > 0 && day === 0 && hour === 0 && minutes > 0 && second === 0) {
            return `${year} ${valueYears} and ${minutes} ${valueMinutes}`
        }
        if (year > 0 && day === 0 && hour === 0 && minutes === 0 && second > 0) {
            return `${year} ${valueYears} and ${second} ${valueSeconds}`
        }
        if (year > 0 && day === 0 && hour === 0 && minutes > 0 && second > 0) {
            return `${year} ${valueYears}, ${minutes} ${valueMinutes} and ${second} ${valueSeconds}`
        }
        if (year > 0 && day === 0 && hour > 0 && minutes > 0 && second > 0) {
            return `${year} ${valueYears}, ${hour} ${valueHours}, ${minutes} ${valueMinutes} and ${second} ${valueSeconds}`
        }
        if (year > 0 && day > 0 && hour === 0 && minutes > 0 && second > 0) {
            return `${year} ${valueYears}, ${day} ${valueDays}, ${minutes} ${valueMinutes} and ${second} ${valueSeconds}`
        }
        if (year > 0 && day > 0 && hour > 0 && minutes === 0 && second > 0) {
            return `${year} ${valueYears}, ${day} ${valueDays}, ${hour} ${valueHours} and ${second} ${valueSeconds}`
        }
        if (year > 0 && day > 0 && hour > 0 && minutes > 0 && second > 0) {
            return `${year} ${valueYears}, ${day} ${valueDays}, ${hour} ${valueHours}, ${minutes} ${valueMinutes} and ${second} ${valueSeconds}`
        }
    }
}