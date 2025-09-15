class Node {
    constructor(value = null) {
      this.value = value;
      this.nextNode = null;
    }
  }


  export default class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Insert at the end
    append(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        this.head = newNode;
        return;
      }
  
      let current = this.head;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  
    // Insert at the beginning
    prepend(value) {
      const newNode = new Node(value);
      newNode.nextNode = this.head;
      this.head = newNode;
    }
  
    //size: number of nodes
    size() {
        let count = 0;
        let current = this.head;
        while (current) {
        count++;
        current = current.nextNode;
        }
        return count;
    }

    //head: first node
    headNode() {
        return this.head;
    }

    //tail: last node
    tail() {
        if (!this.head) return null;
        let current = this.head;
        while (current.nextNode) {
        current = current.nextNode;
        }
        return current;
    }

    //at(index): get node at index
    at(index) {
        if (index < 0) return null;
        let current = this.head;
        let count = 0;
        while (current) {
        if (count === index) return current;
        current = current.nextNode;
        count++;
        }
        return null;
    }

    //pop: remove last element
    pop() {
        if (!this.head) return null;
        if (!this.head.nextNode) {
        const temp = this.head;
        this.head = null;
        return temp;
        }
        let current = this.head;
        while (current.nextNode.nextNode) {
        current = current.nextNode;
        }
        const temp = current.nextNode;
        current.nextNode = null;
        return temp;
    }

    //contains(value): check if value exists
    contains(value) {
        let current = this.head;
        while (current) {
        if (current.value === value) return true;
        current = current.nextNode;
        }
        return false;
    }

    //find(value): return index or null
    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
        if (current.value === value) return index;
        current = current.nextNode;
        index++;
        }
        return null;
    }

    //toString: format ( value ) -> ... -> null
    toString() {
        let current = this.head;
        let result = "";
        while (current) {
        result += `( ${current.value} ) -> `;
        current = current.nextNode;
        }
        return result + "null";
    }

    //insertAt(value, index)
    insertAt(value, index) {
        if (index < 0 || index > this.size()) return null;
        const newNode = new Node(value);

        if (index === 0) {
        newNode.nextNode = this.head;
        this.head = newNode;
        return;
        }

        let current = this.head;
        let prev = null;
        let count = 0;

        while (count < index) {
        prev = current;
        current = current.nextNode;
        count++;
        }

        newNode.nextNode = current;
        prev.nextNode = newNode;
    }

    //removeAt(index)
    removeAt(index) {
        if (index < 0 || index >= this.size() || !this.head) return null;

        if (index === 0) {
        const removed = this.head;
        this.head = this.head.nextNode;
        return removed;
        }

        let current = this.head;
        let prev = null;
        let count = 0;

        while (count < index) {
        prev = current;
        current = current.nextNode;
        count++;
        }

        prev.nextNode = current.nextNode;
        return current;
    }
}
  