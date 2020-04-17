const BinarySearchTree = require('./BinarySearchTree');





let albero = new BinarySearchTree();

albero.insert(4);
albero.insert(2);
albero.insert(1);
albero.insert(3);
albero.insert(6);
albero.insert(5);
albero.insert(7);

console.log(albero.getNumEdges())