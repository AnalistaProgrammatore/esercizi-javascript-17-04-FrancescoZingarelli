/*
Modificare la classe Graph aggiungendo la classe Vertex per rappresentare un vertice in modo che si possa lavorare
su vertici che abbiano dei dati strutturati al proprio interno e la classe Edge per rappresentare una connessione.
Modificare poi i metodi addVertex, addEdge e addDirectEdge in modo che inseriscano nell' array this.vertex oggetti
della classe Vertex e nella lista di adiacenze di ogni vertice this.edges un array di oggetti della classe Edge.

Testare la modifica nel file test-vertex.js

NB this.edges deve rimanere un dizionario per cui la classe Vertex dovrà prevedere una proprieta key per poter
funzionare sul dizionario
*/





const PriorityQueue = require('../structs/PriorityQueue')
const Queue = require('../structs/Queue')
const Stack = require('../structs/Stack')



/** GRAPH   ---  ABSTRACT DATA TYPE
 * 
 * @property edges -> Lista di adiacenza dei singoli vertici
 * @property vertex -> Lista dei vertici presenti nel grafo
 * 
 * @method addVertex -> aggiunge un vertice alla lista dei vertici
 * @method addEdge -> aggiunge una connessione tra il vertice 1 e il vertice 2 e viceversa
 * @method addDirectEdge -> aggiunge una connessione solo tra il vertice 1 e il vertice 2
 * @method display -> stampa il grafo secondo la lista di adiacenze
 * @method bsf -> esegue l'attraversamento in ampiezza del grafo
 * @method dsf -> esegue l'attraversamento in profondità del grafo
 * @method dijkstra -> esegue l'algoritmo di Dijstra per trovare i cammini minimi
*/





/*
gli oggetti vertex li ho fatti con una proprietà che ha come nome una chiave che gli dai quando li inserisci,
e contiene l'oggetto che gli gli dai quando li inserisci

gli oggetti edge sono uguali a prima, ma contengono solo le chiavi dei vertici

per come l'ho fatto io ho dovuto modificare leggermente i metodi dfs, bfs, e dijkstra

ho anche aggiunto il metodo "getVertex"
*/

class GraphMod {
  constructor() {
    this.edges = {}
    this.vertices = []
    this.verticesKeys = []
  }

  addVertex(vertex, key) {
    let newVertex = new this.Vertex(vertex, key);

    this.vertices.push(newVertex)
    this.edges[key] = []
    this.verticesKeys.push(key)
  }

  addEdge(vertex1key, vertex2key, weight = 1) {
    this.edges[vertex1key].push(new this.Edge(vertex2key, weight))
    this.edges[vertex2key].push(new this.Edge(vertex1key, weight))
  }

  addDirectEdge(vertex1key, vertex2key, weight = 1) {
    this.edges[vertex1key].push(new this.Edge(vertex2key, weight))
  }

  getVertex(key) {
    return this.vertices.find((v) => v.key === key)
  }
  display() {
    let graph = '';
    for(const vertexKey of this.verticesKeys) {
      const edges = this.edges[vertexKey].map(edge => edge.vertex + " (w:" + edge.weight + ")")       // HO AGGIUNTO I WEIGHT !!!
      graph += `${vertexKey} -> ${edges.join(', ')} \n`
    }
    console.log(graph)
  }

  dfs(startVertex){
    const stack = new Stack(this.verticesKeys.length)
    const explored = new Set()
    stack.push(startVertex)
    explored.add(startVertex)
    while(!stack.isEmpty()){
      const current = stack.pop()
      console.log(current)
      const edges = this.edges[current].filter(edge => !explored.has(edge.vertex))
      for(const neighbour of edges) {
        stack.push(neighbour.vertex)
        explored.add(neighbour.vertex)
      }
    }
  }

  bfs(startVertex){
    const queue = new Queue(this.verticesKeys.length)
    const explored = new Set()
    queue.enqueue(startVertex)
    explored.add(startVertex)
    while(!queue.isEmpty()) {
      const current = queue.dequeue()
      console.log(current)
      const edges = this.edges[current].filter(edge => !explored.has(edge.vertex))
      for(const neighbour of edges) {
        queue.enqueue(neighbour.vertex)
        explored.add(neighbour.vertex)
      }
    }
  }

