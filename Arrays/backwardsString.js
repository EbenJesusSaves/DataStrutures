const backwardsString = (string) => {
    const totalItems = string.length - 1
    const stringArray = []
    for (let i = totalItems; i >= 0; i--) {
        stringArray.push(string[i])
    }
    stringArray.join('')
    return stringArray
}