function fibs(n) {
    // Do the math here
    let arr = [0, 1];
    for (let i = 2; i < n; i++) {
        let z = arr[(i-2)] + arr[(i-1)]
        arr.push(z)        
    }
    return arr
};

console.log(fibs(8));
console.log(fibs(1));
console.log(fibs(15));

