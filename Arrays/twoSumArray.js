const twoSum = function (nums = [], target) {
    let i
    for (i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] === target) {
            return [i, i + 1]
        }
    }
    return 'key does not sum to any two numbers in this array please'

};


const answer = twoSum([2, 4, 6, 7, 8, 3], 6)
console.log(answer)

