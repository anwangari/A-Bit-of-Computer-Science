function knightMoves(start, end) {
    // If start and end are the same, return just that position
    if (start[0] === end[0] && start[1] === end[1]) {
        console.log(`=> You made it in 0 moves! Here's your path:`);
        console.log(`  [${start[0]},${start[1]}]`);
        return [start];
    }
    
    // All possible knight moves (L-shaped: 2+1 or 1+2 in any direction)
    const knightMoves = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];
    
    // Check if a position is valid (within board bounds)
    function isValidPosition(x, y) {
        return x >= 0 && x <= 7 && y >= 0 && y <= 7;
    }
    
    // BFS setup
    const queue = [[start, [start]]]; // [position, path_to_position]
    const visited = new Set();
    visited.add(`${start[0]},${start[1]}`);
    
    while (queue.length > 0) {
        const [currentPos, path] = queue.shift();
        const [x, y] = currentPos;
        
        // Try all possible knight moves from current position
        for (const [dx, dy] of knightMoves) {
            const newX = x + dx;
            const newY = y + dy;
            const newPos = [newX, newY];
            const posKey = `${newX},${newY}`;
            
            // Skip if invalid position or already visited
            if (!isValidPosition(newX, newY) || visited.has(posKey)) {
                continue;
            }
            
            // Create new path including this position
            const newPath = [...path, newPos];
            
            // Check if we reached the target
            if (newX === end[0] && newY === end[1]) {
                console.log(`=> You made it in ${newPath.length - 1} moves! Here's your path:`);
                newPath.forEach(pos => console.log(`  [${pos[0]},${pos[1]}]`));
                return newPath;
            }
            
            // Mark as visited and add to queue for further exploration
            visited.add(posKey);
            queue.push([newPos, newPath]);
        }
    }
    
    // This should never happen on a valid chessboard
    return null;
}

// Test cases
console.log("=== Test Case 1 ===");
knightMoves([0,0], [1,2]);

console.log("\n=== Test Case 2 ===");
knightMoves([0,0], [3,3]);

console.log("\n=== Test Case 3 ===");
knightMoves([3,3], [0,0]);

console.log("\n=== Test Case 4 ===");
knightMoves([0,0], [7,7]);

console.log("\n=== Test Case 5 ===");
knightMoves([3,3], [4,3]);

console.log("\n=== Edge Case: Same Start and End ===");
knightMoves([4,4], [4,4]);