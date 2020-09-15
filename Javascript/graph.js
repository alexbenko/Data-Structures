

// Instantiate a new graph
var Graph = function() {

  var newNode =  Object.create(Graph.prototype);

  newNode.edges = [];
  newNode.nodes= [];

  return newNode;
};


// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.newNode = node;
  this.nodes.push(this.newNode);

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  for(let i = 0; i < this.nodes.length;i++){
    if(this.nodes[i] === node){
      return true;
    }
  }
  return false;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for(var i = 0; i < this.nodes.length;i++){
    if(this.nodes[i] === node){
      if (this.edges !== undefined && this.edges !== undefined) {
        delete this.edges;
      }
      delete this.nodes[i];
    }
  }
};

//node1 {toNode2, fromNode3}
//node3 {toNode1, FromNode2}

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var check = [];
  check.push(fromNode);
  check.push(toNode);
  if(this.edges !== undefined){
  for(let i=0; i < this.edges.length; i++){
      if(check.sort().join(',') == this.edges[i]){
        return true;
      }
  }
}
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
//WORKING CODE BELOW
 /*  for(var i = 0; i < this.nodes.length;i++){
    if(fromNode === this.nodes[i]){

      this.edges.toNode = this.edges.toNode.push(toNode);

    }else if(toNode === this.nodes[i]){
      this.edges.fromNode = fromNode;
    }
  } */
  this.edges.push([toNode, fromNode]);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  /* console.log("remove", fromNode, "fromNode", toNode, "toNode");
  console.log(this.toEdges, "to Edges", this.fromEdges, "from Edges") */
  var check = [];
  check.push(fromNode);
  check.push(toNode);

  for(let i=0; i < this.edges.length; i++){
      if(check.sort().join(',') == this.edges[i].sort().join()){
        delete this.edges[i];
      }
  }
  return false;
///WORKING CODE BELOW
 /*  if(this.fromEdges.contains(fromNode) && this.toEdges.contains(toNode) ){
    delete this.edges.fromNode;
    delete this.edges.toNode;
  } */
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    // console.log(cb);
    // console.log(this.nodes);
    for(let i =0; i < this.nodes.length; i++){
      //nodes[i] -> this.edge
      // console.log(this.nodes[i], "node");
      cb(this.nodes[i]);
      // console.log(this.edges);
      // console.log(this.nodes);
      // console.log(this.edges);
   }
  };


/*
 * Complexity: What is the time complexity of the above functions?
 */


