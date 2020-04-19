/*
Modificare la classe Graph in modo che i metodi bfs e dfs prendano in input una funzione di callback in grado di lavorare
sul vertice visitato al posto del console.log che trovate alle righe 79 per bfs e 57 per dfs.

Testare il funzionamento dei nuovi metodi nel file test-bfs-dfs.js utilizzando la funzione createGraph dell'esercizio 2
creando un grafo a vostro piacimento.
*/



const Graph = require('./Graphs')
const createGraph = require('./create-graph')



let vertici = ["A", "B", "C", "D", "E", "F", "G", "H"]
let spigoli = [["A", "B", 3], ["A", "D", 6], ["B", "D", 4], ["D", "H", 7], ["D", "C", 6], ["C", "E", 3], ["C", "F", 4], ["C", "G", 6], ["F", "G", 2]]

let grafo = createGraph(vertici, spigoli);



// TEST 1 (callback per metterli tutti in una stringa)

console.log("TEST 1 (bfs):\n")
let bfsString = "";
grafo.bfs("A", (vertex)  => bfsString += vertex + " ")
console.log(bfsString);



// TEST 2 (callback che mostra anche gli edges) (gli ho passato anche il grafo, passandogli "this")

console.log("\nTEST 2 (bfs):\n")

grafo.bfs("A", (vertex, graph)  => { console.log(vertex, "--- neighbours:", graph.edges[vertex].map((v) => v.vertex).join(", ")) })



// TEST 3 (callback che mostra anche la stack) (però nel dfs ho spostato la callback mettendola dopo che mette in stack i vicini)

console.log("\nTEST 3 (dfs):\n")

grafo.dfs("A", (vertex, g, stack) => { console.log(vertex, "--- stack:", stack.container.join(" ")) })