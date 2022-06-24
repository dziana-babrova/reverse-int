module.exports = function reverse (n) {
   let stringFromNumber = n.toString();
    if (stringFromNumber[0] === "-")
        stringFromNumber = stringFromNumber.slice(1);
    let reversed = stringFromNumber.split("").reverse().join("");
    if (stringFromNumber[0] === "0")
        stringFromNumber = stringFromNumber.slice(1);
    return Number(reversed)
}
