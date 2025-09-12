// mergeSort
// input = [3, 2, 1, 13, 8, 5, 0, 1]
// output = [0, 1, 1, 2, 3, 5, 8, 13]
// Requirement: IMPLEMENT RECURSIVELLY

// function mergeSort (arr) {
//     // base case
//     if () {
//         return sortedArray
//     }
//     // recursive line
//     mergeSort(arr,)
// }

function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) {
      return arr;
    }
  
    // Split the array
    const mid = arr.length >> 1;
  
    // Recursive case
    return merge(
        mergeSort(arr.slice(0, mid)),
        mergeSort(arr.slice(mid))
      );
  }
  
function merge(left, right) {
    const result = new Array(left.length + right.length);
    let i = 0, j = 0, k = 0;
    
    while (i < left.length && j < right.length) {
        result[k++] = left[i] <= right[j] ? left[i++] : right[j++];
    }
    
    while (i < left.length) result[k++] = left[i++];
    while (j < right.length) result[k++] = right[j++];
    
    return result;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
console.log(mergeSort([64, 34, 25, 12, 22, 11, 90, 5]))