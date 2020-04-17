const BinarySearchTree = require('./BinarySearchTree')





let albero = new BinarySearchTree();

albero.insert(4);
albero.insert(2);
albero.insert(1);
albero.insert(3);
albero.insert(6);
albero.insert(5);
albero.insert(7);

console.log("ALBERO INIZIALE:\n");   // (VEDO L'ALBERO)
console.log(albero.root, "\n\n");

// RIMUOVO DUE FOGLIE
albero.remove(1);
albero.remove(7);

console.log("HO RIMOSSO DUE FOGLIE:\n");   // (VEDO L'ALBERO)
console.log(albero.root, "\n\n");

// RIMUOVO UN NODO CON UN SOLO FIGLIO SINISTRO
albero.remove(6)

// RIMUOVO UN NODO CON UN SOLO FIGLIO DESTRO
albero.remove(2)

console.log("HO RIMOSSO DUE NODI CHE AVEVANO UN FIGLIO SOLO:\n");   // (VEDO L'ALBERO)
console.log(albero.root, "\n\n");


//RICREO L'ALBERO DA CAPO
albero = new BinarySearchTree();
albero.insert(4);
albero.insert(2);
albero.insert(1);
albero.insert(3);
albero.insert(6);
albero.insert(5);
albero.insert(7);

console.log("ALBERO RESETTATO:\n");   // (VEDO L'ALBERO)
console.log(albero.root, "\n\n");

// RIMUOVO UN NODO CON DUE FIGLI
albero.remove(2);

console.log("HO RIMOSSO UN NODO CON DUE FIGLI:\n");   // (VEDO L'ALBERO)
console.log(albero.root, "\n\n");

// RIMUOVO LA RADICE
albero.remove(4);

console.log("HO RIMOSSO LA RADICE:\n");   // (VEDO L'ALBERO)
console.log(albero.root);