function fibs(n) {
    // Do the math here
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
        let z = arr[(i-2)] + arr[(i-1)]
        arr.push(z)        
    }
    return arr
};

function fibsRec(n, arr = [0, 1]) {
    // Base case
    // if base case
        // return arr
    // Recursive case
    //return fibsRec(n, arr)
    if (arr.length >= n) {
        return arr
    }
    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return fibsRec(n, arr);
}


console.log(fibsRec(8));
console.log(fibsRec(2));
console.log(fibsRec(15));