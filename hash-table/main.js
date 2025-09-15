import HashMap from './hashmap.js'

// Example usage
const hashMap = new HashMap();
hashMap.set("Carlos", "I am the old value.");
hashMap.set("Carlos", "I am the new value.");
hashMap.set("Alice", 25);
hashMap.set(42, "Answer");

console.log(hashMap.get("Carlos")); // Output: I am the new value.
console.log(hashMap.has("Alice")); // Output: true
console.log(hashMap.has("Bob")); // Output: false
console.log(hashMap.remove("Alice")); // Output: true
console.log(hashMap.length()); // Output: 2
console.log(hashMap.keys()); // Output: ["Carlos", 42]
console.log(hashMap.values()); // Output: ["I am the new value.", "Answer"]
console.log(hashMap.entries()); // Output: [["Carlos", "I am the new value."], [42, "Answer"]]
hashMap.clear();
console.log(hashMap.length()); // Output: 0