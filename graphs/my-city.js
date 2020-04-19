/*
Creare un grafo pesato (in cui i pesi sono le distanze tra vertici espresse in km) utilizzando la funzione createGraph
dell'esercizio 2 che rappresenti la mappa dell'area circostante la vostra città (oppure una città a vostro piacimento)
una volta creato il grafo eseguire su di esso:

-un attraversamento in ampiezza utilizzando il metodo bfs modificato nell'esercizio 3
(scegliete voi la funzione va bene anche un console.log)

-un attraversamento in profondità utilizzando il metodo dfs modificato nell'esercizio 3
(scegliete voi la funzione va bene anche un console.log)

-determinare tramite l'algoritmo di Dijkstra il cammino minimo per arrivare dalla città di partenza ad una città di
arrivo passando per almeno 3 vertici escluso il vertice di partenza

(svolgere l'esercizio nel file my-city.js)
*/



const Graph = require('./Graphs')

const createGraph = require('./create-graph')





let vertici = [
  "DENVER",
  "CHEYENNE",
  "Steamboat Springs",
  "Dowd",
  "Grand Jct.",
  "Poncha Springs",
  "PUEBLO",
  "Alamosa",
  "Raton",
  "Cortez",
  "SANTA FE",
  "Gallup",
  "ALBUQUERQUE",
  "Holbrook",
  "Roswell",
  "Las Cruces",
  "EL PASO"
];

let spigoli = [
  ["DENVER", "CHEYENNE", 101],
  ["DENVER", "Steamboat Springs", 153],
  ["DENVER", "Dowd", 100],
  ["DENVER", "Poncha Springs", 135],
  ["DENVER", "PUEBLO", 109],
  ["Steamboat Springs", "Dowd", 121],
  ["Dowd", "Grand Jct.", 138],
  ["Dowd", "Poncha Springs", 86],
  ["Poncha Springs", "PUEBLO", 93],
  ["Poncha Springs", "Alamosa", 77],
  ["Poncha Springs", "Grand Jct.", 199],
  ["PUEBLO", "Alamosa", 121],
  ["PUEBLO", "Raton", 112],
  ["Alamosa", "Raton", 135],
  ["Alamosa", "Cortez", 187],
  ["Alamosa", "SANTA FE", 137],
  ["Cortez", "Gallup", 133],
  ["SANTA FE", "Raton", 175],
  ["SANTA FE", "ALBUQUERQUE", 57],
  ["SANTA FE", "Roswell", 193],
  ["ALBUQUERQUE", "Gallup", 139],
  ["ALBUQUERQUE", "Las Cruces", 222],
  ["ALBUQUERQUE", "Roswell", 197],
  ["Gallup", "Holbrook", 94],
  ["Holbrook", "Las Cruces", 333],
  ["Las Cruces", "Roswell", 182],
  ["Las Cruces", "EL PASO", 42],
  ["Roswell", "EL PASO", 201]
];

let denverMap = createGraph(vertici, spigoli);



// ATTRAVERSAMENTO IN AMPIEZZA
// (semplicemente con console.log)

console.log("ATTRAVERSAMENTO IN AMPIEZZA:\n");
denverMap.bfs("DENVER", (curr) => console.log(curr));
console.log("\n");



// ATTRAVERSAMENTO IN PROFONDITA'
// (mettendo tutto in una stringa)

console.log("ATTRAVERSAMENTO IN PROFONDITA':\n");

let resultString = "";

denverMap.dfs("DENVER", (curr) => { resultString += curr + " - "});

console.log(resultString.substring(0, resultString.length - 3), "\n\n");



// PERCORSO PIU' BREVE DA DENVER A EL PASO (CON DIJKSTRA)
// (ho fatto un metodo apposta che ti dice solo il percorso specifico che vuoi)

console.log(denverMap.shortestPath("DENVER", "EL PASO") + " miles");