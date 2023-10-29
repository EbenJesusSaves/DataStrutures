const mergeSort = (arrayOne = [], arrTwo = []) => {

    const generalArray = arrayOne
    const unsortedArray = generalArray.concat(arrTwo)
    console.log(unsortedArray.sort((a, b) => a - b))

}

mergeSort([2, 4, 435, 44, 12], [3, 5, 7, 9])

console.log('i')