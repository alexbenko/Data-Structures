var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);

  newTree.children = [];  // should be an array containing a number of subtrees

  return newTree;
};

var treeMethods = {};

//addChild should take any value and set that as the target of a node, and add that node as a child of the tree
treeMethods.addChild = function(value) {

  var child = Tree(value);   // creates a new child
  this.children.push(child); // puts new child into children array

};

//takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node
treeMethods.contains = function(target) {
 //iterate across the children array for branches


 for(let i =0; i < this.children.length; i++){
  //check each branch for potentially nested arrays
  if(this.children[i].hasOwnProperty('children') && this.children[i].children.length > 0){
    // could have children property- even if nothing to iterate across. need to figure out how to access nested children which are  arrays in the children object. and make pass true if
    for(let j =0; j < this.children[i].children.length; j++){
      if(this.children[i].children[j].value === target){
        return true;
      }
    }
  }
  else if(this.children[i].value === target){
    return true;
  }
}
return false;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
 //O(log n)
