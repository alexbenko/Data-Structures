class Queue {
  constructor(storage, start, end) {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }


  size(){
    return Object.keys(this.storage).length;
  }

  enqueue(value){
    this.storage[this.end] = value;
    this.end++;
  }

  dequeue(){
    let toPop = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return toPop;
  }

}
