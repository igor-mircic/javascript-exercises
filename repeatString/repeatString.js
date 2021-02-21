const repeatString = function(string, times) {
    return (times >= 0) ? string.repeat(times) : "ERROR";
}
module.exports = repeatString
