//there two types of array
// statics and dynamic arrays
// the static arrays are have limited space
// the dynamic array have room for more elements
//arrays are best for finding item at their indexes which mostly have O(1)


//context tells you where you're code is written 

class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }
    //get function returns the index of the called array 
    get(index) {
        return this.data[index]
    }
    //the push function checks the current length of the array and puts the item
    //on that position and then increases the length of the array by one 

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }
    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    delete(index) {
        const item = this.data[index]
        this.shiftItems(index)
        return item
    }
    //so we start shifting from where i is 
    // then we delete the last item of the array 
    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length]
        this.length--
    }
}