class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}

/** ABSTRACT DATA TYPE per le linked list
 * @property root -> Nodo radice dell'albero
 * @method insert(data) -> Inserisce un nodo nell'albero
 * @method remove(data) -> Rimuove un nodo dall'albero
 * @method inorder(node) -> Attraversamento in order -> O(n)
 * @method preorder(node) -> Attraversamento preorder -> O(n)
 * @method postorder(node) -> Attraversamento postorder -> O(n)
 * @method getRoot() -> ritorna il nodo radice -> O(1)
 * @method getMin() -> ritorna il nodo minimo dell'albero -> O(height)
 * @method getMax() -> ritorna il nodo massimo dell'albero -> O(height)
 * @method find(node, data) -> ritorna il nodo cercato -> O(logn)
*/

class BinarySearchTree {
  constructor(compare = (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0; }) {

    this.root = null
    
    this.compare = compare;

    this.insertNode = (node, newNode) => {
      if(compare(newNode.data, node.data) === -1) {               
        if(node.left === null) {
          node.left = newNode
        } else {
          this.insertNode(node.left, newNode)
        }
      } else {
        if(node.right === null) {
          node.right = newNode
        } else {
          this.insertNode(node.right, newNode)
        }
      }
    }

    this.removeNode = (node, key) => {
      if(node === null) return null

      if(compare(key, node.data) === -1) {
        node.left = this.removeNode(node.left, key)
        return node
      }

      if(compare(key, node.data) === 1) {
        node.right = this.removeNode(node.right, key)
        return node
      }

      if(node.left === null && node.right === null) return null

      if(node.left === null) return node.right
      if(node.right === null) return node.left

      const min = this.getMinR(node.right)
      node.data = min.data
      node.right = this.removeNode(node.right, min.data)
      return node
    }
  }

  insert(data) {
    const newNode = new Node(data)
    if(this.root === null) {
      return this.root = newNode
    } else {
      this.insertNode(this.root, newNode)
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  getMinR(node = this.root) {
    if (node.left === null) return node;
    return this.getMinR(node.left);
  }

  getMaxR(node = this.root) {
    if (node.right === null) return node;
    return this.getMaxR(node.right);
  }

  getRoot() {
    return this.root
  }

  inOrderCB(cb = (n) => console.log(n.data), node = this.root) {
        if (node !== null) {
            this.inOrderCB(cb, node.left);
            cb(node);
            this.inOrderCB(cb, node.right);
        }
  }

  preOrderCB(cb = (n) => console.log(n.data), node = this.root) {
      if (node !== null) {
          cb(node);
          this.preOrderCB(cb, node.left);
          this.preOrderCB(cb, node.right);
      }
  }

  postOrderCB(cb = (n) => console.log(n.data), node = this.root) {
      if (node !== null) {
          this.postOrderCB(cb, node.left);
          this.postOrderCB(cb, node.right);
          cb(node);
      }
  }
  
  find(node, data) {
    if(node === null) return null

    if(this.compare(data, node.data) === -1) {
      return this.find(node.left, data)
    } else if(this.compare(data, node.data) === 1) {
      return this.find(node.right, data)
    } else {
      return node
    }
  }

  getNumNodes() {
    let count = 0;
    this.inOrderCB(() => ++count)
    return count;
  }

  getNumEdges() {
    return this.getNumNodes() - 1;
  }
}





module.exports = BinarySearchTree