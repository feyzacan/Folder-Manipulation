// includesCI() is the case insensitive version of includes().


Array.prototype.includesCI = function (value) {
    let upperCasedArray = this.map(function (element) {
        if (typeof element === "string") {
            // CONVERTING STRINGS IN ARRAY TO UPPERCASE
            return element.toUpperCase()
        } else {return element}
    })
    let result
    if (typeof value === "string") {
        //IF THE VALUE IS A STRING, CONVERT IT TO UPPERCASE AND CHECK IF IT EXIST IN THE ARRAY
        result = upperCasedArray.includes(value.toUpperCase())
    } else {
        //IF THE VALUE IS NOT A STRING, CHECK IF IT EXIST IN THE ARRAY
        result = upperCasedArray.includes(value)
    }
    return result
}

console.log(["ModeraTor", 5, "MoNkeY"].includesCI("monkEy"))

