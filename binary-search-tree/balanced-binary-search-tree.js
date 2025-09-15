class Node {
    constructor(data) {
      this.data = data;
      this.left = null;
      this.right = null;
    }
}
  
export default class Tree {
    constructor(array) {
      // Sort and remove duplicates from the input array
      const sortedArray = [...new Set(array)].sort((a, b) => a - b);
      this.root = this.buildTree(sortedArray);
    }
  
    buildTree(array) {
      if (!array.length) return null;
  
      const mid = Math.floor(array.length / 2);
      const node = new Node(array[mid]);
      
      node.left = this.buildTree(array.slice(0, mid));
      node.right = this.buildTree(array.slice(mid + 1));
      
      return node;
    }
  
    insert(value, node = this.root) {
      if (!this.root) {
        this.root = new Node(value);
        return;
      }
  
      if (value < node.data) {
        if (!node.left) {
          node.left = new Node(value);
        } else {
          this.insert(value, node.left);
        }
      } else if (value > node.data) {
        if (!node.right) {
          node.right = new Node(value);
        } else {
          this.insert(value, node.right);
        }
      }
    }
  
    deleteItem(value, node = this.root) {
      if (!node) return null;
  
      // Find the node to delete
      if (value < node.data) {
        node.left = this.deleteItem(value, node.left);
        return node;
      } else if (value > node.data) {
        node.right = this.deleteItem(value, node.right);
        return node;
      } else {
        // Case 1: Leaf node
        if (!node.left && !node.right) return null;
        
        // Case 2: Node with one child
        if (!node.left) return node.right;
        if (!node.right) return node.left;
  
        // Case 3: Node with two children
        let successor = node.right;
        while (successor.left) {
          successor = successor.left;
        }
        node.data = successor.data;
        node.right = this.deleteItem(successor.data, node.right);
        return node;
      }
    }
  
    find(value, node = this.root) {
      if (!node || node.data === value) return node;
  
      if (value < node.data) {
        return this.find(value, node.left);
      }
      return this.find(value, node.right);
    }
  
    levelOrderForEach(callback) {
      if (!callback) throw new Error("Callback function is required");
  
      // Iterative implementation using a queue
      const queue = [this.root];
      while (queue.length) {
        const node = queue.shift();
        if (node) {
          callback(node);
          queue.push(node.left);
          queue.push(node.right);
        }
      }
    }
  
    inOrderForEach(callback, node = this.root) {
      if (!callback) throw new Error("Callback function is required");
      
      if (node) {
        this.inOrderForEach(callback, node.left);
        callback(node);
        this.inOrderForEach(callback, node.right);
      }
    }
  
    preOrderForEach(callback, node = this.root) {
      if (!callback) throw new Error("Callback function is required");
      
      if (node) {
        callback(node);
        this.preOrderForEach(callback, node.left);
        this.preOrderForEach(callback, node.right);
      }
    }
  
    postOrderForEach(callback, node = this.root) {
      if (!callback) throw new Error("Callback function is required");
      
      if (node) {
        this.postOrderForEach(callback, node.left);
        this.postOrderForEach(callback, node.right);
        callback(node);
      }
    }
  
    height(value) {
      const node = this.find(value);
      if (!node) return null;
      
      const getHeight = (node) => {
        if (!node) return -1;
        return 1 + Math.max(getHeight(node.left), getHeight(node.right));
      };
      
      return getHeight(node);
    }
  
    depth(value, node = this.root, currentDepth = 0) {
      if (!node) return null;
      if (node.data === value) return currentDepth;
      
      if (value < node.data) {
        return this.depth(value, node.left, currentDepth + 1);
      }
      return this.depth(value, node.right, currentDepth + 1);
    }
  
    isBalanced(node = this.root) {
      if (!node) return true;
  
      const getHeight = (node) => {
        if (!node) return -1;
        return 1 + Math.max(getHeight(node.left), getHeight(node.right));
      };
  
      const leftHeight = getHeight(node.left);
      const rightHeight = getHeight(node.right);
      
      return Math.abs(leftHeight - rightHeight) <= 1 &&
             this.isBalanced(node.left) &&
             this.isBalanced(node.right);
    }
  
    rebalance() {
      const values = [];
      this.inOrderForEach(node => values.push(node.data));
      this.root = this.buildTree(values);
    }

    prettyPrint(node = this.root, prefix = '', isLeft = true) {
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          this.prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }
}