
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (this.head === null) {
      this.head = newNode;
    }
    if(this.tail !== null){
        this.tail.next = newNode;
       }
    this.tail = newNode;
  };


  list.removeHead = function() {
    var formerHead = this.head;
    //delete the current head
    var newHead = this.head.next;
    delete this.head;
    //set the [head + 1] to head and subtract each index after?
    this.head = newHead;
    //return the formerhead that was deleted
    return formerHead.value;
  };

  list.contains = function(target) {
    var currentNode = this.head;
    //current node is this .head [4] -> [5]
    //iterate across nodes look for end which is specifed by being node.next null
    if(currentNode.value === target){
      return true;
    }
    else{
      while(currentNode.next !== null){
        if(currentNode.next.value === target){
          return true;
        }
        currentNode = currentNode.next;
        }
    }
    return false;
  };

  return list;
};


var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  return node;
};



var myStack = LinkedList();
myStack.addToTail("alx");
myStack.addToTail("sarah");
myStack.addToTail("goose");
console.log(myStack);
/*
 * Complexity: What is the time complexity of the above functions?
 */
