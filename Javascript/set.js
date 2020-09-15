var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me

  console.log(set._storage);


  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage.push(item);
};

setPrototype.contains = function(item) {
  for(var keys in this._storage){
    if (item === this._storage[keys]){
      return true;
    }
  }
   return false;
};

setPrototype.remove = function(item) {
  for(let i = 0; i < this._storage.length; i++){
    if(this._storage[i] === item){
      delete this._storage[i];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
//O(n) = have to loop across the array every time to remove or find keys for contains.