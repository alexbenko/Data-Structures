var Tree = function(value) {
  //var tree = {}; I started using the wrong instantiation pattern and forgot to remove this line when i switched to pseudoclassical
  this.value = value;
  this.children = [];
};


Tree.prototype.addChild = function(value){
  //create a child

  var child = new Tree(value);
  this.children.push(child);
  //then push that child into the array

  return child;

};

Tree.prototype.map = function(cb){
  //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

  var result = new Tree(cb(this.value));

  //iterate over the children array
  for(var i = 0; i < this.children.length;i++){
    //if children has length/nodes
    if(result.children.length !== 0){ //this should stop it from looping
      //run  function on them
        //pushing into childrenthe value of calling the given function on them
        result.children.push(this.children[i].map(cb))
    }
  }

  //return result variable
  return result;
}