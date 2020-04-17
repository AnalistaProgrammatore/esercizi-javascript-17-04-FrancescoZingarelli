# EserciziJavascript 1704

Utilizzare la funzione `require` per importare il codice dei file delle strutture che servono per
svolgere gli esercizi.

## ESERCIZI - ALBERI BINARI DI RICERCA

Studiare il capitolo del file `BinarySearchTree.pdf`

Svolgere tutti gli esercizi nella cartella `trees` importare il file `BinarySearchTree.js` per lavorare con la classe che rappresenta la struttura dati

1. Modificare la classe `BinarySearchTree` riscrivendo i metodi `getMin()` e `getMax()` in modo ricorsivo
2. Modificare la classe `BinarySearchTree` in modo che tutti i metodi che fanno comparazione tra nodi
utilizzino una funzione `compare` come fatto precedentemente per la classe `LinkedList`
3. Scrivere nel file `test-remove.js` uno script di test che creato un albero binario di ricerca esegua:
  - il remove di un nodo foglia
  - il remove di un nodo con un solo figlio sinistro
  - il remove di un nodo con un solo figlio destro
  - il remove di un nodo con due figli
  - il remove della radice

testare il funzionamento corretto del metodo `remove` e correggere eventuali errori

NB nel metodo remove ho inserito errori

4. Modificare la classe `BinarySearchTree` aggiungendo un metodo `getNumNodes()` che restituisa il numero dei nodi presente nell'albero. Testare il metodo nel file `test-num-nodes.js`

5. Modificare la classe `BinarySearchTree` aggiungendo un metodo `getNumEdges()` che restituisa il numero di "connessioni" esistenti tra i nodi dell'albero. Testare il metodo nel file `test-num-edges.js`

## ESERCIZI - GRAFI

Studiare il capitolo del file `Graphs.js` ad eccezione dei paragrafi che trattano il Topological Sort e i Minimum Spanning Trees

Svolgere tutti gli esercizi nella cartella `graphs` importare il file `Graphs.js` per lavorare con la classe che rappresenta la struttura dati

1. Modificare la classe `Graph` aggiungendo la classe `Vertex` per rappresentare un vertice in modo che si possa lavorare su vertici che abbiano dei dati strutturati al proprio interno e la classe `Edge` per rappresentare una connessione. Modificare poi i metodi `addVertex`, `addEdge` e `addDirectEdge` in modo che inseriscano nell' array `this.vertex` oggetti della classe `Vertex` e nella lista di adiacenze di ogni vertice `this.edges` un array di oggetti della classe `Edge`.

Testare la modifica nel file `test-vertex.js`, come esempio potete usare il grafo qui descritto https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm#/media/File:Dijkstra_Animation.gif

NB `this.edges` deve rimanere un dizionario per cui la classe `Vertex` dovrà prevedere una proprieta `key` per poter funzionare sul dizionario

2. Scrivere ed esportare con `module.exports` nel file `create-graph.js` la funzione `createGraph` che dato in input un insieme di vertici e un insieme di edges restituisca un'istanza della classe `Graph` opportunamente costruito. Come esempio potete provare a costruire il seguente grafo qui descritto https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm#/media/File:Dijkstra_Animation.gif

3. Modificare la classe `Graph` in modo che i metodi `bfs` e `dfs` prendano in input una funzione di callback in grado di lavorare sul vertice visitato al posto del `console.log` che trovate alle righe 79 per `bfs` e 57 per `dfs`. Testare il funzionamento dei nuovi metodi nel file `test-bfs-dfs.js` utilizzando la funzione `createGraph` dell'esercizio 2 creando un grafo a vostro piacimento.

4. Creare un grafo pesato (in cui i pesi sono le distanze tra vertici espresse in km) utilizzando la funzione `createGraph` dell'esercizio 2 che rappresenti la mappa dell'area circostante la vostra città (oppure una città a vostro piacimento) una volta creato il grafo eseguire su di esso:
  - un attraversamento in ampiezza utilizzando il metodo `bfs` modificato nell'esercizio 3 (scegliete voi la funzione va bene anche un console.log)
  - un attraversamento in profondità utilizzando il metodo `dfs` modificato nell'esercizio 3 (scegliete voi la funzione va bene anche un console.log)
  - determinare tramite l'algoritmo di Dijkstra il cammino minimo per arrivare dalla città di partenza ad una città di arrivo passando per almeno 3 vertici escluso il vertice di partenza
  
svolgere l'esercizio nel file `my-city.js`
