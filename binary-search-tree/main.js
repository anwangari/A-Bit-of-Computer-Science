import Tree from './balanced-binary-search-tree.js'

// Function to generate an array of random numbers
function generateRandomArray(size, max) {
    return Array.from({ length: size }, () => Math.floor(Math.random() * max));
}
  
// Helper function to print traversal results
function printTraversal(order, nodes) {
   console.log(`${order} order:`, nodes.map(node => node.data).join(', '));
}
  
  // Create a binary search tree with random numbers < 100
  const randomArray = generateRandomArray(10, 100);
  console.log('Initial array:', randomArray);
  const tree = new Tree(randomArray);
  
  // Print initial tree structure
  console.log('\nInitial tree structure:');
  tree.prettyPrint();
  
  // Confirm tree is balanced
  console.log('\nIs tree balanced initially?', tree.isBalanced());
  
  // Print elements in all traversal orders
  const levelOrderNodes = [];
  tree.levelOrderForEach(node => levelOrderNodes.push(node));
  printTraversal('Level', levelOrderNodes);
  
  const inOrderNodes = [];
  tree.inOrderForEach(node => inOrderNodes.push(node));
  printTraversal('In', inOrderNodes);
  
  const preOrderNodes = [];
  tree.preOrderForEach(node => preOrderNodes.push(node));
  printTraversal('Pre', preOrderNodes);
  
  const postOrderNodes = [];
  tree.postOrderForEach(node => postOrderNodes.push(node));
  printTraversal('Post', postOrderNodes);
  
  // Unbalance the tree by adding numbers > 100
  console.log('\nAdding numbers > 100 to unbalance the tree...');
  [150, 200, 250, 300].forEach(num => tree.insert(num));
  
  // Print tree structure after insertions
  console.log('\nTree structure after insertions:');
  tree.prettyPrint();
  
  // Confirm tree is unbalanced
  console.log('\nIs tree balanced after insertions?', tree.isBalanced());
  
  // Rebalance the tree
  console.log('\nRebalancing the tree...');
  tree.rebalance();
  
  // Print tree structure after rebalancing
  console.log('\nTree structure after rebalancing:');
  tree.prettyPrint();
  
  // Confirm tree is balanced
  console.log('\nIs tree balanced after rebalancing?', tree.isBalanced());
  
  // Print elements in all traversal orders after rebalancing
  const levelOrderNodesAfter = [];
  tree.levelOrderForEach(node => levelOrderNodesAfter.push(node));
  printTraversal('Level', levelOrderNodesAfter);
  
  const inOrderNodesAfter = [];
  tree.inOrderForEach(node => inOrderNodesAfter.push(node));
  printTraversal('In', inOrderNodesAfter);
  
  const preOrderNodesAfter = [];
  tree.preOrderForEach(node => preOrderNodesAfter.push(node));
  printTraversal('Pre', preOrderNodesAfter);
  
  const postOrderNodesAfter = [];
  tree.postOrderForEach(node => postOrderNodesAfter.push(node));
  printTraversal('Post', postOrderNodesAfter);



