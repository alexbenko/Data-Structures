

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //retreive a bucket
  var bucket = this._storage.get(index);

   //if it doesnt exist
    //create it
    if(bucket === undefined){
      bucket = [];
      this._storage.set(index,bucket);
    }
    //if it is found, this will get set to true
    var isFound = false;
    //iterate over bucket
    for(var i = 0; i < bucket.length; i++){
      var tuple = bucket[i];
      //if key exitsts
      if(tuple[0] === k){
        tuple[1] = v;
        isFound = true;
        break;
      }
    }
        //update it

    //if no key was found
    if(!isFound){
     //insert tuple
     bucket.push([k,v]);
    }

  //insert new bucket (tuple)
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //retreive a bucket
  var bucket = this._storage.get(index);


    if(bucket === undefined){
      return null;
    }



    for(var i = 0; i < bucket.length; i++){
      var tuple = bucket[i];

      if(tuple[0] === k){
       return tuple[1];
      }
    }
    return null ; //value not found
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  //retreive a bucket
  var bucket = this._storage.get(index);


    if(bucket === undefined){
      return null;
    }



    for(var i = 0; i < bucket.length; i++){
      var tuple = bucket[i];

      if(tuple[0] === k){

       bucket.splice(i,1);
       return tuple[1];

      }
    }
    return null;
};


