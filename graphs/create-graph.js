/*
Scrivere ed esportare con module.exports nel file create-graph.js la funzione createGraph che dato in input un
insieme di vertici e un insieme di edges restituisca un'istanza della classe Graph opportunamente costruito.
*/



const Graph = require('./Graphs')



function createGraph(vertices, edges) {          // "vertices" dev'essere un array di vertici
  let graph = new Graph();                       // "edges" dev'essere un array di edges, ognuno è a sua volta un array
  for (vertex of vertices) {
    graph.addVertex(vertex);
  }
  for (edge of edges) {
    graph.addEdge(edge[0], edge[1], edge[2])
  }
  return graph
}



// TEST:

/*

let vertici = ["A", "B", "C", "D", "E"];
let spigoli = [["A", "B", 6], ["A", "D", 1], ["B", "C", 5], ["B", "D", 2], ["B", "E", 2], ["C", "E", 5], ["D", "E", 1]];

let grafo = createGraph(vertici, spigoli);

grafo.display()

*/





module.exports = createGraph;