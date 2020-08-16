class Stack {
  constructor(count,storage) {
    this.count = 0;
    this.storage = {};
  }

  size(){
    return Object.keys(this.storage).length;
  }

  push(value){
    this.storage[this.count] = value;
    this.count++;
    return this.count;
  }

  pop(){
    let toPop = this.storage[this.count - 1];
    delete this.storage[this.count - 1];
    this.count--;
    return toPop;

  }
}