  dijkstra(startVertex) {
    /** INIZIALIZZAZIONE 
     * preparo le distanze e i percorsi per immagazzinare i risultati
     * e istanzio la coda a priorità usata dall'algoritmo
    */
    const distances = {}
    const prev = {}
    const pq = new PriorityQueue(this.verticesKeys.length * this.verticesKeys.length)
    
    /**
     * IMPOSTO IL RISULTATO DEL VERTICE DI PARTENZA
     * possiamo facilmente calcolare i risultati per il vertice di partenza essendo a distanza 0
     * da se stesso
     */
    distances[startVertex] = 0
    pq.enqueue(startVertex, 0)
    
    /** INIZIALIZZO I RISULTATI
     * imposto la distanza iniziale di tutti i vertici tranne startVertex da startVertex ad infinito
     * e imposto tutti i percorsi ad un nuovo Set
     * Utilizzo un set per avere sempre risultati univoci
     * e imposto il primo elemento di ogni vertice tranne startVertex a startVertex
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
     */
    for(const verticeKey of this.verticesKeys) {
      if(verticeKey !== startVertex) {
        distances[verticeKey] = Infinity
      }
      prev[verticeKey] = null
    }

    /** MAIN LOOP */
    while(!pq.isEmpty()) {
      const currentVertex = pq.dequeue().data // estraggo il vertice con peso minimo dalla coda
      /** CICLO I VICINI DEL VERTICE PRECEDENTEMENTE ESTRATTO */
      for(const neighbor of this.edges[currentVertex]) {
        /** 
         * calcolo la distanza tra il vicino (nighbor) e la distanza immagazinata per il vertice
         * estratto precedentemente
         */
        const distance = distances[currentVertex] + neighbor.weight
        /**
         * Se la distanza calcolata è minore alla distanza precedentemente immagazzinata
         * per il vicino (nighbor) allora ho trovato un cammino più breve da inserire tra i risultati
         */
        if(distance < distances[neighbor.vertex]) {
          // inserisco la distanza minima trovata per il neighbor nei risultati
          distances[neighbor.vertex] = distance
          /*
          * inserisco il vertice analizzato precedentemente nel set dei percorsi di neighbor
          * escludendo startVertex dall'inserimento
          */
          prev[neighbor.vertex] = currentVertex
          // inserisco nella coda il neighbor trovato con priorità impostata alla nuova distanza
          pq.enqueue(neighbor.vertex, distance)
        }
      }
    }

    /** FUNZIONE PER LA RICERCA DEL PERCORSO MINIMO DATO UN NODO DESTINAZIONE */
    const getPath = dest => {
      const paths = new Stack() // inizializza lo stack dei passi
      while(prev[dest]) { // finchè l'algoritmo di dijkstra ha marcato un passaggio su un vertice
        paths.push(dest) // inserisci il nodo destinazione nello stack
        dest = prev[dest] // sostituisci il nuovo dest con il precedente nodo visionato da dijkstra
      }
      return paths.container
    }

    /** COSTRUISCI I PERCORSI PER TUTTI I VERTICI DEL GRAFO */
    const paths = {}
    for(const p in prev) {
      paths[p] = getPath(p)
    }

    return { distances, paths }
  }
}

Graph.prototype.Vertex = class Vertex {
    constructor(vertex, key) {
        this.key = key
        this.vertex = vertex
    }
}

Graph.prototype.Edge = class Edge {
    constructor(toVertex, weight) {
        this.vertex = toVertex
        this.weight = weight
    }
}





module.exports = GraphMod





// TEST:

/*

let grafo = new Graph();

grafo.addVertex({name: "Frederick", surname: "Padilla", age: "41"}, "Frederick-Padilla");
grafo.addVertex({name: "Eden", surname: "Maxwell", age: "25"}, "Eden-Maxwell");
grafo.addVertex({name: "Lillian", surname: "Chang", age: "33"}, "Lillian-Chang");
grafo.addVertex({name: "Kayleigh", surname: "Ashley", age: "53"}, "Kayleigh-Ashley");
grafo.addVertex({name: "Iris", surname: "Adams", age: "26"}, "Iris-Adams");

grafo.addEdge("Frederick-Padilla", "Eden-Maxwell", 6)
grafo.addEdge("Frederick-Padilla", "Kayleigh-Ashley", 1)
grafo.addEdge("Eden-Maxwell", "Lillian-Chang", 5)
grafo.addEdge("Eden-Maxwell", "Kayleigh-Ashley", 2)
grafo.addEdge("Eden-Maxwell", "Iris-Adams", 2)
grafo.addEdge("Lillian-Chang", "Iris-Adams", 5)
grafo.addEdge("Kayleigh-Ashley", "Iris-Adams", 1)



console.log("MOSTRO IL VERTEX CON CHIAVE \"Eden-Maxwell\":");
console.log(grafo.getVertex("Eden-Maxwell"));

/*