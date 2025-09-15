export default class HashMap {
  constructor(initialCapacity = 16, loadFactor = 0.75) {
    this.capacity = initialCapacity; // Initial number of buckets
    this.loadFactor = loadFactor; // Threshold for resizing
    this.buckets = new Array(initialCapacity).fill(null).map(() => []); // Array of arrays for chaining
    this.size = 0; // Number of stored key-value pairs
  }

  // Simple hash function with bounds checking
  hash(key) {
    let hash = 0;
    const strKey = typeof key === "string" ? key : JSON.stringify(key);
    for (let i = 0; i < strKey.length; i++) {
      hash = (hash + strKey.charCodeAt(i) * 31) % this.capacity;
    }
    const index = hash;
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    return index;
  }

  // Resize the hash map when load factor is exceeded
  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2; // Double the capacity
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;

    // Rehash all existing entries
    for (const bucket of oldBuckets) {
      for (const [key, value] of bucket) {
        this.set(key, value);
      }
    }
  }

  // Set a key-value pair
  set(key, value) {
    // Check if resizing is needed
    if (this.size / this.capacity >= this.loadFactor) {
      this.resize();
    }

    const index = this.hash(key); // hash method already checks bounds
    const bucket = this.buckets[index];

    // Update existing key
    for (let pair of bucket) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    // Add new key-value pair
    bucket.push([key, value]);
    this.size++;
  }

  // Get value by key
  get(key) {
    const index = this.hash(key); // hash method already checks bounds
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return null;
  }

  // Check if key exists
  has(key) {
    const index = this.hash(key); // hash method already checks bounds
    const bucket = this.buckets[index];

    for (let pair of bucket) {
      if (pair[0] === key) {
        return true;
      }
    }
    return false;
  }

  // Remove a key-value pair
  remove(key) {
    const index = this.hash(key); // hash method already checks bounds
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  // Return number of stored keys
  length() {
    return this.size;
  }

  // Remove all entries
  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.size = 0;
  }

  // Return array of all keys
  keys() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        result.push(key);
      }
    }
    return result;
  }

  // Return array of all values
  values() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const [, value] of bucket) {
        result.push(value);
      }
    }
    return result;
  }

  // Return array of [key, value] pairs
  entries() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const pair of bucket) {
        result.push(pair);
      }
    }
    return result;
  }
}